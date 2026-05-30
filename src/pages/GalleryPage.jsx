import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { supabase } from "../lib/supabase";

const categories = ["All", "Beach", "Dining", "Events", "Nightlife", "VIP"];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [galleryData, setGalleryData] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      const formattedData = data.map((item, i) => ({
        ...item,
        image: item.image_url,
        // Assign dynamic spans to create a beautiful masonry effect
        span: i % 5 === 0 ? "row-span-2 col-span-2" : i % 3 === 0 ? "row-span-2 col-span-1" : "row-span-1 col-span-1"
      }));
      setGalleryData(formattedData);
      setFilteredGallery(formattedData);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredGallery(galleryData);
    } else {
      setFilteredGallery(galleryData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory, galleryData]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <MainLayout>
      <PageTransition>
        
        {/* HERO SECTION */}
        <section className="pt-48 pb-20 px-6 bg-[#f9fafb] text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-[#111827] mb-6"
          >
            The Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#111827]/70 max-w-2xl mx-auto"
          >
            A visual journey through the luxury, nightlife, and breathtaking experiences at Attela Beach Resort.
          </motion.p>
        </section>

        {/* GALLERY FILTERS */}
        <section className="py-10 px-6 bg-[#ffffff] sticky top-[100px] z-40 shadow-sm">
          <div className="max-w-[1600px] mx-auto flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-sm uppercase tracking-[2px] font-bold transition duration-300 ${
                  activeCategory === category 
                  ? "bg-[#ea580c] text-white shadow-[0_10px_20px_rgba(234,88,12,0.3)]" 
                  : "bg-gray-100 text-[#111827]/60 hover:bg-gray-200 hover:text-[#111827]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* MASONRY GALLERY */}
        <section className="py-20 px-6 bg-[#ffffff] min-h-screen">
          <div className="max-w-[1600px] mx-auto">
            
            {loading ? (
              <div className="flex justify-center items-center py-32">
                <div className="w-16 h-16 border-4 border-[#ea580c] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]">
                <AnimatePresence mode="popLayout">
                  {filteredGallery.map((item, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -40, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                      key={item.id}
                      onClick={() => openLightbox(index)}
                      className={`relative overflow-hidden rounded-[30px] cursor-pointer group shadow-sm hover:shadow-2xl transition-shadow duration-500 ${
                        activeCategory === "All" ? item.span : "row-span-1 col-span-1" 
                      }`}
                    >
                      {/* Image */}
                      <img 
                        src={item.image} 
                        alt={item.category} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">
                        <p className="text-[#ea580c] uppercase tracking-[3px] font-bold text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition duration-500">
                          {item.category}
                        </p>
                        <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition duration-500 delay-75">
                          Expand View
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!loading && filteredGallery.length === 0 && (
              <div className="text-center text-gray-400 py-20 text-xl">
                No images found for this category. Check the Admin Dashboard to add some!
              </div>
            )}

          </div>
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            >
              
              <button onClick={closeLightbox} className="absolute top-10 right-10 text-white/50 hover:text-white text-4xl transition duration-300 z-50">
                <FaTimes />
              </button>

              <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl transition duration-300 z-50">
                <FaChevronLeft />
              </button>

              <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl transition duration-300 z-50">
                <FaChevronRight />
              </button>

              <div className="w-full h-full p-6 md:p-20 flex items-center justify-center cursor-auto" onClick={closeLightbox}>
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].category}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                <p className="text-white uppercase tracking-[3px] text-sm font-bold">
                  {filteredGallery[lightboxIndex].category}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </PageTransition>
    </MainLayout>
  );
}

export default GalleryPage;