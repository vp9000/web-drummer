import Slider from "../ui/Slider";

type Props = {
  name: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InstrumentParameter({ name, value, onChange }: Props) {
  return (
    <div>
      <Slider id={name} value={value ?? 0} onChange={onChange} />
      <div className='text-center mt-1 text-xs text-black text-opacity-50'>{name}</div>
    </div>
  );
}
