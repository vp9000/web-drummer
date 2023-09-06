import { create } from "zustand";
import { produce } from "immer";
import { InstrumentParameterMap, PresetMap, Sequence, Settings } from "../types";
import { loadPresetMapFromLocalStorage, savePresetMapToLocalStorage } from "utils/storage";
import defaultPresets from "data/default-presets.json";

type DrumkitStore = {
  presetMap: PresetMap;
  savePreset: (
    presetName: string,
    sequence: Sequence,
    settings: Settings,
    instrumentParameterMap: InstrumentParameterMap
  ) => void;
  deletePreset: (presetName: string) => void;
  importPresets: (presetMap: PresetMap) => void;
  resetPresets: () => void;
};

const usePresetStore = create<DrumkitStore>(set => ({
  presetMap: loadPresetMapFromLocalStorage(),
  savePreset: (presetName, sequence, settings, instrumentParameterMap) =>
    set(
      produce(({ presetMap }: DrumkitStore) => {
        presetMap.data[presetName] = { sequence, settings, instrumentParameterMap };
        savePresetMapToLocalStorage(presetMap);
      })
    ),
  deletePreset: presetName =>
    set(
      produce(({ presetMap }: DrumkitStore) => {
        if (presetMap.data[presetName]) {
          delete presetMap.data[presetName];
          savePresetMapToLocalStorage(presetMap);
        }
      })
    ),
  importPresets: presetMap =>
    set(
      produce((state: DrumkitStore) => {
        state.presetMap = presetMap;
        savePresetMapToLocalStorage(presetMap);
      })
    ),
  resetPresets: () =>
    set(
      produce((state: DrumkitStore) => {
        state.presetMap = defaultPresets;
        savePresetMapToLocalStorage(defaultPresets);
      })
    ),
}));

export default usePresetStore;
