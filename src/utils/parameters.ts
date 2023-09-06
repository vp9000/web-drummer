const MIN_PITCH = 0.8;
const MAX_PITCH = 1.3;

export const convertRangeValueToPitch = (value: number) => {
  const range = MAX_PITCH - MIN_PITCH;
  const pitch = (range / 100) * value + MIN_PITCH;
  return Number(pitch.toFixed(2));
};

export const convertPitchToRangeValue = (pitch: number) => {
  const range = MAX_PITCH - MIN_PITCH;
  const value = (pitch - MIN_PITCH) / (range / 100);
  return value;
};
