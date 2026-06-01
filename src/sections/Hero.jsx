import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCMS } from "../hooks/useCMS";
import heroVideo from "../assets/videos/hero.mp4";

function Hero() {
  const { content } = useCMS("home", {
    hero_subtitle: "Luxury • Lifestyle • Experience",
    hero_title: "ATTELA\nBEACH RESORT",
    hero_desc: "Discover premium lakeside luxury, nightlife, unforgettable dining, and elite entertainment experiences in the heart of Kisumu."
  });

  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="story.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/5"></div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/20 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-[1600px] mx-auto w-full px-6">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px] text-[#ea580c] font-semibold mb-6 text-sm"
          >
            {content.hero_subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold leading-[0.88] max-w-[1200px] text-[#111827] drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] whitespace-pre-line"
          >
            {content.hero_title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="mt-10 text-lg md:text-2xl text-[#111827] font-medium max-w-2xl leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,1)] whitespace-pre-line"
          >
            {content.hero_desc}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="flex flex-wrap gap-6 mt-12"
          >

            <Link to="/reservations">
              <button className="bg-[#ea580c] text-white w-[220px] h-[65px] rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
                Reserve Now
              </button>
            </Link>

            <Link to="/events">
              <button className="border-2 border-[#0ea5e9] text-[#0ea5e9] backdrop-blur-xl w-[220px] h-[65px] rounded-full text-lg hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300">
                Explore Events
              </button>
            </Link>

          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Hero;