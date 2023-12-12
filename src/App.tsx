import { useEffect, useRef, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import sound from "./audio/LETSGO.mp3";
import { random } from "lodash";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const passBtnRef = useRef<HTMLButtonElement>(null);
  const [passClicks, setPassClicks] = useState(0)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const setRandomPosition = () => {
    const maxX = window.innerWidth - 100; // Adjust 100 based on your button size
    const maxY = window.innerHeight - 50; // Adjust 50 based on your button size

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ x: random(-500, 500), y: random(0, 100) });
  };

  const handlePassHover = () => {
    setRandomPosition();
  };
 
  const handlePassClick = () => {
    setPassClicks((count) => count + 1)
    let alertMsg = ''
    if (passClicks === 0) {
       alertMsg = "Sure najud na? balika daw :P"
    } else if (passClicks === 1) {
      alertMsg = "Suuuuure???"
    } else if (passClicks === 2) {
      alertMsg = "Kalain :(("
    } else if (passClicks > 2) {
      alertMsg = "Wala tay ma do"
    }
    window.alert(alertMsg)
  }

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

  useEffect(() => {}, []);

  return (
    <>
      {/* <div className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-[url('assets/bg1.gif')]">
      <motion.div
        whileHover={{backgroundColor: '#F5787C', borderWidth: 1, borderColor: "#C02A21"}}
        transition={{duration: 0.5}}
        className="flex flex-col items-center justify-center w-3/5 h-3/5 bg-p-75 rounded-md"
      >
        <h1 className='font-bayon text-secondary text-[3.5rem]'>SECRET CODE</h1>
        <motion.input 
          type="password"
          className='flex items-center justify-center text-center my-16 bg-transparent border-2 text-primary border-secondary w-80 h-16 rounded-md outline-none' 
          whileFocus={{scale: 1.2}}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-32 bg-secondary px-4 py-2 text-primary rounded-lg font-bayon'
        >
            CONFIRM
        </motion.button>
      </motion.div>
    </div> */}

      {/* <div className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-[url('assets/bg2.jpg')]">
      <motion.div
        className="flex flex-col items-center justify-center w-3/5 h-3/5rounded-md"
      >
        <motion.h1 
          className='font-bayon text-P text-tertiary text-[2.5rem]'
          variants={variants}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.25 }}
        >
            ONLINE DATE INVITATION
        </motion.h1>
        <motion.div
          className="bg-[url('assets/roselene.jpg')] w-96 h-96 my-12 rounded-full border-8 border-secondary  bg-center bg-cover"
          variants={variants}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 1.25 }}
        />
        <motion.h1 
          className='font-bayon text-P text-tertiary text-[2rem]'
          variants={variants}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.75 }}
        >
          Roselene D. Lagudas
        </motion.h1>
        <motion.div
          drag 
          whileHover={{ scale: 1.2 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{delay: 0.5}}
          className="bg-[url('assets/sticker_calculator.png')] absolute bg-center bg-cover w-48 h-48 left-32 top-10">
        </motion.div>
        <motion.div 
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{delay: 0.5}}
          className="bg-[url('assets/sticker_rose.png')] absolute bg-center bg-cover w-48 h-48 left-64 top-[16rem]">
        </motion.div>
        <motion.div 
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{delay: 0.5}}
          className="bg-[url('assets/sticker_ramen.png')] absolute bg-center bg-cover w-48 h-48 left-32 top-[28rem]">
        </motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{delay: 0.5}}
          className="bg-[url('assets/sticker_anya.png')] absolute bg-center bg-cover w-48 h-48 right-32 top-10">
        </motion.div>
        <motion.div 
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{delay: 0.5}}
          className="bg-[url('assets/sticker_sleep.png')] absolute bg-center bg-cover w-48 h-48 right-64 top-[16rem]">
        </motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{delay: 0.5}}
          className="bg-[url('assets/sticker_princess.png')] absolute bg-center bg-cover w-48 h-48 right-32 top-[28rem]">
        </motion.div>
      </motion.div>
    </div> */}

      {/* <div className="flex flex-col justify-center p-32 h-screen w-screen bg-cover bg-center bg-[url('assets/bg3.jpg')]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >

        </motion.div>
        <h1 className="font-alike text-tertiary text-4xl mb-12">DEAREST ROSELENE,</h1>
        <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString('<h1 class="font-bayon text-secondary text-4xl">After a week full of exams, studying, and lots and lots of coffee, I invite you to a date this December 16, 2023 - Saturday. I\'m hoping we could unwind and spend quality time together. I\'ve planned out a special night for us to enjoy, and celebrate making it through this semester and, of course, getting to know each other.</h1>')
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();

            }}
          />
        <h1 className="text-3xl text-end mr-4 text-tertiary mt-8 font-bayon">
          -Your babatz
        </h1>
        <div className="flex flex-row items-center justify-between mt-4">
          <iframe
            style={{ marginTop: 30, marginBottom: 0 }}
            src="https://open.spotify.com/embed/track/7JIuqL4ZqkpfGKQhYlrirs?utm_source=generator&theme=0"
            width="50%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <div className="bg-[url('assets/us1.jpg')] w-32 h-32 bg-cover bg-center rounded-full border-4 border-secondary"></div>
          <div className="bg-[url('assets/us2.jpg')] w-32 h-32 bg-cover bg-center rounded-full border-4 border-secondary"></div>
          <div className="bg-[url('assets/us3.jpg')] w-32 h-32 bg-cover bg-center rounded-full border-4 border-secondary"></div>
        </div>
      </div> */}

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
          >PASS (Suwaye daw)</motion.button>
          {/* <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "absolute",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              // Add other styles as needed
            }}
            ref={passBtnRef}
            className="w-40 h-16 ml-12 bg-secondary text-primary  rounded-md"
          >
            PASS :(( <br></br> (click daw :P)
          </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
