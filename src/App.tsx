import { ToastContainer } from "react-toastify";
import DrumKit from "./components/drum-kit/DrumKit";
import "react-toastify/dist/ReactToastify.css";
import { initializePresets } from "utils/storage";

initializePresets();

function App() {
  return (
    <>
      <main className='h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 to-yellow-400 transform'>
        <DrumKit />
      </main>
      <ToastContainer position='bottom-right' />
    </>
  );
}

export default App;
