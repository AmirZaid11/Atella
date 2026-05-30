import { motion } from "framer-motion";
import { FaCocktail, FaMusic, FaUmbrellaBeach } from "react-icons/fa";

function About() {
  return (
    <section className="bg-[#ffffff] text-[#111827] py-28 px-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
            alt="Beach Resort"
            className="rounded-3xl shadow-2xl h-[600px] object-cover w-full"
          />

          <div className="absolute -bottom-8 -right-8 bg-[#ea580c] text-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(234,88,12,0.3)]">
            <h1 className="text-4xl font-bold">5★</h1>
            <p className="font-semibold">Luxury Experience</p>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4">
            About Attela
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Lakeside Luxury
            <br />
            Redefined
          </h2>

          <p className="text-[#4b5563] text-lg leading-relaxed mb-10">
            Nestled along the beautiful shores of Lake Victoria, Attela Beach Resort
            delivers a premium blend of relaxation, entertainment, nightlife,
            dining, and unforgettable sunset experiences.
          </p>

          {/* FEATURES */}
          <div className="grid gap-6">

            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] hover:-translate-y-2 transition duration-500 flex gap-6 group">
              <div className="w-16 h-16 rounded-full bg-[#ea580c]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-500">
                <FaUmbrellaBeach className="text-[#ea580c] text-3xl" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#111827]">
                  Beachfront Experience
                </h3>

                <p className="text-[#4b5563] leading-relaxed">
                  Relax with panoramic lake views, cool breeze, and luxury outdoor seating.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] hover:-translate-y-2 transition duration-500 flex gap-6 group">
              <div className="w-16 h-16 rounded-full bg-[#ea580c]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-500">
                <FaMusic className="text-[#ea580c] text-3xl" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#111827]">
                  Vibrant Nightlife
                </h3>

                <p className="text-[#4b5563] leading-relaxed">
                  Enjoy DJ nights, themed events, live performances, and premium entertainment.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] hover:-translate-y-2 transition duration-500 flex gap-6 group">
              <div className="w-16 h-16 rounded-full bg-[#ea580c]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-500">
                <FaCocktail className="text-[#ea580c] text-3xl" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#111827]">
                  Premium Dining
                </h3>

                <p className="text-[#4b5563] leading-relaxed">
                  Taste expertly prepared seafood, nyama choma, cocktails, and signature dishes.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;