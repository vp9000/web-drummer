import Subheading from "components/ui/Subheading";
import { HOT_KEYS, INSTRUMENTS } from "data/constants";
import useDrumkitStore from "stores/useDrumkitStore";
import InstrumentButton from "./InstrumentButton";
import { useEffect } from "react";

export default function InstrumentSelector() {
  const { updateSelectedInstrument, engineState } = useDrumkitStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (Object.keys(HOT_KEYS).includes(key)) {
        const instrument = HOT_KEYS[key];
        updateSelectedInstrument(instrument);
      }
    };

    addEventListener("keypress", handleKeyPress);
    return () => {
      removeEventListener("keypress", handleKeyPress);
    };
  }, [updateSelectedInstrument]);

  return (
    <div>
      <Subheading text='Instruments' />
      <div className='flex justify-between gap-4'>
        {INSTRUMENTS.map((name, i) => (
          <InstrumentButton
            key={`${name}-instrument-button`}
            name={name}
            isSelected={engineState.selectedInstrument === name}
            handleSelect={() => updateSelectedInstrument(name)}
            hotKey={(i + 1).toString()}
          />
        ))}
      </div>
    </div>
  );
}
