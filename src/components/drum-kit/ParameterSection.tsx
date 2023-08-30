type Props = {
  children: React.ReactNode | React.ReactNode[];
  name: string;
};

export default function ParameterSection({ children, name }: Props) {
  return (
    <div>
      <div className='border-2 border-yellow-400 rounded-xl h-28 flex items-center p-4'>
        <div>{children}</div>
      </div>

      <div className='text-center mt-1 text-xs text-black text-opacity-50'>{name}</div>
    </div>
  );
}
