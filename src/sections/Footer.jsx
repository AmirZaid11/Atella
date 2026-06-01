import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaShieldAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [showLogin, setShowLogin] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === "3639") {
      sessionStorage.setItem("attela_auth", "true");
      setShowLogin(false);
      navigate("/admin");
    } else {
      setError(true);
      setPin("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <footer className="bg-[#f9fafb] border-t border-gray-200 py-20 px-6 relative">
      <div className="max-w-[1600px] mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>
            <h1 className="text-5xl font-bold text-[#ea580c] mb-6">
              ATTELA
            </h1>

            <p className="text-[#4b5563] leading-relaxed max-w-md">
              Luxury lakeside lifestyle destination delivering unforgettable
              nightlife, dining, events, and premium relaxation experiences.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#111827]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-[#4b5563]">
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">Home</a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">About</a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">Events</a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">Gallery</a>
              <a href="#" className="hover:text-[#0ea5e9] transition-colors">Reservations</a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#111827]">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-[#4b5563]">
              <p>Kisumu, Kenya</p>
              <p>+254 715 264 486</p>
              <p>info@attelaresort.com</p>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#111827]">
              Socials
            </h3>

            <div className="flex gap-6 text-2xl text-[#ea580c]">
              <a href="https://www.instagram.com/attela_beach_resort/" className="hover:text-[#0ea5e9] transition-colors">
                <FaInstagram />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100071867684940" className="hover:text-[#0ea5e9] transition-colors">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-[#0ea5e9] transition-colors">
                <FaTiktok />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex items-center justify-center text-[#9ca3af] relative">
          <p>© 2026 Attela Beach Resort. All Rights Reserved.</p>
          <button 
            onClick={() => setShowLogin(true)}
            className="absolute right-0 text-gray-300 hover:text-[#ea580c] transition duration-300"
          >
            <FaShieldAlt />
          </button>
        </div>

      </div>

      {/* ADMIN LOGIN MODAL */}
      <AnimatePresence>
        {showLogin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setShowLogin(false)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              className="bg-[#111827] rounded-3xl p-10 max-w-md w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowLogin(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white"
              >
                <FaTimes size={24} />
              </button>

              <div className="flex justify-center mb-6 text-[#ea580c]">
                <FaShieldAlt size={50} />
              </div>
              
              <h2 className="text-3xl font-bold text-center text-white mb-2">Restricted Access</h2>
              <p className="text-center text-white/50 mb-8">Enter Master PIN to access Control Center</p>

              <form onSubmit={handleLogin}>
                <input 
                  type="password" 
                  value={pin}
                  onChange={e => setPin(e.target.value)}
                  placeholder="Enter PIN"
                  className={`w-full bg-white/5 border-2 rounded-xl px-6 py-4 text-center text-2xl text-white tracking-[10px] outline-none transition-colors duration-300 ${error ? 'border-red-500' : 'border-white/10 focus:border-[#ea580c]'}`}
                  autoFocus
                />
                
                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center mt-4 font-bold">
                    Access Denied
                  </motion.p>
                )}

                <button 
                  type="submit"
                  className="w-full mt-6 bg-[#ea580c] text-white py-4 rounded-xl font-bold uppercase tracking-[2px] hover:bg-[#d94a08] transition duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                >
                  Unlock
                </button>
              </form>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}

export default Footer;