import { useState } from "react";
import { isMobile } from "react-device-detect";
import { getHideDisclaimerState, setHideDisclaimerState } from "utils/storage";
import Overlay from "./Overlay";

const getInitialDisclaimerState = () => {
  if (isMobile && !getHideDisclaimerState()) {
    return true;
  }

  return false;
};

export default function Disclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(getInitialDisclaimerState());

  const handleHideDisclaimer = () => {
    setHideDisclaimerState();
    setShowDisclaimer(false);
  };

  if (!showDisclaimer) {
    return null;
  }

  return (
    <Overlay>
      <div className='text-center'>
        <div className='p-12'>
          <p className='font-bold mb-4'>Greetings, mobile user 👋</p>
          <p className='font-bold'>
            It is recommended to view
            <br /> this page on a larger screen!
          </p>

          <div className='text-center mt-12'>
            <button
              onClick={handleHideDisclaimer}
              className='bg-yellow-500 hover:bg-yellow-400 text-white rounded px-4 py-2 uppercase font-bold text-sm'
            >
              Continue anyway
            </button>
            <div className='text-xs mt-1'>(and do not show this again)</div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
