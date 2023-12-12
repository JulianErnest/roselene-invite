import { motion } from "framer-motion";
import Navigate from "./Navigate";
import { PageProps } from "./type";

const Page2 = ({handleBack, handleNext, currentPage}: PageProps) => {
    return (
    <div className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-[url('assets/bg2.jpg')]">
      <motion.div className="flex flex-col items-center justify-center w-3/5 h-3/5rounded-md">
        <motion.h1
          className="font-bayon text-P text-tertiary text-[2.5rem]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.25 }}
        >
          ONLINE DATE INVITATION
        </motion.h1>
        <motion.div
          className="bg-[url('assets/roselene.jpg')] w-96 h-96 my-12 rounded-full border-8 border-secondary  bg-center bg-cover"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 1.25 }}
        />
        <motion.h1
          className="font-bayon text-P text-tertiary text-[2rem]"
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
          transition={{ delay: 0.5 }}
          className="bg-[url('assets/sticker_calculator.png')] absolute bg-center bg-cover w-48 h-48 left-32 top-10"
        ></motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[url('assets/sticker_rose.png')] absolute bg-center bg-cover w-48 h-48 left-64 top-[16rem]"
        ></motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[url('assets/sticker_ramen.png')] absolute bg-center bg-cover w-48 h-48 left-32 top-[28rem]"
        ></motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[url('assets/sticker_anya.png')] absolute bg-center bg-cover w-48 h-48 right-32 top-10"
        ></motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[url('assets/sticker_sleep.png')] absolute bg-center bg-cover w-48 h-48 right-64 top-[16rem]"
        ></motion.div>
        <motion.div
          drag
          whileHover={{ scale: 1.2 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[url('assets/sticker_princess.png')] absolute bg-center bg-cover w-48 h-48 right-32 top-[28rem]"
        ></motion.div>
      </motion.div>
      <Navigate handleBack={handleBack} handleNext={handleNext} currentPage={currentPage} />

    </div>
  );
};
export default Page2;
