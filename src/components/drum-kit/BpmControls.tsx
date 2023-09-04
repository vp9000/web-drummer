import { convertBpmToRangeValue, convertRangeValueToBpm } from "utils/tempo";
import useDrumkitStore from "../../stores/useDrumkitStore";
import ParameterSection from "./SettingsCard";
import DigitalDisplay from "./DigitalDisplay";
import Slider from "../ui/Slider";

export default function BpmControls() {
  const { updateBpm, settings } = useDrumkitStore();

  const onBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bpm = convertRangeValueToBpm(Number(e.target.value));
    updateBpm(bpm);
  };

  return (
    <ParameterSection name='Tempo'>
      <div className='flex justify-center'>
        <DigitalDisplay text={settings.bpm.toString()} />
      </div>

      <div className='h-4 mt-1'>
        <Slider id='bpm' value={convertBpmToRangeValue(settings.bpm)} onChange={onBpmChange} />
      </div>
    </ParameterSection>
  );
}
