import { PRESET_VERSION } from "data/constants";
import { PresetMap } from "types";

export const processPresetData = (input: string): PresetMap => {
  const rawInput = JSON.parse(input);

  if (!(typeof rawInput === "object" && !Array.isArray(rawInput) && rawInput !== null)) {
    throw new Error("Input is not an object");
  }

  if (rawInput?.version !== PRESET_VERSION) {
    throw new Error("Invalid preset version");
  }

  return rawInput as PresetMap;
};
