import { InstrumentName, InstrumentParameters } from "../../types";
import useDrumkitStore from "../../stores/useDrumkitStore";
import Subheading from "components/ui/Subheading";
import InstrumentParameter from "./InstrumentParameter";
import { convertPitchToRangeValue, convertRangeValueToPitch } from "utils/parameters";

type Props = {
  activeInstrument: InstrumentName;
};

export default function InstrumentParameterSection({ activeInstrument }: Props) {
  const { instrumentParameterMap, updateInstrumentParameter } = useDrumkitStore();

  const handleParameterUpdate = (name: keyof InstrumentParameters, value: number) => {
    const updatedParameters = { ...instrumentParameters };
    updatedParameters[name] = value;

    updateInstrumentParameter(activeInstrument, updatedParameters);
  };

  const instrumentParameters = instrumentParameterMap[activeInstrument];

  return (
    <div>
      <Subheading text='Instrument Parameters' />

      <div className='flex gap-3'>
        <InstrumentParameter
          name='Volume'
          value={instrumentParameters.volume * 100}
          onChange={e => handleParameterUpdate("volume", Number(e.target.value) / 100)}
        />

        <InstrumentParameter
          name='Pitch'
          value={convertPitchToRangeValue(instrumentParameters.pitch)}
          onChange={e =>
            handleParameterUpdate("pitch", convertRangeValueToPitch(Number(e.target.value)))
          }
        />
      </div>
    </div>
  );
}
