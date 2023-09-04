import { useEffect, useMemo } from "react";
import useSound from "use-sound";
import useDrumkitStore from "stores/useDrumkitStore";
import { InstrumentName, InstrumentParameterMap } from "types";

import bd from "assets/audio/bd.mp3";
import sd from "assets/audio/sd.mp3";
import ch from "assets/audio/ch.mp3";
import oh from "assets/audio/oh.mp3";
import cp from "assets/audio/cp.mp3";
import cb from "assets/audio/cb.mp3";
import wd from "assets/audio/wd.mp3";
import cy from "assets/audio/cy.mp3";

const getInstrumentParameters = (name: InstrumentName, parameterMap: InstrumentParameterMap) => {
  const { volume, pitch, decay } = parameterMap[name];

  return {
    volume,
    playbackRate: pitch,
    decay,
    interrupt: false,
  };
};

export default function SoundEngine() {
  const { sequence, engineState, instrumentParameterMap } = useDrumkitStore();

  const [playBd] = useSound(bd, getInstrumentParameters("bd", instrumentParameterMap));
  const [playSd] = useSound(sd, getInstrumentParameters("sd", instrumentParameterMap));
  const [playCh] = useSound(ch, getInstrumentParameters("ch", instrumentParameterMap));
  const [playCp] = useSound(cp, getInstrumentParameters("cp", instrumentParameterMap));
  const [playOh] = useSound(oh, getInstrumentParameters("oh", instrumentParameterMap));
  const [playCb] = useSound(cb, getInstrumentParameters("cb", instrumentParameterMap));
  const [playWd] = useSound(wd, getInstrumentParameters("wd", instrumentParameterMap));
  const [playCy] = useSound(cy, getInstrumentParameters("cy", instrumentParameterMap));

  const triggers: { [key in InstrumentName]: () => void } = useMemo(
    () => ({
      bd: playBd,
      sd: playSd,
      ch: playCh,
      oh: playOh,
      cp: playCp,
      cb: playCb,
      wd: playWd,
      cy: playCy,
    }),
    [playBd, playCb, playCh, playCp, playOh, playSd, playWd, playCy]
  );

  useEffect(() => {
    if (engineState.status !== "playing") {
      return;
    }

    Object.entries(sequence).forEach(([name, sequence]) => {
      if (sequence[engineState.step].active) {
        triggers[name as InstrumentName]();
      }
    });
  }, [engineState.step, engineState.status, sequence, triggers]);

  return null;
}
