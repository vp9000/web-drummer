import Icon from "components/icons/Icon";
import { toast } from "react-toastify";
import usePresetStore from "stores/usePresetStore";
import { processPresetData } from "utils/validation";

export default function ImportButton() {
  const { importPresets } = usePresetStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) {
      return;
    }

    const files: File[] = Array.from(fileList);

    files.forEach(file => {
      if (file.type !== "application/json") {
        toast.error("Invalid file type");
        return;
        // throw new Error("Invalid file type");
      }

      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        reader.result;
        const presetMap = processPresetData(reader.result);
        importPresets(presetMap);
        toast.success("Presets imported! 🥁");
      };
      reader.readAsText(file);
    });
  };

  return (
    <div>
      <label
        htmlFor='file-input'
        className='text-purple-600 hover:text-purple-400 transition-colors cursor-pointer'
      >
        <Icon type='faUpload' />
      </label>

      <input
        id='file-input'
        type='file'
        onChange={onChange}
        accept='application/json'
        className='hidden'
      />
    </div>
  );
}
