import { useEffect, useMemo } from "react";
import useSound from "use-sound";
import useDrumkitStore from "stores/useDrumkitStore";
import { InstrumentName } from "types";

import bd from "assets/audio/bd.mp3";
import sd from "assets/audio/sd.mp3";
import ch from "assets/audio/ch.mp3";
import oh from "assets/audio/oh.mp3";
import cp from "assets/audio/cp.mp3";
import cb from "assets/audio/cb.mp3";
import wd from "assets/audio/wd.mp3";

export default function SoundEngine() {
  const { sequence, engineState } = useDrumkitStore();

  const [playBd] = useSound(bd, { interrupt: false });
  const [playSd] = useSound(sd, { interrupt: false });
  const [playCh] = useSound(ch, { interrupt: false });
  const [playCp] = useSound(cp, { interrupt: false });
  const [playOh] = useSound(oh, { interrupt: false });
  const [playCb] = useSound(cb, { interrupt: false });
  const [playWd] = useSound(wd, { interrupt: false });

  const triggers: { [key in InstrumentName]: () => void } = useMemo(
    () => ({
      bd: playBd,
      sd: playSd,
      ch: playCh,
      oh: playOh,
      cp: playCp,
      cb: playCb,
      wd: playWd,
    }),
    [playBd, playCb, playCh, playCp, playOh, playSd, playWd]
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
