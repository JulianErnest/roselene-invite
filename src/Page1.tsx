import { motion } from "framer-motion";
import { PageProps } from "./type";
import { useState } from "react";

const Page1 = ({ handleNext }: PageProps) => {
  const [code, setCode] = useState("");
    function handleOnClick() {
        handleNext();
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-cover bg-center bg-[url('assets/bg1.gif')]">
      <motion.div
        whileHover={{
          backgroundColor: "#F5787C",
          borderWidth: 1,
          borderColor: "#C02A21",
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-3/5 h-3/5 bg-p-75 rounded-md"
      >
        <h1 className="font-bayon text-secondary text-[3.5rem]">SECRET CODE</h1>
        <motion.input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="password"
          className="flex items-center justify-center text-center my-16 bg-transparent border-2 text-primary border-secondary w-80 h-16 rounded-md outline-none"
          whileFocus={{ scale: 1.2 }}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOnClick}
          className="w-32 bg-secondary px-4 py-2 text-primary rounded-lg font-bayon"
        >
          CONFIRM
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Page1;
