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
          id='bpm'
          name='Volume'
          type='range'
          value={instrumentParameters.volume * 100}
          className='h-2 w-24 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer accent-purple-400 '
          onChange={e => handleParameterUpdate("volume", Number(e.target.value) / 100)}
        />

        <InstrumentParameter
          id='bpm'
          name='Pitch'
          type='range'
          value={convertPitchToRangeValue(instrumentParameters.pitch)}
          className='h-2 w-24 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer accent-purple-400 '
          onChange={e =>
            handleParameterUpdate("pitch", convertRangeValueToPitch(Number(e.target.value)))
          }
        />
      </div>
    </div>
  );
}
