import { motion } from "framer-motion";

function Reservation() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/experience.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
            </div>

            <div className="w-full relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-[#ffffff]/95 border border-black/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-16"
                >
                    <div className="text-center mb-14">

                        <p className="uppercase tracking-[6px] text-[#ea580c] font-semibold mb-4 text-sm">
                            Reservations
                        </p>

                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#111827]">
                            Reserve Your
                            <br />
                            Experience
                        </h2>

                        <p className="text-[#111827]/80 max-w-2xl mx-auto">
                            Book premium tables, private events, celebrations,
                            and unforgettable lakeside experiences at Attela Beach Resort.
                        </p>
                    </div>

                    {/* FORM */}
                    <form className="grid md:grid-cols-2 gap-8">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-white border border-gray-200 text-[#111827] rounded-2xl h-[65px] px-6 outline-none focus:border-[#ea580c] transition"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-white border border-gray-200 text-[#111827] rounded-2xl h-[65px] px-6 outline-none focus:border-[#ea580c] transition"
                        />

                        <input
                            type="date"
                            className="bg-white border border-gray-200 text-[#111827] rounded-2xl h-[65px] px-6 outline-none focus:border-[#ea580c] transition"
                        />

                        <input
                            type="number"
                            placeholder="Guests"
                            className="bg-white border border-gray-200 text-[#111827] rounded-2xl h-[65px] px-6 outline-none focus:border-[#ea580c] transition"
                        />

                        <textarea
                            rows="5"
                            placeholder="Special Requests"
                            className="md:col-span-2 bg-white border border-gray-200 text-[#111827] rounded-2xl p-6 outline-none focus:border-[#ea580c] transition"
                        ></textarea>

                        <button
                            className="md:col-span-2 bg-[#ea580c] text-white h-[65px] rounded-2xl font-semibold text-lg hover:scale-[1.02] transition duration-300"
                        >
                            Reserve Now
                        </button>

                    </form>
                </motion.div>
            </div>
        </section>
    );
}

export default Reservation;