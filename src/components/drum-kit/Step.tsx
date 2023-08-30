import { getClasses } from "../../utils/helpers";
import { StepData } from "../../types";

type Props = {
  isPlayHead: boolean;
  stepData: StepData;
  handleClick: () => void;
};

export default function Step({ isPlayHead, stepData, handleClick }: Props) {
  const isBeat = stepData.stepNumber === 0 || stepData.stepNumber % 4 === 0;

  const getStepColor = () => {
    if (stepData.active && isPlayHead) {
      return "bg-purple-700";
    }

    if (stepData.active) {
      return "bg-purple-400";
    }

    if (isPlayHead) {
      return "bg-purple-400 bg-opacity-50";
    }

    return "bg-purple-400 bg-opacity-20";
  };

  return (
    <div
      className={getClasses(
        "rounded-xl h-12 w-8 border-2 border-yellow-400 border-opacity-50 relative cursor-pointer",
        getStepColor()
      )}
      onClick={handleClick}
    >
      {isBeat && (
        <div className='absolute right-1 top-1'>
          <div className='text-xs'>{stepData.stepNumber / 4 + 1}</div>
        </div>
      )}
    </div>
  );
}
