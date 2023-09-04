type Props = {
  id: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Slider({ id, value, onChange }: Props) {
  return (
    <input
      id={id}
      type='range'
      className='h-2 w-24 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer accent-purple-400 '
      value={value}
      onChange={onChange}
    />
  );
}
