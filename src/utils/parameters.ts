const MIN_PITCH = 0.7;
const MAX_PITCH = 2;

export const convertRangeValueToPitch = (input: number) => {
  const range = MAX_PITCH - MIN_PITCH;
  const pitch = (range / 100) * input + MIN_PITCH;
  return Number(pitch.toFixed(2));
};

export const convertPitchToRangeValue = (pitch: number) => {
  const range = MAX_PITCH - MIN_PITCH;
  const value = (pitch - MIN_PITCH) / (range / 100);
  return value;
};
