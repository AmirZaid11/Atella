import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import MenuPage from "./pages/MenuPage";
import ReservationsPage from "./pages/ReservationsPage";
import ContactPage from "./pages/ContactPage";
import FloatingActions from "./components/FloatingActions";
import VipPage from "./pages/VipPage";
import PrivateEventsPage from "./pages/PrivateEventsPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/events" element={<EventsPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/menu" element={<MenuPage />} />

        <Route path="/reservations" element={<ReservationsPage />} />

        <Route path="/reservations" element={<ReservationsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/vip" element={<VipPage />} />

        <Route path="/private-events" element={<PrivateEventsPage />} />

        <Route path="/admin" element={<AdminPage />} />

      </Routes>
      <FloatingActions />

    </BrowserRouter>
  );
}

export default App;