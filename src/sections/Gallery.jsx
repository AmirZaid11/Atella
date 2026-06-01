import { motion } from "framer-motion";

const galleryImages = [
  {
    image:
      "/experience.jpg",
    title: "Luxury Sunsets",
  },

  {
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    title: "Nightlife Experience",
  },

  {
    image:
      "/story.jpg",
    title: "Beachfront Relaxation",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    title: "Premium Events",
  },

  {
    image:
      "/e2.jpg",
    title: "Dining & Cocktails",
  },

  {
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
    title: "Lake Victoria Views",
  },
];

function Gallery() {
  return (
    <section className="bg-[#ffffff] py-32 px-6">
      <div className="w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4 text-sm">
            Gallery
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-[#111827]">
            Discover The
            <br />
            Attela Lifestyle
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] h-[450px]"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-4xl font-bold mb-3 text-[#111827]">
                  {item.title}
                </h3>

                <div className="w-16 h-[2px] bg-[#ea580c]"></div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Gallery;