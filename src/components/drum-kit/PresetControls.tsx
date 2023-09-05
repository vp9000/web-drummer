import Icon from "components/icons/Icon";
import DigitalDisplay from "./DigitalDisplay";
import ParameterSection from "./SettingsCard";
import TextButton from "components/ui/TextButton";
import useDrumkitStore from "stores/useDrumkitStore";
import { deletePreset, loadPreset, savePreset } from "utils/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function PresetControls() {
  const [presetNumber, setPresetNumber] = useState(1);
  const { sequence, settings, instrumentParameterMap, clearPattern, importPreset } =
    useDrumkitStore();

  /**
   * Update store when preset changes
   */
  useEffect(() => {
    const preset = loadPreset(presetNumber.toString());

    if (preset) {
      importPreset(preset);
    } else {
      clearPattern();
    }
  }, [presetNumber, importPreset, clearPattern]);

  const handlePrevPreset = () => {
    if (presetNumber === 1) {
      return;
    }

    setPresetNumber(prev => prev - 1);
  };

  const handleNextPreset = () => {
    if (presetNumber === 999) {
      return;
    }

    setPresetNumber(prev => prev + 1);
  };

  const handleSavePreset = () => {
    savePreset(presetNumber.toString(), sequence, settings, instrumentParameterMap);
    toast("Preset saved! 🤘");
  };

  const handleRemovePreset = () => {
    confirm("This action will clear your preset");
    clearPattern();
    deletePreset(presetNumber.toString());
    toast.info("Preset removed! 💀");
  };

  return (
    <ParameterSection name='Preset'>
      <DigitalDisplay text={presetNumber.toString()} />

      <div className='flex justify-center gap-2 h-4 mt-1'>
        <TextButton onClick={handlePrevPreset} className='text-xl'>
          <Icon type='faCaretLeft' />
        </TextButton>
        <TextButton onClick={handleNextPreset} className='text-xl'>
          <Icon type='faCaretRight' />
        </TextButton>
        <TextButton onClick={handleSavePreset}>
          <Icon type='faFloppyDisk' />
        </TextButton>
        <TextButton onClick={handleRemovePreset}>
          <Icon type='faTrash' />
        </TextButton>
      </div>
    </ParameterSection>
  );
}
