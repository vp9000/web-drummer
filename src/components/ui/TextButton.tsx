import { useRef } from "react";
import { getClasses } from "utils/helpers";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
  light?: boolean;
  className?: string;
};

export default function TextButton({ children, onClick, light, className }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (onClick) {
      onClick();

      /**
       * Remove focus to prevent space bar (used for play / pause toggle) interacting with it
       */
      buttonRef.current?.blur();
    }
  };

  return (
    <button
      ref={buttonRef}
      tabIndex={-1} // disabled keyboard focus
      type='button'
      onClick={handleClick}
      className={getClasses(
        light
          ? "text-purple-400 hover:text-purple-500 transition-colors"
          : "text-purple-600 hover:text-purple-400 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
