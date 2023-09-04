type Props = React.ComponentProps<"input">;

export default function InstrumentParameter({ name, value, onChange }: Props) {
  return (
    <div>
      <div>
        <input
          id='bpm'
          type='range'
          className='h-2 w-24 bg-white bg-opacity-50 rounded-lg appearance-none cursor-pointer accent-purple-400 '
          value={value}
          onChange={onChange}
        />
      </div>

      <div className='text-center mt-1 text-xs text-black text-opacity-50'>{name}</div>
    </div>
  );
}
