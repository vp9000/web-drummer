import { EngineState, Sequence, Settings } from "types";
import { createEmptySequence } from "utils/sequencer";

export const DEFAULT_SETTINGS: Settings = { steps: 16, bpm: 100 };

export const DEFAULT_STATE: EngineState = { status: "stopped", step: 0, selectedInstrument: "bd" };

export const DEFAULT_SEQUENCE: Sequence = {
  bd: createEmptySequence(),
  ch: createEmptySequence(),
  cp: createEmptySequence(),
  oh: createEmptySequence(),
  sd: createEmptySequence(),
  cb: createEmptySequence(),
  wd: createEmptySequence(),
};
