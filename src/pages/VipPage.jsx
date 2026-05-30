import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { FaGem, FaCrown, FaStar, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { useCMS } from "../hooks/useCMS";

const WHATSAPP_NUMBER = "254715264486";

const vipPackages = [
  {
    title: "Silver Package",
    icon: <FaStar />,
    price: "From $300",
    color: "from-gray-300 to-gray-400",
    textColor: "text-gray-400",
    features: [
      "Reserved Premium Table",
      "Fast-track Entry for 4 Guests",
      "1 Premium Bottle of Choice",
      "Dedicated Hostess",
      "Complimentary Mixers"
    ]
  },
  {
    title: "Gold Package",
    icon: <FaCrown />,
    price: "From $800",
    color: "from-[#d4af37] to-[#b5952f]",
    textColor: "text-[#d4af37]",
    features: [
      "Private VIP Booth",
      "Fast-track Entry for 8 Guests",
      "3 Premium Bottles of Choice",
      "Personal Security Detail",
      "Custom LED Bottle Presentation",
      "Gourmet Snack Platter"
    ]
  },
  {
    title: "Platinum Package",
    icon: <FaGem />,
    price: "From $1,500",
    color: "from-blue-300 to-purple-400",
    textColor: "text-blue-300",
    features: [
      "Ultra-VIP Stage Side Area",
      "Unlimited Fast-track Entry",
      "Unlimited Premium Bottles",
      "Private VIP Restroom Access",
      "Dedicated Security Team",
      "Chauffeur Pickup/Drop-off",
      "Meet & Greet with Headliner"
    ]
  }
];

function VipPage() {
  const bookPackage = (packageName) => {
    const message = `Hello Attela, I am interested in booking the *${packageName}* for an upcoming event. Please provide availability and details.`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  const { content } = useCMS("vip", {
    hero_subtitle: "The Ultimate Experience",
    hero_title: "VIP Bottle Service",
    hero_desc: "Elevate your night. Gain exclusive access to premium lounges, dedicated service, and the best views of the main stage."
  });

  return (
    <MainLayout>
      <PageTransition>
        
        {/* HERO */}
        <section className="relative pt-48 pb-20 px-6 bg-[#0a0f18] overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[8px] text-[#d4af37] font-semibold mb-6"
            >
              {content.hero_subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold leading-tight text-white mb-8 whitespace-pre-line"
            >
              {content.hero_title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/60 font-light max-w-2xl mx-auto whitespace-pre-line"
            >
              {content.hero_desc}
            </motion.p>
          </div>
        </section>

        {/* PRICING TABLES */}
        <section className="py-32 px-6 bg-[#0a0f18] min-h-screen relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_2px,_transparent_2px)] bg-[length:30px_30px]"></div>

          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-3 gap-10 relative z-10">
            {vipPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-[#111827] rounded-[40px] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 relative group overflow-hidden ${index === 1 ? 'lg:-translate-y-8 border-[#d4af37]/30' : ''}`}
              >
                {/* Glow Effect */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${pkg.color}`}></div>
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${pkg.color} opacity-[0.03] group-hover:opacity-[0.08] rounded-full blur-3xl transition-opacity duration-500`}></div>

                <div className={`text-5xl ${pkg.textColor} mb-8`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className={`text-xl font-bold ${pkg.textColor} mb-10`}>{pkg.price}</p>

                <div className="space-y-6 mb-12 flex-grow min-h-[350px]">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 text-white/70">
                      <FaCheckCircle className={`${pkg.textColor} mt-1 shrink-0`} />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => bookPackage(pkg.title)}
                  className={`w-full py-5 rounded-full font-bold uppercase tracking-[2px] transition-all duration-300 flex items-center justify-center gap-3 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#b5952f] text-white hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-105' 
                      : 'bg-white/10 text-white hover:bg-white hover:text-[#111827]'
                  }`}
                >
                  <FaWhatsapp className="text-2xl" />
                  Request Booking
                </button>

              </motion.div>
            ))}
          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default VipPage;
