import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-md py-4 shadow-lg text-[#111827]"
        : "bg-transparent py-6 text-[#111827]"
        }`}
    >
      <div className="w-full px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-bold tracking-[4px] text-[#ea580c] cursor-pointer hover:scale-105 transition-transform duration-300">
            ATTELA
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-14 text-[13px] uppercase tracking-[3px]">
          <Link to="/">
            <li className="relative group transition-all duration-300 hover:text-yellow-400 cursor-pointer nav-glow">
              Home
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-[2px] w-0 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] transition-all duration-300 group-hover:w-full" />
            </li>
          </Link>

          <Link to="/about">
            <li className="relative group transition-all duration-300 hover:text-yellow-400 cursor-pointer nav-glow">
              About
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-[2px] w-0 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] transition-all duration-300 group-hover:w-full" />
            </li>
          </Link>

          <Link to="/events">
            <li className="relative group transition-all duration-300 hover:text-yellow-400 cursor-pointer nav-glow">
              Events
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-[2px] w-0 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] transition-all duration-300 group-hover:w-full" />
            </li>
          </Link>

          <Link to="/gallery">
            <li className="relative group transition-all duration-300 hover:text-yellow-400 cursor-pointer nav-glow">
              Gallery
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-[2px] w-0 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] transition-all duration-300 group-hover:w-full" />
            </li>
          </Link>

          <Link to="/contact">
            <li className="relative group transition-all duration-300 hover:text-yellow-400 cursor-pointer nav-glow">
              Contact
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-[2px] w-0 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] transition-all duration-300 group-hover:w-full" />
            </li>
          </Link>
        </ul>

        {/* BOOK BUTTON */}
        <Link to="/reservations">
          <button className="hidden md:flex items-center justify-center bg-[#ea580c] text-white w-[150px] h-[50px] rounded-full font-semibold hover:bg-[#0ea5e9] transition duration-300">
            Reserve
          </button>
        </Link>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#111827]"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {
        open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 border-t border-black/5 backdrop-blur-2xl">
            <div className="flex flex-col p-8 gap-8 text-lg">
              <Link to="/" className="hover:text-[#0ea5e9]">Home</Link>
              <Link to="/about" className="hover:text-[#0ea5e9]">About</Link>
              <Link to="/events" className="hover:text-[#0ea5e9]">Events</Link>
              <Link to="/gallery" className="hover:text-[#0ea5e9]">Gallery</Link>
              <Link to="/menu" className="hover:text-[#0ea5e9]">Menu</Link>
              <Link to="/reservations" className="hover:text-[#0ea5e9]">Reservations</Link>
              <Link to="/contact" className="hover:text-[#0ea5e9]">Contact</Link>
            </div>
          </div>
        )
      }
    </nav>
  );
}

export default Navbar;