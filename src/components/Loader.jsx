import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
      }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center pointer-events-none"
    >
      <motion.img
        src="/alogo.png"
        alt="Attela Logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 0.8, 1.5], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.5, times: [0, 0.4, 0.8, 1], ease: "easeInOut" }}
        className="w-40 md:w-56 object-contain rounded-full shadow-[0_0_30px_rgba(234,88,12,0.5)]"
      />
    </motion.div>
  );
}

export default Loader;
