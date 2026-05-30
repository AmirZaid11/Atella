import { useEffect, useState, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaUtensils, FaUmbrellaBeach, FaMusic, FaGlassCheers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCMS } from "../hooks/useCMS";
import heroVideo from "../assets/videos/hero.mp4";

// Custom Counter Component
function AnimatedCounter({ from = 0, to, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for smooth stop
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const rawCount = from + (to - from) * easeOutQuart;
      
      const isFloat = !Number.isInteger(to);
      const currentCount = isFloat ? parseFloat(rawCount.toFixed(1)) : Math.floor(rawCount);
      
      setCount(currentCount);

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(to); // ensure it lands exactly on 'to'
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const pillars = [
  {
    title: "Luxury Dining",
    desc: "Expertly crafted cuisine served with panoramic lake views and world-class hospitality.",
    icon: <FaUtensils />,
  },
  {
    title: "Beach Lifestyle",
    desc: "Pristine sandy shores, luxury cabanas, and the ultimate relaxing atmosphere.",
    icon: <FaUmbrellaBeach />,
  },
  {
    title: "Entertainment",
    desc: "Live bands, top-tier DJs, and unforgettable nightlife experiences every weekend.",
    icon: <FaMusic />,
  },
  {
    title: "Private Events",
    desc: "Exclusive VIP areas and bespoke event planning for your most important celebrations.",
    icon: <FaGlassCheers />,
  },
];

const timeline = [
  {
    year: "2015",
    title: "The Vision",
    desc: "Attela began as a dream to bring unparalleled luxury to the shores of Lake Victoria.",
  },
  {
    year: "2018",
    title: "The Foundation",
    desc: "Construction completed on our signature beachfront restaurant and VIP lounges.",
  },
  {
    year: "2021",
    title: "Expansion",
    desc: "Launched our premium nightlife and entertainment division, setting a new standard for the region.",
  },
  {
    year: "Today",
    title: "Future Vision",
    desc: "Continuing to redefine luxury hospitality with upcoming resort suites and private yacht charters.",
  },
];

function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const { content } = useCMS("about", {
    hero_subtitle: "ATTELA",
    hero_title: "Luxury By\nThe Lake"
  });

  return (
    <MainLayout>
      <PageTransition>

        {/* 1. CINEMATIC HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#111827]">
          
          <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1920&q=80"
              className="w-full h-full object-cover opacity-70"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-transparent to-transparent"></div>
          </motion.div>

          <div className="relative z-10 text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[8px] text-[#ea580c] font-semibold mb-6 text-sm md:text-base drop-shadow-md"
            >
              {content.hero_subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[120px] font-bold leading-[0.9] text-white drop-shadow-2xl whitespace-pre-line"
            >
              {content.hero_title}
            </motion.h1>
          </div>
        </section>

        {/* 2. BRAND STORY (2-Col Editorial) */}
        <section className="py-32 px-6 bg-[#ffffff]">
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column (Huge Typography) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 lg:sticky lg:top-40"
            >
              <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4">
                Our Story
              </p>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight text-[#111827]">
                Redefining
                <br />
                Hospitality in
                <br />
                Kisumu.
              </h2>
            </motion.div>

            {/* Right Column (Full Story) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 space-y-8 text-xl md:text-2xl text-[#111827]/70 leading-relaxed font-light"
            >
              <p className="text-3xl text-[#111827] font-medium leading-normal mb-12">
                Attela Beach Resort was born from a singular vision: to create a sanctuary where the breathtaking natural beauty of Lake Victoria meets uncompromising luxury and world-class entertainment.
              </p>
              
              <p>
                We believe that true hospitality is about creating moments that linger long after the night ends. From our carefully curated culinary menus featuring the freshest local catches and international flavors, to our signature sunset sessions that transition smoothly into vibrant nightlife, every detail at Attela is designed to elevate your experience.
              </p>
              
              <p>
                Whether you are joining us for a quiet afternoon cocktail by the water, a high-energy weekend beach party, or an exclusive private celebration, our dedicated team is committed to delivering flawless service in an atmosphere of pure elegance.
              </p>

              <div className="pt-10">
                <img 
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206" 
                  alt="Attela Experience" 
                  className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. EXPERIENCE PILLARS */}
        <section className="py-32 px-6 bg-[#f9fafb]">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="text-center mb-24">
              <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4">
                The Experience
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-[#111827]">
                Four Pillars of Attela
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group bg-white p-10 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)] hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="w-20 h-20 bg-[#f9fafb] rounded-full flex items-center justify-center text-3xl text-[#ea580c] mb-8 group-hover:bg-[#ea580c] group-hover:text-white transition-colors duration-500 relative z-10">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-4 relative z-10">
                    {pillar.title}
                  </h3>
                  <p className="text-[#111827]/70 leading-relaxed relative z-10">
                    {pillar.desc}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-3xl group-hover:bg-[#ea580c]/20 transition-colors duration-700"></div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. WHY GUESTS CHOOSE US (Counters) */}
        <section className="py-32 px-6 bg-[#111827] text-white relative overflow-hidden">
          {/* Subtle background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
          ></div>
          
          <div className="relative z-10 max-w-[1600px] mx-auto text-center">
            
            <h2 className="text-4xl md:text-6xl font-bold mb-24">
              Why Guests Choose Us
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              
              <div className="flex flex-col items-center">
                <h3 className="text-6xl md:text-8xl font-bold text-[#ea580c] mb-4 drop-shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                  <AnimatedCounter to={10000} duration={2.5} suffix="+" />
                </h3>
                <p className="text-xl uppercase tracking-[3px] text-white/70">Guests Hosted</p>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-6xl md:text-8xl font-bold text-[#ea580c] mb-4 drop-shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                  <AnimatedCounter to={500} duration={2} suffix="+" />
                </h3>
                <p className="text-xl uppercase tracking-[3px] text-white/70">Events</p>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-6xl md:text-8xl font-bold text-[#ea580c] mb-4 drop-shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-end justify-center">
                  <AnimatedCounter from={1.0} to={4.8} duration={1.5} suffix="★" />
                </h3>
                <p className="text-xl uppercase tracking-[3px] text-white/70">Guest Rating</p>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-6xl md:text-8xl font-bold text-[#ea580c] mb-4 drop-shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                  24/7
                </h3>
                <p className="text-xl uppercase tracking-[3px] text-white/70">Hospitality</p>
              </div>

            </div>

          </div>
        </section>

        {/* 5. TIMELINE */}
        <section className="py-32 px-6 bg-[#ffffff]">
          <div className="max-w-[1000px] mx-auto">
            
            <div className="text-center mb-24">
              <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4">
                Our Journey
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-[#111827]">
                A Legacy of Luxury
              </h2>
            </div>

            <div className="relative border-l-4 border-gray-100 pl-10 md:pl-20 space-y-20 ml-4 md:ml-0">
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[58px] md:-left-[98px] top-2 w-8 h-8 rounded-full bg-[#ffffff] border-4 border-[#ea580c] shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
                  
                  <p className="text-2xl font-bold text-[#ea580c] mb-2">{item.year}</p>
                  <h3 className="text-4xl font-bold text-[#111827] mb-6">{item.title}</h3>
                  <p className="text-xl text-[#111827]/70 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="py-40 px-6 bg-[#0ea5e9] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl mix-blend-overlay"></div>

          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <h2 className="text-6xl md:text-8xl lg:text-[130px] font-bold text-white leading-[0.9] mb-12 drop-shadow-lg">
              Experience
              <br />
              Attela
            </h2>
            
            <p className="text-2xl text-white/90 font-light mb-16 max-w-2xl mx-auto">
              Your luxury escape is just a moment away. Join us for a world-class dining, nightlife, and relaxation experience.
            </p>

            <Link to="/reservations">
              <button className="bg-[#111827] text-white w-[280px] h-[80px] rounded-full font-semibold text-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition duration-300">
                Reserve Your Visit
              </button>
            </Link>
          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default AboutPage;