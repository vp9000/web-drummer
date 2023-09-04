import Icon from "components/icons/Icon";
import { useState } from "react";
import Overlay from "./Overlay";

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      {showCredits && (
        <Overlay onClick={() => setShowCredits(false)}>
          <div className='text-white flex justify-center items-center h-full'>
            <div>
              <h3 className='mb-2'>Credits</h3>

              <ul className='block list-disc'>
                <li>Preset 02 created by Vinniel</li>
              </ul>
            </div>
          </div>
        </Overlay>
      )}

      <div className='fixed bottom-1 right-2 text-white text-opacity-70 text-xs'>
        <button onClick={() => setShowCredits(true)}>Credits</button>{" "}
        <span className='px-1'>|</span>
        <a href='https://github.com/vp9000/web-drummer' target='_blank' rel='noreferrer'>
          Source <Icon type='faExternalLink' />
        </a>
      </div>
    </>
  );
}
