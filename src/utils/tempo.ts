import { MAX_BPM, MIN_BPM } from "data/constants";

export const convertRangeValueToBpm = (value: number) => {
  const range = MAX_BPM - MIN_BPM;
  const bpm = (range / 100) * value + MIN_BPM;
  return Math.ceil(bpm);
};

export const convertBpmToRangeValue = (bpm: number) => {
  const range = MAX_BPM - MIN_BPM;
  const value = (bpm - MIN_BPM) / (range / 100);
  return Math.ceil(value);
};
