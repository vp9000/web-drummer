import { HIDE_DISCLAIMER_KEY, STORAGE_KEY_PRESET } from "data/constants";
import { InstrumentParameterMap, PresetMap, Sequence, Settings } from "types";
import defaultPresets from "data/default-presets.json";

/**
 * TODO: validate data loaded from local storage
 */
export const loadPresets = (): PresetMap => {
  const data = localStorage.getItem(STORAGE_KEY_PRESET);

  if (!data) {
    return {};
  }

  return JSON.parse(data) as PresetMap;
};

export const loadPreset = (presetName: string) => {
  const presets = loadPresets();
  return presets[presetName];
};

export const savePreset = (
  presetName: string,
  sequence: Sequence,
  settings: Settings,
  instrumentParameterMap: InstrumentParameterMap
) => {
  const presets = loadPresets();
  presets[presetName] = { sequence, settings, instrumentParameterMap };

  const serialized = JSON.stringify(presets);
  localStorage.setItem(STORAGE_KEY_PRESET, serialized);
};

export const deletePreset = (presetName: string) => {
  const presets = loadPresets();

  if (presets[presetName]) {
    delete presets[presetName];
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
