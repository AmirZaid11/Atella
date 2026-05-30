import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function FloatingActions() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, pointerEvents: isVisible ? "auto" : "none" }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
    >
      <Link to="/reservations">
        <div className="w-14 h-14 bg-[#111827] text-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center text-xl hover:bg-[#ea580c] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(234,88,12,0.3)] transition-all duration-300 relative group cursor-pointer">
          <FaCalendarCheck />
          <span className="absolute right-full mr-4 bg-[#111827] text-white text-sm font-bold uppercase tracking-[2px] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
            Book Now
          </span>
        </div>
      </Link>

      <a href="https://wa.me/254715264486" target="_blank" rel="noreferrer">
        <div className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)] flex items-center justify-center text-2xl hover:scale-110 hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-300 relative group cursor-pointer">
          <FaWhatsapp />
          <span className="absolute right-full mr-4 bg-[#25D366] text-white text-sm font-bold uppercase tracking-[2px] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp
          </span>
        </div>
      </a>
    </motion.div>
  );
}

export default FloatingActions;
