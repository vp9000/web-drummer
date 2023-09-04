import { InstrumentName } from "types";

export const INSTRUMENTS = ["bd", "sd", "cp", "ch", "oh", "cb", "wd", "cy"] as const;

export const HOT_KEYS: { [key: string]: InstrumentName } = {
  "1": "bd",
  "2": "sd",
  "3": "cp",
  "4": "ch",
  "5": "oh",
  "6": "cb",
  "7": "wd",
};

export const MIN_BPM = 50;

export const MAX_BPM = 200;

export const STORAGE_KEY_PRESET = "web-drummer-presets";

export const HIDE_DISCLAIMER_KEY = "web-drummer-hide-disclaimer";
