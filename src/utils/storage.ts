import { PresetMap } from "types";
import { HIDE_DISCLAIMER_KEY, STORAGE_KEY_PRESET } from "data/constants";
import { processPresetData } from "./validation";
import { toast } from "react-toastify";
import defaultPresets from "data/default-presets.json";

export const loadPresetMapFromLocalStorage = (): PresetMap => {
  const data = localStorage.getItem(STORAGE_KEY_PRESET);
  const fallback = defaultPresets;

  if (!data) {
    return fallback;
  }

  try {
    const presetMap = processPresetData(data);
    return presetMap;
  } catch (err) {
    console.error(err);
    toast.info("Invalid preset data 😢 Falling back to default presets");
    return fallback;
  }
};

export const savePresetMapToLocalStorage = (presetMap: PresetMap) => {
  const serialized = JSON.stringify(presetMap);
  localStorage.setItem(STORAGE_KEY_PRESET, serialized);
};

export const setHideDisclaimerState = () => {
  localStorage.setItem(HIDE_DISCLAIMER_KEY, JSON.stringify(true));
};

export const getHideDisclaimerState = () => {
  const data = localStorage.getItem(HIDE_DISCLAIMER_KEY);
  return data;
};
