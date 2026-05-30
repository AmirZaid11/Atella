import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import { supabase } from "../lib/supabase";

function NotificationCard() {
  const [announcement, setAnnouncement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchActiveAnnouncement();
  }, []);

  const fetchActiveAnnouncement = async () => {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1);
        
      if (!error && data && data.length > 0) {
        setAnnouncement(data[0]);
        setTimeout(() => setIsVisible(true), 2000);
      }
    } catch (err) {
      console.error("No announcements available or DB error");
    }
  };

  if (!announcement) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          className="fixed top-28 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-2xl"
        >
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-[35px] shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex gap-6 overflow-hidden relative group">
            
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none"></div>
            
            {/* Animated accent bar */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#ea580c] to-[#0ea5e9] shadow-[0_0_20px_#ea580c]"></div>
            
            <div className="text-[#ea580c] mt-1 shrink-0 relative z-10 animate-pulse">
              <FaExclamationCircle size={40} />
            </div>

            <div className="flex-1 pr-10 relative z-10">
              <h3 className="text-white font-bold tracking-[3px] uppercase text-xl mb-3 drop-shadow-md">
                {announcement.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-lg font-light">
                {announcement.message}
              </p>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#ea580c] hover:scale-110 hover:shadow-[0_0_20px_#ea580c] transition-all duration-300 z-10"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NotificationCard;
