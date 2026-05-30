import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCMS } from "../hooks/useCMS";
import heroVideo from "../assets/videos/hero.mp4"; 
import { FaRegCalendarAlt, FaMusic, FaGlassCheers, FaArrowRight, FaTimes, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "254715264486";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-6 md:gap-12 text-white">
      {Object.entries(timeLeft).map(([unit, value], i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="text-5xl md:text-8xl font-bold font-mono tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            {value.toString().padStart(2, "0")}
          </div>
          <p className="uppercase tracking-[4px] text-white/70 text-xs md:text-sm">
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
}

const weeklySchedule = [
  { day: "Friday", title: "Sunset Sessions", desc: "Kick off the weekend with ambient lounge music, signature cocktails, and a breathtaking view of the sunset.", time: "5:00 PM - Late" },
  { day: "Saturday", title: "Beach Party", desc: "High-energy nightlife featuring international DJs, bottle service, and an unforgettable party atmosphere.", time: "8:00 PM - Sunrise" },
  { day: "Sunday", title: "Chill & Grill", desc: "Recover and relax with a premium seafood barbecue, bottomless mimosas, and smooth acoustic performances.", time: "1:00 PM - 8:00 PM" },
];

const featuredEvents = [
  {
    title: "Full Moon Festival",
    type: "Special Event",
    desc: "Our legendary monthly beach festival under the stars. Expect fire dancers, a massive outdoor stage, and 2000+ guests.",
    image: "https://www.facebook.com/photo.php?fbid=876337748105140&set=pb.100071867684940.-2207520000&type=3",
    date: "July 15, 2026"
  },
  {
    title: "Exclusive Jazz Night",
    type: "Live Band",
    desc: "An intimate evening of premium dining and live jazz performances in our glass-walled lounge overlooking the water.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    date: "Every Thursday"
  },
];

function EventsPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  const { content } = useCMS("events", {
    hero_subtitle: "The Heart of Kisumu",
    hero_title: "NIGHTLIFE",
    event_date: "2026-12-31T23:59:59"
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalForm, setModalForm] = useState({ name: "", guests: "2" });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `*Event Booking Request*\nEvent: ${selectedEvent.title}\nDate: ${selectedEvent.date}\nName: ${modalForm.name}\nGuests: ${modalForm.guests}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <MainLayout>
      <PageTransition>

        {/* HERO */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60 mix-blend-screen">
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[#0ea5e9]/10 mix-blend-overlay"></div>
          </motion.div>
          <div className="relative z-10 text-center px-6 mt-20">
            <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="uppercase tracking-[8px] text-[#0ea5e9] font-bold mb-6 text-sm">
              {content.hero_subtitle}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-6xl md:text-[140px] font-bold leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] whitespace-pre-line">
              {content.hero_title}
            </motion.h1>
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="py-24 px-6 bg-[#111827] border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#ea580c]/5 blur-3xl rounded-full w-[800px] h-[800px] -top-1/2 left-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <p className="uppercase tracking-[5px] text-[#ea580c] font-semibold mb-12">Next Major Event: Beach Festival</p>
            <Countdown targetDate={content.event_date} />
            <button 
              onClick={() => setSelectedEvent({ title: "Beach Festival", date: "TBD" })}
              className="mt-16 bg-white text-[#111827] px-10 py-4 rounded-full font-bold uppercase tracking-[2px] hover:bg-[#ea580c] hover:text-white transition duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]"
            >
              Get Tickets
            </button>
          </div>
        </section>

        {/* WEEKLY */}
        <section className="py-32 px-6 bg-[#f9fafb]">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-24">
              <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4">The Routine</p>
              <h2 className="text-5xl md:text-7xl font-bold text-[#111827]">Weekly Schedule</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
              {weeklySchedule.map((schedule, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.2 }} viewport={{ once: true, margin: "-100px" }} className="bg-white/80 backdrop-blur-xl p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-[#0ea5e9] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <p className="text-[#0ea5e9] font-bold tracking-[4px] uppercase mb-8">{schedule.day}</p>
                  <h3 className="text-4xl font-bold text-[#111827] mb-6">{schedule.title}</h3>
                  <p className="text-lg text-[#111827]/70 leading-relaxed mb-10">{schedule.desc}</p>
                  <div className="flex items-center gap-4 text-[#ea580c] font-semibold">
                    <FaRegCalendarAlt />
                    <span>{schedule.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="bg-[#ffffff]">
          {featuredEvents.map((event, i) => (
            <div key={i} className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? 'bg-[#f9fafb]' : ''}`}>
              <div className={`relative h-[600px] lg:h-auto overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <motion.img initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-center p-12 lg:p-24 xl:p-32">
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="max-w-2xl">
                  <p className="uppercase tracking-[5px] text-[#ea580c] font-semibold mb-6">{event.type}</p>
                  <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-[#111827]">{event.title}</h2>
                  <p className="text-xl text-[#111827]/70 leading-relaxed mb-12">{event.desc}</p>
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center gap-4 text-[#ea580c] font-bold uppercase tracking-[2px] hover:text-[#0ea5e9] transition duration-300 group"
                  >
                    Book This Event
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </section>

        {/* VIP */}
        <section className="py-40 px-6 bg-[#111827] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/10 rounded-full blur-[100px]"></div>
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-10">
                The VIP<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#ea580c]">Experience</span>
              </h2>
              <p className="text-2xl text-white/70 font-light leading-relaxed mb-12">
                Elevate your night with exclusive bottle service, private lounges, dedicated security, and the best views of the main stage.
              </p>
              <Link to="/vip">
                <button className="bg-gradient-to-r from-[#d4af37] to-[#ea580c] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[2px] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300">
                  View Packages
                </button>
              </Link>
            </motion.div>
            <div className="relative h-[700px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329" alt="VIP Lounge" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000" />
            </div>
          </div>
        </section>

        {/* INQUIRY CTA */}
        <section className="py-32 px-6 bg-[#0ea5e9]">
          <div className="max-w-[1000px] mx-auto bg-white p-12 md:p-20 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] text-center relative overflow-hidden">
            <p className="uppercase tracking-[5px] text-[#0ea5e9] font-bold mb-6 relative z-10">Corporate & Private</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mb-8 relative z-10">Host Your Event With Us</h2>
            <Link to="/private-events">
              <button className="bg-[#111827] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[2px] hover:bg-[#ea580c] transition-all duration-300 relative z-10">
                Inquire Now
              </button>
            </Link>
          </div>
        </section>

        {/* EVENT BOOKING MODAL */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div 
                initial={{ y: 50, scale: 0.9 }} animate={{ y: 0, scale: 1 }} exit={{ y: 50, scale: 0.9 }}
                className="bg-white rounded-[30px] p-8 md:p-12 max-w-[600px] w-full relative shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setSelectedEvent(null)} className="absolute top-6 right-6 text-gray-400 hover:text-[#111827] text-2xl"><FaTimes /></button>
                <h3 className="text-3xl font-bold text-[#111827] mb-2">{selectedEvent.title}</h3>
                <p className="text-[#ea580c] font-bold uppercase tracking-[2px] mb-8">{selectedEvent.date}</p>
                
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Full Name</label>
                    <input required type="text" value={modalForm.name} onChange={e => setModalForm({...modalForm, name: e.target.value})} className="w-full border-b-2 border-gray-200 py-3 text-xl focus:border-[#ea580c] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Guests</label>
                    <input required type="number" min="1" value={modalForm.guests} onChange={e => setModalForm({...modalForm, guests: e.target.value})} className="w-full border-b-2 border-gray-200 py-3 text-xl focus:border-[#ea580c] outline-none transition-colors" />
                  </div>
                  <button type="submit" className="w-full bg-[#25D366] text-white py-5 rounded-[20px] font-bold text-xl flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <FaWhatsapp className="text-2xl" /> Send Request
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </PageTransition>
    </MainLayout>
  );
}

export default EventsPage;