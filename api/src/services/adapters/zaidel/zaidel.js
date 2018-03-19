import fs from "fs";
import csv from "csv-streamify";
import path from "path";
import Promise from "bluebird";
import { reject } from "any-promise";
import mississippi from "mississippi";

import {
  SpectrumLinesLibraries,
  SpectrumLinesLibraryRecords,
  ChemicalElements
} from "../../../database/models/index";

const { through } = mississippi;

const haveSeenElement = {};

function collector(limit = 100) {
  let buffer = [];

  function write(object, _, next) {
    try {
      buffer.push(object);
      if (buffer.length === limit) {
        next(null, buffer);
        buffer = [];
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }

  function end(cb) {
    if (buffer.length) {
      this.push(buffer);
    }
    cb();
  }

  return through.obj(write, end);
}

export default () => {
  return new Promise(async (resolve, reject) => {
    let library = await SpectrumLinesLibraries.find({
      where: { name_library: "zaidel" }
    });

    if (library) return resolve();

    library = await SpectrumLinesLibraries.create({
      name_library: "zaidel",
      library_description: "Библиотека спектральных линий Зейделя"
    });

    let cnt = 0;
    fs
      .createReadStream(path.join(__dirname, "zaidel.txt"))
      .pipe(
        csv({
          delimiter: "\t",
          columns: true,
          newline: "\r\n",
          objectMode: true
        })
      )
      .pipe(
        through.obj(async (object, _, next) => {
          if (!haveSeenElement[object.Name]) {
            let element = await ChemicalElements.findOrCreate({
              where: { element_name: object.Name }
            });

            haveSeenElement[object.Name] = element[0].id;
          }

          const reframedObject = {
            wave_length: object.Wavelength,
            ionization_stage: object["Ionization Stage"],
            intensity: object.RelInt,
            library_id: library.id,
            element_id: haveSeenElement[object.Name]
          };

          next(null, reframedObject);
        })
      )
      .pipe(collector())
      .pipe(
        through.obj(async (array, _, next) => {
          await SpectrumLinesLibraryRecords.bulkCreate(array);

          next();
        })
      )
      .on("error", console.error)
      .on("finish", () => {
        resolve();
      });
  });
};
