import { useEffect } from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
};

export default function Overlay({ children, onClick }: Props) {
  useEffect(() => {
    const handleMouseClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).id !== "overlay") {
        return;
      }

      if (onClick) {
        onClick();
      }
    };

    addEventListener("mousedown", handleMouseClick);
    return () => {
      removeEventListener("mousedown", handleMouseClick);
    };
  }, [onClick]);

  return (
    <div
      id='overlay'
      className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 z-10 flex justify-center items-center text-white'
    >
      {children}
    </div>
  );
}
