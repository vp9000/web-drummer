import { ToastContainer } from "react-toastify";
import DrumKit from "./components/drum-kit/DrumKit";
import "react-toastify/dist/ReactToastify.css";
import { initializePresets } from "utils/storage";

initializePresets();

function App() {
  return (
    <>
      <main className='flex justify-center h-screen items-center'>
        <DrumKit />
      </main>
      <ToastContainer position='bottom-right' />
    </>
  );
}

export default App;
