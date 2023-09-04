type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
};

export default function Overlay({ children, onClick }: Props) {
  return (
    <div
      className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 z-10'
      onClick={onClick}
    >
      {children}
    </div>
  );
}
