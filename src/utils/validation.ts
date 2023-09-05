import { PresetMap } from "types";

export const processPresetData = (input: string): PresetMap => {
  const data = JSON.parse(input);

  if (!(typeof data === "object" && !Array.isArray(data) && data !== null)) {
    throw new Error("Input is not an object");
  }

  Object.values(data).forEach(presetData => {
    if (!presetData?.sequence) {
      throw new Error("No sequence data present");
    }

    if (!presetData?.settings) {
      throw new Error("No settings data present");
    }

    if (!presetData?.instrumentParameterMap) {
      throw new Error("No instrument parameter data present");
    }
  });

  return data as PresetMap;
};
