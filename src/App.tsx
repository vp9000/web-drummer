import { ToastContainer } from "react-toastify";
import DrumKit from "./components/drum-kit/DrumKit";
import "react-toastify/dist/ReactToastify.css";
import { initializePresets } from "utils/storage";
import Disclaimer from "components/ui/Disclaimer";
import Footer from "components/ui/Footer";

initializePresets();

function App() {
  return (
    <>
      <Disclaimer />

      <main className='flex justify-center h-screen items-center'>
        <DrumKit />
        <Footer />
      </main>

      <ToastContainer position='bottom-right' />
    </>
  );
}

export default App;
