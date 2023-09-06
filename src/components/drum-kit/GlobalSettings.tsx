import Icon from "components/icons/Icon";
import Subheading from "components/ui/Subheading";
import TextButton from "components/ui/TextButton";
import ImportButton from "components/ui/ImportButton";
import { PRESETS_FILE_NAME } from "data/constants";
import fileDownload from "js-file-download";
import useDrumkitStore from "stores/useDrumkitStore";
import usePresetStore from "stores/usePresetStore";

export default function GlobalSettings() {
  const { resetEngineState } = useDrumkitStore();
  const { resetPresets, presetMap } = usePresetStore();

  const handleReset = () => {
    if (confirm("This will reset the device to its factory defaults. Continue?")) {
      resetPresets();
      resetEngineState();
    }
  };

  const handlePresetsDownload = () => {
    fileDownload(JSON.stringify(presetMap), PRESETS_FILE_NAME);
  };

  return (
    <>
      <div className='text-right'>
        <Subheading text='Data' />

        <div className='text-2xl flex justify-end gap-3'>
          <TextButton onClick={handleReset}>
            <Icon type='faArrowsRotate' />
          </TextButton>

          <ImportButton />

          <TextButton onClick={handlePresetsDownload}>
            <Icon type='faDownload' />
          </TextButton>
        </div>
      </div>
    </>
  );
}
