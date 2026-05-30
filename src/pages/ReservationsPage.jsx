import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCalendarCheck, FaRegUser, FaGlassCheers, FaStar } from "react-icons/fa";

function ReservationsPage() {
  const WHATSAPP_NUMBER = "254715264486"; // User provided WhatsApp Number

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    experience: "Dining",
    requests: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `
*New Reservation Request*
-------------------------
*Guest Details*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Booking Details*
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}

*Experience*
Type: ${formData.experience}

*Special Requests*
${formData.requests || "None"}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp directly to avoid popup blockers
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <MainLayout>
      <PageTransition>
        
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-20 px-6 bg-[#111827] overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#ea580c]/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-[1000px] mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-6"
            >
              Secure Your Experience
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[100px] font-bold leading-tight text-white mb-8 drop-shadow-2xl"
            >
              Reservations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/70 font-light"
            >
              Fill out the form below. Your request will be sent directly to our VIP hosting team via WhatsApp for instant confirmation.
            </motion.p>
          </div>
        </section>

        {/* RESERVATION FORM */}
        <section className="py-20 px-6 bg-[#f9fafb]">
          <div className="max-w-[1000px] mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-16">

                {/* STEP 1: Guest Details */}
                <div>
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="w-10 h-10 bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center rounded-full text-xl">
                      <FaRegUser />
                    </div>
                    <h2 className="text-3xl font-bold text-[#111827]">Guest Details</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Full Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300" placeholder="John Doe" />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Phone Number</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300" placeholder="+254 700 000 000" />
                    </div>
                    <div className="relative md:col-span-2">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Email Address</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300" placeholder="john@example.com" />
                    </div>
                  </div>
                </div>

                {/* STEP 2: Booking Details */}
                <div>
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="w-10 h-10 bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center rounded-full text-xl">
                      <FaCalendarCheck />
                    </div>
                    <h2 className="text-3xl font-bold text-[#111827]">Booking Details</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="relative">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Date</label>
                      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300" />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Time</label>
                      <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300" />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-gray-500 uppercase tracking-[2px] mb-2">Guests</label>
                      <select name="guests" value={formData.guests} onChange={handleChange} className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300 cursor-pointer">
                        {[1,2,3,4,5,6,7,8,9,10,"10+"].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* STEP 3: Experience Type */}
                <div>
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="w-10 h-10 bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center rounded-full text-xl">
                      <FaStar />
                    </div>
                    <h2 className="text-3xl font-bold text-[#111827]">Experience Type</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {["Restaurant Dining", "VIP Table (Nightlife)", "Beach Cabana", "Corporate Function", "Birthday Package"].map((exp) => (
                      <label key={exp} className={`cursor-pointer border-2 rounded-[20px] p-6 flex items-center gap-4 transition-all duration-300 ${formData.experience === exp ? 'border-[#ea580c] bg-[#ea580c]/5 shadow-md' : 'border-gray-100 hover:border-gray-300'}`}>
                        <input 
                          type="radio" 
                          name="experience" 
                          value={exp} 
                          checked={formData.experience === exp} 
                          onChange={handleChange}
                          className="w-5 h-5 text-[#ea580c] focus:ring-[#ea580c]"
                        />
                        <span className="text-lg font-bold text-[#111827]">{exp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* STEP 4: Special Requests */}
                <div>
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="w-10 h-10 bg-gray-100 text-gray-500 flex items-center justify-center rounded-full text-xl">
                      <FaGlassCheers />
                    </div>
                    <h2 className="text-3xl font-bold text-[#111827]">Special Requests</h2>
                  </div>
                  
                  <div className="relative">
                    <textarea 
                      name="requests" 
                      value={formData.requests} 
                      onChange={handleChange} 
                      rows="4" 
                      className="w-full border-2 border-gray-100 rounded-[20px] bg-transparent p-6 text-xl text-[#111827] focus:border-[#ea580c] outline-none transition-colors duration-300 resize-none" 
                      placeholder="Any allergies, special occasions, or specific seating requests? Let us know here."
                    ></textarea>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-8">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] text-white h-[90px] rounded-[25px] font-bold text-2xl flex items-center justify-center gap-4 hover:bg-[#1ebd58] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all duration-500"
                  >
                    <FaWhatsapp className="text-4xl" />
                    Send Request via WhatsApp
                  </button>
                  <p className="text-center text-gray-400 mt-6 font-medium">No payment required until your reservation is confirmed.</p>
                </div>

              </form>
            </motion.div>

          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default ReservationsPage;