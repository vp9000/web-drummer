import { InstrumentName } from "types";
import { getClasses } from "utils/helpers";

type Props = {
  name: InstrumentName;
  isSelected: boolean;
  handleSelect: () => void;
  hotKey: string;
};

export default function InstrumentButton({ name, isSelected, handleSelect, hotKey }: Props) {
  return (
    <div
      onClick={handleSelect}
      className={getClasses(
        "relative flex w-full h-16 items-center justify-center border-2 border-yellow-400 rounded-lg uppercase font-bold transition-all cursor-pointer",
        isSelected ? "bg-yellow-400 text-white" : "bg-transparent text-black"
      )}
    >
      {name}

      <div className='absolute right-1 top-1  text-black text-opacity-20'>
        <div className='text-xs'>{hotKey}</div>
      </div>
    </div>
  );
}
