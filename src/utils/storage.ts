import { InstrumentParameterMap, PresetMap, Sequence, Settings } from "types";
import { HIDE_DISCLAIMER_KEY, PRESET_VERSION, STORAGE_KEY_PRESET } from "data/constants";
import defaultPresets from "data/default-presets.json";
import { processPresetData } from "./validation";
import { toast } from "react-toastify";

export const loadPresets = (): PresetMap => {
  const data = localStorage.getItem(STORAGE_KEY_PRESET);
  const fallback = { version: PRESET_VERSION, data: {} };

  if (!data) {
    return fallback;
  }

  try {
    const presetMap = processPresetData(data);
    return presetMap;
  } catch (err) {
    console.error(err);
    toast.info("Invalid preset data 😢 Falling back to empty pattern");
    return fallback;
  }
};

export const loadPreset = (presetName: string) => {
  const { data } = loadPresets();
  return data[presetName];
};

export const savePreset = (
  presetName: string,
  sequence: Sequence,
  settings: Settings,
  instrumentParameterMap: InstrumentParameterMap
) => {
  const presets = loadPresets();
  presets.data[presetName] = { sequence, settings, instrumentParameterMap };

  const serialized = JSON.stringify(presets);
  localStorage.setItem(STORAGE_KEY_PRESET, serialized);
};

export const deletePreset = (presetName: string) => {
  const presets = loadPresets();

  if (presets.data[presetName]) {
    delete presets.data[presetName];
  }

  const serialized = JSON.stringify(presets);
  localStorage.setItem(STORAGE_KEY_PRESET, serialized);
};

export const initializePresets = () => {
  const presetData = localStorage.getItem(STORAGE_KEY_PRESET);

  if (presetData) {
    return;
  }

  const serialized = JSON.stringify(defaultPresets);
  localStorage.setItem(STORAGE_KEY_PRESET, serialized);
};

export const setHideDisclaimerState = () => {
  localStorage.setItem(HIDE_DISCLAIMER_KEY, JSON.stringify(true));
};

export const getHideDisclaimerState = () => {
  const data = localStorage.getItem(HIDE_DISCLAIMER_KEY);
  return data;
};
