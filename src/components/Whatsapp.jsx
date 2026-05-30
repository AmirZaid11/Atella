import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
    return (
        <a
            href="https://wa.me/254715264486"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="w-[70px] h-[70px] rounded-full bg-green-500 flex items-center justify-center text-white text-4xl shadow-2xl hover:scale-110 transition duration-300 animate-bounce">
                <FaWhatsapp />
            </div>
        </a>
    );
}

export default Whatsapp;