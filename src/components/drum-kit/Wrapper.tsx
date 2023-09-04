type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Wrapper({ children }: Props) {
  return <div className='bg-white bg-opacity-60 p-8 rounded-xl space-y-8'>{children}</div>;
}
