import { StepData } from "../types";

export const createEmptySequence = (steps = 16): StepData[] => {
  return Array.from(Array(steps)).map((_, i) => ({
    stepNumber: i,
    active: false,
    accent: false,
  }));
};
