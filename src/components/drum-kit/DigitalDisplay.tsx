type Props = {
  text: string;
};

export default function DigitalDisplay({ text }: Props) {
  return (
    <div className='bg-gray-900 text-purple-400 digital text-4xl w-16 text-right pr-1 flex justify-end rounded'>
      {Array.from(text).map((number, i) => (
        <div className='w-1/3' key={`tempo-display-character-${i}`}>
          {number}
        </div>
      ))}
    </div>
  );
}
