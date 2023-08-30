import { useEffect } from "react";
import Wrapper from "./Wrapper";
import BpmControls from "./BpmControls";
import useDrumkitStore from "../../stores/useDrumkitStore";
import StepSequencer from "./StepSequencer";
import TransportControls from "./TransportControls";
import SoundEngine from "./SoundEngine";
import InstrumentSelector from "./InstrumentSelector";
import Logo from "./Logo";
import Instructions from "./Instructions";
import PresetControls from "./PresetControls";

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
    <div>
      <Wrapper>
        <div className='flex justify-end items-center gap-4'>
          <Logo />
          <PresetControls />
          <BpmControls />
          <TransportControls />
        </div>

        <InstrumentSelector />
        <StepSequencer activeInstrument={engineState.selectedInstrument} />

        <SoundEngine />
      </Wrapper>

      <Instructions />
    </div>
  );
}
