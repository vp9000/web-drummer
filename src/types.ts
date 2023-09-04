import { INSTRUMENTS } from "data/constants";

export type Settings = {
  steps: number;
  bpm: number;
};

export type InstrumentParameters = {
  volume: number;
  pitch: number;
  decay: number;
  panning: number;
};

export type InstrumentParameterMap = { [key in InstrumentName]: InstrumentParameters };

export type EngineState = {
  status: "stopped" | "playing" | "paused";
  step: number;
  selectedInstrument: InstrumentName;
};

export type StepData = {
  stepNumber: number;
  active: boolean;
  accent: boolean;
};

export type InstrumentName = (typeof INSTRUMENTS)[number];

export type Sequence = { [key in InstrumentName]: StepData[] };

export type Preset = { settings: Settings; sequence: Sequence };

export type PresetMap = { [key: string]: Preset };
