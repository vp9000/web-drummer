import { useEffect } from "react";
import useDrumkitStore from "../../stores/useDrumkitStore";
import Icon from "../icons/Icon";
import ParameterSection from "./ParameterSection";
import TextButton from "components/ui/TextButton";

export default function TransportControls() {
  const { togglePlayPause, stop, engineState } = useDrumkitStore();

  useEffect(() => {
    const handleSpacePress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        if ((event.target as HTMLElement).nodeName !== "BODY") {
          console.debug("focussed on something else");
        }

        togglePlayPause();
      }
    };

    addEventListener("keydown", handleSpacePress);

    return () => {
      removeEventListener("keydown", handleSpacePress);
    };
  }, [togglePlayPause]);

  return (
    <ParameterSection name='Transport'>
      <div className='flex gap-4 justify-center text-3xl text-purple-600'>
        <TextButton onClick={stop} className='w-8'>
          <Icon type='faStop' />
        </TextButton>

        <TextButton onClick={togglePlayPause} className='w-8 '>
          {engineState.status === "playing" ? <Icon type='faPause' /> : <Icon type='faPlay' />}
        </TextButton>
      </div>
    </ParameterSection>
  );
}
