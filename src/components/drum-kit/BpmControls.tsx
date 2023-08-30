import { convertBpmToRangeInput, convertRangeInputToBpm } from "utils/tempo";
import useDrumkitStore from "../../stores/useDrumkitStore";
import ParameterSection from "./ParameterSection";
import DigitalDisplay from "./DigitalDisplay";

export default function BpmControls() {
  const { updateBpm, settings } = useDrumkitStore();

  const onBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bpm = convertRangeInputToBpm(Number(e.target.value));
    updateBpm(bpm);
  };

  return (
    <ParameterSection name='Tempo'>
      <div className='flex justify-center'>
        <DigitalDisplay text={settings.bpm.toString()} />
      </div>

      <div className='h-4 mt-1'>
        <input
          id='bpm'
          type='range'
          value={convertBpmToRangeInput(settings.bpm)}
          className='h-2 w-24 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer accent-purple-400 '
          onChange={onBpmChange}
        />
      </div>
    </ParameterSection>
  );
}
