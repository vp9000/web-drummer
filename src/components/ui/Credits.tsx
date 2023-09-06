import { useState } from "react";
import Overlay from "./Overlay";

export default function Credits() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      {showCredits && (
        <Overlay onClick={() => setShowCredits(false)}>
          <div>
            <h3 className='text-xl mb-2'>Credits</h3>

            <ul className='block list-disc'>
              <li>Preset 02 created by Vinniel</li>
            </ul>
          </div>
        </Overlay>
      )}

      <button onClick={() => setShowCredits(true)}>Credits</button>
    </>
  );
}
