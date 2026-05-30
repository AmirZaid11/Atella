import { motion } from "framer-motion";

const stats = [
    {
        number: "10K+",
        title: "Happy Guests",
    },

    {
        number: "250+",
        title: "Luxury Events",
    },

    {
        number: "5★",
        title: "Premium Experience",
    },

    {
        number: "24/7",
        title: "Entertainment",
    },
];

function Stats() {
    return (
        <section className="relative py-28 px-6 bg-[#050505] overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[180px] rounded-full"></div>

            <div className="w-full relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[6px] text-yellow-400 mb-4 text-sm">
                        Excellence
                    </p>

                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                        Redefining
                        <br />
                        Lakeside Luxury
                    </h2>
                </motion.div>

                {/* STATS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] py-14 px-6 text-center hover:border-yellow-400 transition duration-500"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
                                {stat.number}
                            </h1>

                            <p className="uppercase tracking-[3px] text-gray-300 text-sm">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Stats;