import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import Hero from "../sections/Hero";
import NotificationCard from "../components/NotificationCard";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCMS } from "../hooks/useCMS";

function Home() {
  const { content } = useCMS("home", {
    welcome_subtitle: "Welcome To Attela",
    welcome_title: "Luxury Beyond\nExpectations",
    about_card_img: "story.jpg",
    events_card_img: "e1.jpg",
    gallery_card_img: "experience.jpg"
  });

  return (
    <MainLayout>
      <PageTransition>
        <NotificationCard />
        
        {/* HERO */}
        <Hero />

        {/* EXPERIENCE PREVIEW */}
        <section className="py-32 px-6 bg-[#ffffff]">

          <div className="max-w-[1600px] mx-auto">

            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-5">
                {content.welcome_subtitle}
              </p>

              <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold leading-[0.95] text-[#111827] whitespace-pre-line">
                {content.welcome_title}
              </h2>
            </motion.div>

            {/* CARDS */}
            <div className="grid lg:grid-cols-3 gap-10">

              {/* ABOUT */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative h-[700px] overflow-hidden rounded-[40px]"
              >
                <img
                  src={content.about_card_img}
                  alt="About"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/80 to-transparent"></div>

                <div className="absolute bottom-0 p-10">
                  <p className="uppercase tracking-[5px] text-[#ea580c] font-semibold mb-4 text-sm">
                    About
                  </p>

                  <h3 className="text-5xl font-bold mb-6 text-[#111827]">
                    Our Story
                  </h3>

                  <Link to="/about">
                    <button className="bg-[#ea580c] text-white w-[190px] h-[58px] rounded-full font-semibold hover:scale-105 transition duration-300">
                      Discover
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* EVENTS */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[700px] overflow-hidden rounded-[40px]"
              >
                <img
                  src={content.events_card_img}
                  alt="Events"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/80 to-transparent"></div>

                <div className="absolute bottom-0 p-10">
                  <p className="uppercase tracking-[5px] text-[#ea580c] font-semibold mb-4 text-sm">
                    Events
                  </p>

                  <h3 className="text-5xl font-bold mb-6 text-[#111827]">
                    Nightlife
                  </h3>

                  <Link to="/events">
                    <button className="bg-[#ea580c] text-white w-[190px] h-[58px] rounded-full font-semibold hover:scale-105 transition duration-300">
                      Explore
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* GALLERY */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative h-[700px] overflow-hidden rounded-[40px]"
              >
                <img
                  src={content.gallery_card_img}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/80 to-transparent"></div>

                <div className="absolute bottom-0 p-10">
                  <p className="uppercase tracking-[5px] text-[#ea580c] font-semibold mb-4 text-sm">
                    Gallery
                  </p>

                  <h3 className="text-5xl font-bold mb-6 text-[#111827]">
                    Experience
                  </h3>

                  <Link to="/gallery">
                    <button className="bg-[#ea580c] text-white w-[190px] h-[58px] rounded-full font-semibold hover:scale-105 transition duration-300">
                      View More
                    </button>
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </PageTransition>
    </MainLayout>
  );
}

export default Home;