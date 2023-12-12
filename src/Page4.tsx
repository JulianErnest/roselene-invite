import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import sound from "./audio/LETSGO.mp3";
import { random } from "lodash";
import Navigate from "./Navigate";
import { PageProps } from "./type";

const Page4 = ({handleBack, handleNext, currentPage}: PageProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
  const [passClicks, setPassClicks] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const setRandomPosition = () => {
    setPosition({ x: random(-500, 500), y: random(-300, 100) });
  };

  const handlePassHover = () => {
    setRandomPosition();
  };

  const handlePassClick = () => {
    setPassClicks((count) => count + 1);
    let alertMsg = "";
    if (passClicks === 0) {
      alertMsg = "Sure najud na? balika daw :P";
    } else if (passClicks === 1) {
      alertMsg = "Suuuuure???";
    } else if (passClicks === 2) {
      alertMsg = "Kalain :((";
    } else if (passClicks > 2) {
      alertMsg = "Wala tay ma do";
    }
    window.alert(alertMsg);
  };

  const handleClick = () => {
    // Trigger confetti animation
    playAudio();
    confetti({
      particleCount: 500,
      spread: 200,
      origin: { y: 0.6 },
    });
  };

  const playAudio = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center p-32 h-screen w-screen bg-cover bg-center bg-[url('assets/bg4.jpg')]">
      <div className="w-3/5 h-3/5 bg-primary items-center justify-center flex flex-col p-8">
        <h1 className="text-secondary font-alike text-3xl">DINNER @ BUSAY</h1>
        <h1 className="text-secondary font-alike my-6 text-3xl">
          DECEMBER 16, 2023
        </h1>
        <h1 className="text-secondary font-alike text-3xl">
          PICK UP AT 6:30 PM
        </h1>
      </div>
      <div className="mt-12 flex flex-row space-between w-100">
        <audio ref={audioRef} src="LETSGO.mp3"></audio>
        <button
          onClick={handleClick}
          className="w-40 h-16 mr-12 bg-primary text-secondary text-xl rounded-md"
        >
          IT'S A DATE
        </button>
        <motion.button
          className="w-40 h-16 ml-12 bg-secondary text-primary rounded-md"
          onClick={handlePassClick}
          onMouseEnter={handlePassHover}
          initial={{ x: position.x, y: position.y }}
          animate={{ x: position.x, y: position.y }}
        >
          PASS (Suwaye daw)
        </motion.button>
        <Navigate handleBack={handleBack} handleNext={handleNext} currentPage={currentPage} />

      </div>
    </div>
  );
};

export default Page4;
