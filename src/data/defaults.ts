import {
  EngineState,
  InstrumentParameterMap,
  InstrumentParameters,
  Sequence,
  Settings,
} from "types";
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
  cy: createEmptySequence(),
};

const DEFAULT_INSTRUMENT_PARAMETERS: InstrumentParameters = {
  volume: 0.8,
  pitch: 1,
  decay: 0.5,
  panning: 0.5,
};

export const DEFAULT_INSTRUMENT_PARAMETER_MAP: InstrumentParameterMap = {
  bd: DEFAULT_INSTRUMENT_PARAMETERS,
  ch: DEFAULT_INSTRUMENT_PARAMETERS,
  cp: DEFAULT_INSTRUMENT_PARAMETERS,
  oh: DEFAULT_INSTRUMENT_PARAMETERS,
  sd: DEFAULT_INSTRUMENT_PARAMETERS,
  cb: DEFAULT_INSTRUMENT_PARAMETERS,
  wd: DEFAULT_INSTRUMENT_PARAMETERS,
  cy: DEFAULT_INSTRUMENT_PARAMETERS,
};
