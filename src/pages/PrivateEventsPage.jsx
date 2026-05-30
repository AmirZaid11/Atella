import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGlassCheers, FaBuilding, FaBirthdayCake, FaHeart } from "react-icons/fa";

const WHATSAPP_NUMBER = "254715264486";

function PrivateEventsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    guests: "50-100",
    budget: "$5,000 - $10,000",
    date: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
*Private Event Inquiry*
-------------------------
*Client Details*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Event Details*
Type: ${formData.eventType}
Date: ${formData.date}
Guests: ${formData.guests}
Budget: ${formData.budget}

*Additional Details*
${formData.details || "None provided"}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <MainLayout>
      <PageTransition>
        
        {/* HERO */}
        <section className="relative pt-48 pb-20 px-6 bg-[#ffffff] overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0ea5e9]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[8px] text-[#0ea5e9] font-semibold mb-6"
            >
              Curated Experiences
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[110px] font-bold leading-[0.9] text-[#111827] mb-8"
            >
              Host Your Event
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-[#111827]/60 font-light max-w-2xl mx-auto"
            >
              From intimate beach weddings to massive corporate retreats, our dedicated events team will craft an unforgettable experience tailored entirely to your vision.
            </motion.p>
          </div>
        </section>

        {/* EVENT TYPES */}
        <section className="py-20 px-6 bg-[#f9fafb]">
          <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaHeart />, title: "Weddings", desc: "Say 'I do' with the sunset reflecting over Lake Victoria." },
              { icon: <FaBuilding />, title: "Corporate", desc: "Retreats, product launches, and high-level meetings." },
              { icon: <FaBirthdayCake />, title: "Birthdays", desc: "Celebrate another year with an unforgettable beachfront party." },
              { icon: <FaGlassCheers />, title: "Custom", desc: "Fashion shows, music video shoots, and bespoke events." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-5xl text-[#0ea5e9] mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#111827] mb-4">{item.title}</h3>
                <p className="text-[#111827]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INQUIRY FORM */}
        <section className="py-32 px-6 bg-[#ffffff]">
          <div className="max-w-[1000px] mx-auto bg-[#111827] rounded-[40px] p-8 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Start Planning</h2>
              <p className="text-white/60">Fill out the brief below and our event coordinators will reach out.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Target Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300 [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300 cursor-pointer [&>option]:text-black">
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Retreat</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Custom">Custom / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Estimated Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300 cursor-pointer [&>option]:text-black">
                    <option value="Under 50">Under 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-300">100 - 300</option>
                    <option value="300-500">300 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Estimated Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border-b-2 border-white/20 bg-transparent py-3 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300 cursor-pointer [&>option]:text-black">
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $30,000">$10,000 - $30,000</option>
                    <option value="$30,000+">$30,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white/50 uppercase tracking-[2px] mb-2">Event Details & Vision</label>
                <textarea name="details" value={formData.details} onChange={handleChange} rows="4" className="w-full border-2 border-white/20 rounded-[20px] bg-transparent p-6 text-xl text-white focus:border-[#0ea5e9] outline-none transition-colors duration-300 resize-none" placeholder="Tell us what you have in mind..."></textarea>
              </div>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full bg-[#0ea5e9] text-white h-[90px] rounded-[25px] font-bold text-2xl flex items-center justify-center gap-4 hover:bg-[#ea580c] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,88,12,0.4)] transition-all duration-500"
                >
                  <FaWhatsapp className="text-4xl" />
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default PrivateEventsPage;
