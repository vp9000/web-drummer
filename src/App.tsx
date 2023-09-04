import { ToastContainer } from "react-toastify";
import DrumKit from "./components/drum-kit/DrumKit";
import "react-toastify/dist/ReactToastify.css";
import { initializePresets } from "utils/storage";
import Disclaimer from "components/ui/Disclaimer";

initializePresets();

function App() {
  return (
    <>
      <main className='flex justify-center h-screen items-center'>
        <DrumKit />
      </main>

      <Disclaimer />
      <ToastContainer position='bottom-right' />
    </>
  );
}

export default App;
