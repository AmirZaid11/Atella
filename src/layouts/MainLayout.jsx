import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Loader from "../components/Loader";

function MainLayout({ children }) {
  return (
    <div className="bg-[#ffffff] text-[#111827] overflow-hidden">
      <Loader />
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}

export default MainLayout;