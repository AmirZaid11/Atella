import { motion } from "framer-motion";

const events = [
  {
    title: "Sunset Fridays",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    desc: "Experience vibrant lakeside sunsets with live DJs and cocktails.",
  },

  {
    title: "Beach Vibes Saturday",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    desc: "Luxury nightlife, music, and unforgettable entertainment.",
  },

  {
    title: "Sunday Chill & Grill",
    image:
      "/e2.jpg",
    desc: "Relax with nyama choma, seafood, and smooth lounge music.",
  },
];

function Events() {
  return (
    <section className="bg-[#f9fafb] py-28 px-6">
      <div className="w-full">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#111827]">
            Signature Events
          </h2>
        </motion.div>

        {/* EVENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] h-[550px] shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition duration-500"
            >
              {/* IMAGE */}
              <div className="h-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/80 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold mb-4 text-[#111827]">
                  {event.title}
                </h3>

                <p className="text-[#111827]/80 mb-6">
                  {event.desc}
                </p>

                <button className="bg-[#ea580c] text-white w-[170px] h-[52px] rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Events;