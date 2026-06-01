import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";

function ContactPage() {
  return (
    <MainLayout>
      <PageTransition>

        {/* 1. HERO (Luxury Typography) */}
        <section className="relative pt-48 pb-20 px-6 bg-[#ffffff] overflow-hidden">
          
          <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-[#ea580c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>

          <div className="relative z-10 max-w-[1600px] mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-6"
            >
              Get In Touch
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[130px] font-bold leading-[0.9] text-[#111827]"
            >
              Let’s Create
              <br />
              Unforgettable
              <br />
              Moments.
            </motion.h1>
          </div>
        </section>

        {/* 2. CONTACT CARDS & ADVANCED FORM */}
        <section className="py-20 px-6 bg-[#ffffff]">
          <div className="max-w-[1600px] mx-auto grid xl:grid-cols-12 gap-20 items-start">

            {/* Left: Premium Cards */}
            <div className="xl:col-span-5 space-y-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group flex items-center gap-8 bg-white p-10 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-[#f9fafb] group-hover:bg-[#ea580c] text-[#ea580c] group-hover:text-white flex items-center justify-center rounded-full text-3xl transition-colors duration-500 shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="uppercase tracking-[3px] text-sm text-[#111827]/50 font-bold mb-2">Visit Us</p>
                  <h3 className="text-2xl font-bold text-[#111827]">Kisumu, Kenya</h3>
                  <p className="text-[#111827]/70 mt-1">Lake Victoria Shores</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-8 bg-white p-10 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-[#f9fafb] group-hover:bg-[#ea580c] text-[#ea580c] group-hover:text-white flex items-center justify-center rounded-full text-3xl transition-colors duration-500 shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="uppercase tracking-[3px] text-sm text-[#111827]/50 font-bold mb-2">Call Us</p>
                  <h3 className="text-2xl font-bold text-[#111827]">+254 715 264 486</h3>
                  <p className="text-[#111827]/70 mt-1">Mon-Sun, 24/7</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group flex items-center gap-8 bg-white p-10 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-[#f9fafb] group-hover:bg-[#ea580c] text-[#ea580c] group-hover:text-white flex items-center justify-center rounded-full text-3xl transition-colors duration-500 shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="uppercase tracking-[3px] text-sm text-[#111827]/50 font-bold mb-2">Email Us</p>
                  <h3 className="text-2xl font-bold text-[#111827]">info@attela.com</h3>
                  <p className="text-[#111827]/70 mt-1">We reply within 24 hours</p>
                </div>
              </motion.div>

            </div>

            {/* Right: Glassmorphism / Advanced Form */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="xl:col-span-7 bg-white p-10 md:p-16 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100"
            >
              <h3 className="text-4xl font-bold text-[#111827] mb-4">Send a Message</h3>
              <p className="text-lg text-[#111827]/70 mb-12">Whether it's a private event inquiry or a simple question, we're here to help.</p>

              <form className="flex flex-col gap-10">
                
                {/* Floating Label Input: Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300 placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 top-4 text-xl text-gray-400 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ea580c] peer-focus:font-bold -top-4 text-sm font-bold"
                  >
                    Full Name
                  </label>
                </div>

                {/* Floating Label Input: Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300 placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 top-4 text-xl text-gray-400 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ea580c] peer-focus:font-bold -top-4 text-sm font-bold"
                  >
                    Email Address
                  </label>
                </div>

                {/* Floating Label Input: Message */}
                <div className="relative mt-4">
                  <textarea
                    id="message"
                    rows="4"
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300 placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label 
                    htmlFor="message"
                    className="absolute left-0 top-4 text-xl text-gray-400 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#ea580c] peer-focus:font-bold -top-4 text-sm font-bold"
                  >
                    Message
                  </label>
                </div>

                <button 
                  type="button"
                  className="mt-6 bg-[#111827] text-white h-[80px] rounded-[20px] font-bold text-xl hover:bg-[#ea580c] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(234,88,12,0.3)] transition-all duration-500"
                >
                  Send Message
                </button>

              </form>
            </motion.div>

          </div>
        </section>

        {/* 3. WHATSAPP BANNER */}
        <section className="py-20 px-6">
          <div className="max-w-[1600px] mx-auto bg-[#25D366] rounded-[40px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_rgba(37,211,102,0.3)] relative overflow-hidden group">
            
            {/* BG pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_2px,_transparent_2px)] bg-[length:30px_30px]"></div>

            <div className="relative z-10 text-white max-w-3xl">
              <p className="uppercase tracking-[5px] font-bold mb-4 opacity-90">Instant Response</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Need A Quick Reservation?
              </h2>
            </div>

            <a 
              href="https://wa.me/254715264486" 
              target="_blank" 
              rel="noreferrer"
              className="relative z-10 shrink-0 bg-white text-[#25D366] flex items-center gap-4 px-10 py-6 rounded-full text-2xl font-bold hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <FaWhatsapp className="text-4xl" />
              Chat Now
            </a>

          </div>
        </section>

        {/* 4. MAP & SOCIALS */}
        <section className="py-20 px-6 bg-[#f9fafb]">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=Attela+Beach+Resort+Kisumu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition duration-1000"
              ></iframe>
            </div>

            <div className="bg-[#111827] rounded-[40px] p-16 flex flex-col justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <h3 className="text-4xl font-bold mb-4">Connect</h3>
              <p className="text-white/60 text-lg mb-12">
                Follow us on social media for the latest events, exclusive offers, and behind-the-scenes content.
              </p>

              <div className="flex flex-col gap-6">
                <a href="https://www.instagram.com/attela_beach_resort/" className="flex items-center justify-between group border-b border-white/10 pb-6 hover:border-[#ea580c] transition duration-500">
                  <span className="text-2xl font-medium group-hover:text-[#ea580c] transition duration-500">Instagram</span>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ea580c] transition duration-500">
                    <FaInstagram className="text-xl" />
                  </div>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100071867684940" className="flex items-center justify-between group border-b border-white/10 pb-6 hover:border-[#ea580c] transition duration-500">
                  <span className="text-2xl font-medium group-hover:text-[#ea580c] transition duration-500">Facebook</span>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ea580c] transition duration-500">
                    <FaFacebookF className="text-xl" />
                  </div>
                </a>

                <a href="#" className="flex items-center justify-between group pb-2 hover:border-[#ea580c] transition duration-500">
                  <span className="text-2xl font-medium group-hover:text-[#ea580c] transition duration-500">TikTok</span>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ea580c] transition duration-500">
                    <FaTiktok className="text-xl" />
                  </div>
                </a>
              </div>
            </div>

          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default ContactPage;