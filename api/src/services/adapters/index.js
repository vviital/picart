import zaidelAdapter from "./zaidel/zaidel";

export const uploadDataSources = async () => {
  await zaidelAdapter();

  console.log("finished!!!");
};
