import { create } from "zustand";
import { produce } from "immer";
import {
  Sequence,
  Settings,
  EngineState,
  StepData,
  InstrumentName,
  Preset,
  InstrumentParameterMap,
  InstrumentParameters,
} from "../types";
import {
  DEFAULT_INSTRUMENT_PARAMETER_MAP,
  DEFAULT_SEQUENCE,
  DEFAULT_SETTINGS,
  DEFAULT_STATE,
} from "data/defaults";
import usePresetStore from "./usePresetStore";

type DrumkitStore = {
  settings: Settings;
  instrumentParameterMap: InstrumentParameterMap;
  engineState: EngineState;
  sequence: Sequence;
  incrementStep: () => void;
  togglePlayPause: () => void;
  stop: () => void;
  updateBpm: (bpm: number) => void;
  updateInstrumentParameter: (
    instrumentName: InstrumentName,
    parameterData: InstrumentParameters
  ) => void;
  updateSteps: (steps: number) => void;
  updateSequence: (instrument: InstrumentName, stepNumber: number, stepData: StepData) => void;
  updateSelectedInstrument: (instrument: InstrumentName) => void;
  importPreset: (preset: Preset) => void;
  clearPattern: () => void;
  resetEngineState: () => void;
};

const getInitialState = () => {
  const presets = usePresetStore.getState().presetMap;
  const initialPreset = presets.data["1"];

  return {
    engineState: DEFAULT_STATE,
    instrumentParameterMap: initialPreset
      ? initialPreset.instrumentParameterMap
      : DEFAULT_INSTRUMENT_PARAMETER_MAP,
    settings: initialPreset ? initialPreset.settings : DEFAULT_SETTINGS,
    sequence: initialPreset ? initialPreset.sequence : DEFAULT_SEQUENCE,
  };
};

const useDrumkitStore = create<DrumkitStore>(set => ({
  ...getInitialState(),
  incrementStep: () =>
    set(
      produce(({ engineState, settings }: DrumkitStore) => {
        engineState.step = engineState.step === settings.steps - 1 ? 0 : engineState.step + 1;
      })
    ),
  togglePlayPause: () =>
    set(
      produce(({ engineState }: DrumkitStore) => {
        engineState.status = engineState.status === "playing" ? "paused" : "playing";
      })
    ),
  stop: () =>
    set(
      produce(({ engineState }: DrumkitStore) => {
        engineState.status = "stopped";
        engineState.step = 0;
      })
    ),
  updateBpm: bpm =>
    set(
      produce(({ settings }: DrumkitStore) => {
        settings.bpm = bpm;
      })
    ),
  updateSteps: steps =>
    set(
      produce(({ settings }: DrumkitStore) => {
        settings.steps = steps;
      })
    ),
  updateInstrumentParameter: (instrumentName, parameterData) =>
    set(
      produce(({ instrumentParameterMap }: DrumkitStore) => {
        instrumentParameterMap[instrumentName] = parameterData;
      })
    ),
  updateSequence: (instrument, stepNumber, stepData) =>
    set(
      produce(({ sequence }: DrumkitStore) => {
        sequence[instrument][stepNumber] = stepData;
      })
    ),
  updateSelectedInstrument: instrument =>
    set(
      produce(({ engineState }: DrumkitStore) => {
        engineState.selectedInstrument = instrument;
      })
    ),
  importPreset: preset =>
    set(
      produce((state: DrumkitStore) => {
        state.sequence = preset.sequence;
        state.settings = preset.settings;
        state.instrumentParameterMap = preset.instrumentParameterMap;
      })
    ),
  clearPattern: () =>
    set(
      produce((state: DrumkitStore) => {
        state.sequence = DEFAULT_SEQUENCE;
        state.settings = DEFAULT_SETTINGS;
        state.engineState = DEFAULT_STATE;
        state.instrumentParameterMap = DEFAULT_INSTRUMENT_PARAMETER_MAP;
      })
    ),
  resetEngineState: () =>
    set(
      produce((state: DrumkitStore) => {
        state.engineState = DEFAULT_STATE;
      })
    ),
}));

export default useDrumkitStore;
