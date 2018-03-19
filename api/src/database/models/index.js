import { ArtworkGenres } from "./artwork_genres";
import { ArtworkTypePositions } from "./artwork_type_positions";
import { Artworks } from "./artworks";
import { Authors } from "./authors";
import { ChemicalElements } from "./chemical_elements";
import { Cities } from "./cities";
import { Countries } from "./countries";
import { CreationDates } from "./creation_dates";
import { DateRemarks } from "./date_remarks";
import { Epochs } from "./epochs";
import { FocusSectionSpectralResearchs } from "./focus_section_spectral_researchs";
import { HistoricalPeriods } from "./historical_periods";
import { InstrumentalMethods } from "./instrumental_methods";
import { Locations } from "./locations";
import { Organizations } from "./organizations";
import { PaintingSchools } from "./painting_schools";
import { PaintingStyles } from "./painting_styles";
import { PaintingTechniques } from "./painting_techniques";
import { Paints } from "./paints";
import { PassportResearches } from "./passport_researches";
import { Photos } from "./photos";
import { Pigments } from "./pigments";
import { PigmentsFormulas } from "./pigments_formulas";
import { PositionArtworkBridges } from "./position_artwork_bridges";
import { Positions } from "./positions";
import { Privileges } from "./privileges";
import { SpectrumLines } from "./spectrum_lines";
import { SpectrumLinesLibraries } from "./spectrum_lines_libraries";
import { Spectrums } from "./spectrums";
import { Users } from "./users";
import { SpectrumLinesLibraryRecords } from "./spectrum_lines_libraries_record";

SpectrumLines.belongsTo(SpectrumLinesLibraries, { foreignKey: "library_id" });
SpectrumLinesLibraries.hasMany(SpectrumLines);
SpectrumLinesLibraryRecords.belongsTo(SpectrumLinesLibraries, {
  foreignKey: "library_id"
});
SpectrumLinesLibraryRecords.belongsTo(ChemicalElements, {
  foreignKey: "element_id"
});
SpectrumLinesLibraries.hasMany(SpectrumLinesLibraryRecords);

export {
  ArtworkGenres,
  ArtworkTypePositions,
  Artworks,
  Authors,
  ChemicalElements,
  Cities,
  Countries,
  CreationDates,
  DateRemarks,
  Epochs,
  FocusSectionSpectralResearchs,
  HistoricalPeriods,
  InstrumentalMethods,
  Locations,
  Organizations,
  PaintingSchools,
  PaintingStyles,
  PaintingTechniques,
  Paints,
  PassportResearches,
  Photos,
  Pigments,
  PigmentsFormulas,
  PositionArtworkBridges,
  Positions,
  Privileges,
  SpectrumLines,
  SpectrumLinesLibraries,
  Spectrums,
  Users,
  SpectrumLinesLibraryRecords
};
