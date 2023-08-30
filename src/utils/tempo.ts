import { MAX_BPM, MIN_BPM } from "data/constants";

export const convertRangeInputToBpm = (input: number) => {
  const range = MAX_BPM - MIN_BPM;
  const bpm = (range / 100) * input + MIN_BPM;
  return Math.ceil(bpm);
};

export const convertBpmToRangeInput = (bpm: number) => {
  const range = MAX_BPM - MIN_BPM;
  const value = (bpm - MIN_BPM) / (range / 100);
  return Math.ceil(value);
};
