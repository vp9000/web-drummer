import { convertBpmToRangeInput, convertRangeInputToBpm } from "utils/tempo";
import useDrumkitStore from "../../stores/useDrumkitStore";
import ParameterSection from "./ParameterSection";
import DigitalDisplay from "./DigitalDisplay";
import Slider from "../ui/Slider";

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
        <Slider id='bpm' value={convertBpmToRangeInput(settings.bpm)} onChange={onBpmChange} />
      </div>
    </ParameterSection>
  );
}
