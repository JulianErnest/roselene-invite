import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { PageProps } from "./type";
import Navigate from "./Navigate";

const Page3 = ({handleBack, handleNext, currentPage}: PageProps) => {
    return (
    <div className="flex flex-col justify-center p-32 h-screen w-screen bg-cover bg-center bg-[url('assets/bg3.jpg')]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      ></motion.div>
      <h1 className="font-alike text-tertiary text-4xl mb-12">
        DEAREST ROSELENE,
      </h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString(
              "<h1 class=\"font-bayon text-secondary text-4xl\">After a week full of exams, studying, and lots and lots of coffee, I invite you to a date this December 16, 2023 - Saturday. I'm hoping we could unwind and spend quality time together. I've planned out a special night for us to enjoy, and celebrate making it through this semester and, of course, getting to know each other. Hopefully you can find time to finish your quizzes beforehand.</h1>"
            )
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
      <Navigate handleBack={handleBack} handleNext={handleNext} currentPage={currentPage} />
    </div>
  );
};

export default Page3