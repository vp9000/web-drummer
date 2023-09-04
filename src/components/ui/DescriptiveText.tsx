type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function DescriptiveText({ children }: Props) {
  return <div className='text-center mt-1 text-xs text-black text-opacity-50'>{children}</div>;
}
