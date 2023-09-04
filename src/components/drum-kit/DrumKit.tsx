import { useEffect } from "react";
import Case from "./Case";
import BpmControls from "./BpmControls";
import useDrumkitStore from "../../stores/useDrumkitStore";
import StepSequencer from "./StepSequencer";
import TransportControls from "./TransportControls";
import SoundEngine from "./SoundEngine";
import InstrumentSelector from "./InstrumentSelector";
import Logo from "./Logo";
import Instructions from "./Instructions";
import PresetControls from "./PresetControls";
import InstrumentParameterSection from "./InstrumentParameterSection";

export default function DrumKit() {
  const { engineState, settings, incrementStep } = useDrumkitStore();

  /**
   * Master clock
   */
  useEffect(() => {
    if (engineState.status !== "playing") {
      return;
    }

    const intervalTime = 60000 / settings.bpm / 4;
    const intervalId = setInterval(incrementStep, intervalTime);

    return () => {
      clearInterval(intervalId);
    };
  }, [engineState.status, settings.bpm, incrementStep]);

  return (
    <div className='transform scale-50 sm:scale-75 md:scale-95 lg:scale-100  xl:scale-100 transition-all'>
      <Case>
        <div className='flex justify-end items-center gap-4'>
          <Logo />
          <PresetControls />
          <BpmControls />
          <TransportControls />
        </div>

        <InstrumentSelector />
        <InstrumentParameterSection activeInstrument={engineState.selectedInstrument} />
        <StepSequencer activeInstrument={engineState.selectedInstrument} />

        <SoundEngine />
      </Case>

      <Instructions />
    </div>
  );
}
