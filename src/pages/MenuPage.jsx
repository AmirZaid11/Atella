import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { useCMS } from "../hooks/useCMS";
import { FaCocktail, FaFish, FaFireAlt } from "react-icons/fa";

const menu = [
  {
    category: "Signature Cocktails",
    icon: <FaCocktail />,
    items: [
      { name: "Passion Mojito", desc: "White rum, fresh passion fruit, mint, lime", price: "$12" },
      { name: "Blue Lagoon", desc: "Vodka, blue curaçao, lemonade, citrus twist", price: "$14" },
      { name: "Sunset Martini", desc: "Gin, blood orange, vermouth, flamed peel", price: "$16" },
      { name: "Classic Margarita", desc: "Tequila reposado, Cointreau, fresh lime, salt rim", price: "$14" },
    ],
  },
  {
    category: "Seafood Specials",
    icon: <FaFish />,
    items: [
      { name: "Lake Victoria Tilapia", desc: "Whole grilled tilapia, kachumbari, garlic butter", price: "$28" },
      { name: "Garlic Tiger Prawns", desc: "Pan-seared prawns, white wine reduction, herbs", price: "$32" },
      { name: "Fisherman's Platter", desc: "Assorted local catch, calamari, dips, fries", price: "$45" },
      { name: "Coconut Salmon", desc: "Wild salmon fillet, coconut curry sauce, jasmine rice", price: "$34" },
    ],
  },
  {
    category: "Premium Grill",
    icon: <FaFireAlt />,
    items: [
      { name: "Signature Nyama Choma", desc: "Slow-roasted goat ribs, classic Kenyan spices", price: "$25" },
      { name: "Tomahawk Steak", desc: "800g prime beef, roasted garlic, chimichurri", price: "$65" },
      { name: "BBQ Glazed Chicken", desc: "Half spring chicken, smoky BBQ glaze, charred corn", price: "$22" },
      { name: "Herb-Crusted Lamb Chops", desc: "Grass-fed lamb, mint puree, root vegetables", price: "$38" },
    ],
  },
];

function MenuPage() {
  const { content } = useCMS("menu", {
    hero_subtitle: "Culinary Experience",
    hero_title: "THE MENU",
    hero_img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
  });

  return (
    <MainLayout>
      <PageTransition>

        {/* HERO */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#111827]">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: `url('${content.hero_img}')` }}
          ></motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent"></div>

          <div className="relative z-10 text-center px-6 mt-20">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[8px] text-[#ea580c] font-semibold mb-6 text-sm"
            >
              {content.hero_subtitle}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-[140px] font-bold leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] whitespace-pre-line"
            >
              {content.hero_title}
            </motion.h1>
          </div>
        </section>

        {/* MENU CONTENT */}
        <section className="bg-[#111827] py-32 px-6 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ea580c]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex flex-col gap-24">
              {menu.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-md relative"
                >
                  <div className="absolute -top-10 left-10 w-20 h-20 bg-[#ea580c] text-white rounded-2xl flex items-center justify-center text-4xl shadow-[0_10px_30px_rgba(234,88,12,0.4)] rotate-3">
                    {section.icon}
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white pt-8 tracking-[2px] uppercase">
                    {section.category}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {section.items.map((item, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-3 group-hover:border-[#ea580c] transition-colors duration-300">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ea580c] transition-colors duration-300">
                            {item.name}
                          </h3>
                          <span className="text-[#ea580c] font-bold text-xl font-mono">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-white/50 text-sm tracking-[1px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default MenuPage;