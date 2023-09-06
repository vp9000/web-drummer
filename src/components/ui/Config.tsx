import { useState } from "react";
import Overlay from "./Overlay";
import useDrumkitStore from "stores/useDrumkitStore";
import usePresetStore from "stores/usePresetStore";
import { PRESETS_FILE_NAME } from "data/constants";
import TextButton from "./TextButton";
import Icon from "components/icons/Icon";
import fileDownload from "js-file-download";
import { processPresetData } from "utils/validation";
import { toast } from "react-toastify";
import FileInput from "./FileInput";

export default function Config() {
  const [showConfig, setShowConfig] = useState(false);
  const { resetEngineState } = useDrumkitStore();
  const { resetPresets, presetMap, importPresets } = usePresetStore();

  const handleReset = () => {
    if (confirm("This will reset the device to its factory defaults. Continue?")) {
      resetPresets();
      resetEngineState();
      setShowConfig(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) {
      return;
    }

    const files: File[] = Array.from(fileList);

    files.forEach(file => {
      if (file.type !== "application/json") {
        setShowConfig(false);
        toast.error("Invalid file type");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        reader.result;
        const presetMap = processPresetData(reader.result);
        importPresets(presetMap);
        setShowConfig(false);
        toast.success("Presets imported! 🥁");
      };

      reader.readAsText(file);
    });
  };

  const handlePresetsDownload = () => {
    fileDownload(JSON.stringify(presetMap), PRESETS_FILE_NAME);
    setShowConfig(false);
  };

  return (
    <>
      {showConfig && (
        <Overlay onClick={() => setShowConfig(false)}>
          <div>
            <div className='text-center space-y-4'>
              <h3 className='text-2xl'>Device Config</h3>

              <div className='flex justify-center gap-8'>
                <div className='space-y-1'>
                  <TextButton light onClick={handleReset} className='text-4xl'>
                    <Icon type='faArrowsRotate' />
                  </TextButton>

                  <div>Reset Device</div>
                </div>

                <div className='space-y-1'>
                  <FileInput onChange={handleFileChange} />

                  <div>Import Preset Data</div>
                </div>

                <div className='space-y-1'>
                  <TextButton light onClick={handlePresetsDownload} className='text-4xl'>
                    <Icon type='faDownload' />
                  </TextButton>

                  <div>Download Preset Data</div>
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      )}

      <button onClick={() => setShowConfig(true)}>Config</button>
    </>
  );
}
