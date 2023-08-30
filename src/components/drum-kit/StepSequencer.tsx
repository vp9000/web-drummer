import { InstrumentName, StepData } from "../../types";
import Step from "./Step";
import useDrumkitStore from "../../stores/useDrumkitStore";
import Subheading from "components/ui/Subheading";

type Props = {
  activeInstrument: InstrumentName;
};

export default function StepSequencer({ activeInstrument }: Props) {
  const { engineState, sequence, updateSequence } = useDrumkitStore();

  const toggleStep = (stepNumber: number, stepData: StepData) => {
    const updateStep: StepData = {
      ...stepData,
      active: !stepData.active,
    };

    updateSequence(activeInstrument, stepNumber, updateStep);
  };

  const steps = sequence[activeInstrument];

  return (
    <div>
      <Subheading text='Sequencer' />

      <div className='flex gap-3'>
        {steps.map((stepData, i) => (
          <Step
            key={`${activeInstrument}-step-${stepData.stepNumber}`}
            isPlayHead={
              engineState.step === stepData.stepNumber && engineState.status !== "stopped"
            }
            stepData={stepData}
            handleClick={() => toggleStep(i, stepData)}
          />
        ))}
      </div>
    </div>
  );
}
