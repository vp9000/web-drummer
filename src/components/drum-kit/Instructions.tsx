import { INSTRUMENTS } from "data/constants";

export default function Instructions() {
  return (
    <div className='flex justify-center text-white text-opacity-75 text-xs mt-4'>
      <div>
        <div className='text-center font-bold mb-1'>KEYBOARD SHORTCUTS</div>
        <ul className='list-disc'>
          <li>
            Press <b>space</b> to toggle <i>PLAY / PAUSE</i>
          </li>
          <li>
            Use <b>numbers 1</b> to <b>{INSTRUMENTS.length}</b> to select an instrument
          </li>
        </ul>
      </div>
    </div>
  );
}
