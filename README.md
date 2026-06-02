# 🌊 Atella Beach Resort

<div align="center">

  ![Atella Beach Resort Hero](https://atellabeachresort.netlify.app/images/hero.jpg)

  A luxurious, modern, and elegant digital showcase for the premium coastal getaway destination **Atella Beach Resort**. Immersive aesthetics, fluid scroll motions, and interactive booking systems deliver the ultimate virtual preview of paradise.

  **🔗 [Explore Live Resort Website](https://atellabeachresort.netlify.app/)**

  [![React](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=61DAFB&style=flat-square)](https://react.dev/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev/)
  [![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase&logoColor=white&style=flat-square)](https://supabase.com/)
  [![Netlify](https://img.shields.io/badge/Netlify-Hosted-00C7B7?logo=netlify&logoColor=white&style=flat-square)](https://www.netlify.com/)
  [![License](https://img.shields.io/badge/License-MIT-brightgreen?style=flat-square)](#-license)

</div>

---

## 📖 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Libraries](#️-tech-stack--libraries)
- [📸 Preview & Screenshots](#-preview--screenshots)
- [📂 Project Architecture & Structure](#-project-architecture--structure)
- [🚀 Local Setup & Installation](#-local-setup--installation)
- [💼 Production Build & Deployment](#-production-build--deployment)
- [🎯 Project Goals](#-project-goals)
- [👨‍💻 Author & Contributions](#-author--contributions)
- [📄 License](#-license)

---

## ✨ Key Features

- **🏨 Multi-Page Luxury Experience**: Seamless, SPA routing powered by **React Router DOM v7** that loads pages instantly with elegant exit-and-entry transitions.
- **🛎️ Live Supabase Reservation System**: Guests can easily book rooms, select dates, request specific services, and submit inquiries directly through a high-performance **Supabase** backend.
- **📊 Interactive Admin Dashboard**: An administrative portal (`/admin`) to view, manage, and verify incoming reservations, track booking statistics, and communicate with guests.
- **👑 Premium VIP Lounge**: An exclusive VIP membership page (`/vip`) showcasing unique high-end membership tiers and resort perks.
- **🕊️ Fluid Scroll & Motion Engine**: Integrates **Lenis** smooth scroll physics and **Framer Motion** for micro-interactions, fade-ins, and scroll-linked animations.
- **🍽️ Gourmet Beachfront Dining**: A curated dining section and full-screen digital menu (`/menu`) displaying exquisite resort meals and beachside mixology.
- **🖼️ Lightbox Photo & Video Gallery**: A gorgeous media gallery page (`/gallery`) showcasing the pristine sands, overwater villas, and activities with high-definition media viewers.
- **📱 Responsive Mobile-First Design**: Meticulously designed with custom utilities in **Tailwind CSS v4** to ensure stunning visual clarity across desktops, ultra-wide monitors, tablets, and smartphones.

---

## 🛠️ Tech Stack & Libraries

Atella Beach Resort is engineered with a cutting-edge front-end stack and serverless database architecture:

* **Core Library**: [React 19](https://react.dev/) — Component-driven development with the latest React APIs.
* **Build System**: [Vite 8](https://vite.dev/) — Lightning-fast Hot Module Replacement (HMR) and optimized assets building.
* **Styling & Framework**: [Tailwind CSS v4](https://tailwindcss.com/) — Next-generation engine with native CSS variable themes and lightning-fast compilation.
* **Smooth Scrolling**: [Lenis Scroll](https://lenis.darkroom.engineering/) — Elegant, low-latency scrolling physics for premium UX.
* **Animations**: [Framer Motion 12](https://www.framer.com/motion/) — Fluid layout animations, transitions, and hover effects.
* **Navigation Routing**: [React Router DOM v7](https://reactrouter.com/) — Client-side routing for seamless page-to-page navigation.
* **Backend Database**: [Supabase JS](https://supabase.com/) — Real-time PostgreSQL database handling reservation tables and contact inquiries.
* **Carousels & Sliders**: [Swiper 12](https://swiperjs.com/) — High-performance touch sliders for rooms, reviews, and event sections.
* **Utility Libraries**:
  * [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) — Modern, clean iconography.
  * [React Fast Marquee](https://www.react-fast-marquee.com/) — Smooth horizontal infinite loops.
  * [React Intersection Observer](https://github.com/thewebsandbox/react-intersection-observer) — Viewport tracking for scroll-triggered visual effects.

---

## 📸 Preview & Screenshots

| Home Page / Hero | Interactive Dining |
|---|---|
| ![Atella Beach Resort](https://atellabeachresort.netlify.app/images/hero.jpg) | ![Menu Preview](https://atellabeachresort.netlify.app/images/preview2.jpg) |

*(For a live interactive demo of the animations and admin interface, visit: [atellabeachresort.netlify.app](https://atellabeachresort.netlify.app/))*

---

## 📂 Project Architecture & Structure

```yaml
Atella/
├── public/                 # Static assets, logos, and raw imagery
├── src/
│   ├── animations/         # Custom Framer Motion presets and spring-physics configs
│   ├── assets/             # Local images, brand illustrations, and visual elements
│   ├── components/         # Reusable global UI blocks
│   │   ├── Button.jsx            # Elegant gold-gradient custom buttons
│   │   ├── FloatingActions.jsx   # Interactive bottom actions panel
│   │   ├── Loader.jsx            # Premium pre-loader animation
│   │   ├── Navbar.jsx            # Transparent-to-blur premium header navigation
│   │   ├── NotificationCard.jsx  # Rich booking success & alert notices
│   │   ├── PageTransition.jsx    # Smooth route overlay transition wrappers
│   │   └── Whatsapp.jsx          # Instant direct messaging action button
│   ├── hooks/              # Custom reusable React hooks
│   ├── layouts/            # Page structures and responsive shell grids
│   ├── lib/
│   │   └── supabase.js     # Supabase DB client initializer
│   ├── pages/              # Main route views & SPA routes
│   │   ├── Home.jsx              # Landings, overviews, and hero sections
│   │   ├── AboutPage.jsx         # Full-width brand history and history of the resort
│   │   ├── EventsPage.jsx        # Public resort events schedules
│   │   ├── PrivateEventsPage.jsx # Exclusive bookings for retreats/weddings
│   │   ├── GalleryPage.jsx       # Interactive Media & Photo Lightbox Grid
│   │   ├── MenuPage.jsx          # Gourmet restaurant digital dining menu
│   │   ├── ReservationsPage.jsx  # Interactive Supabase-backed reservation booking form
│   │   ├── VipPage.jsx           # Elite tier VIP packages
│   │   ├── ContactPage.jsx       # Inquiries, resort location map & feedback
│   │   └── AdminPage.jsx         # Secure Admin Dashboard panel for booking management
│   ├── sections/           # High-fidelity section sections used across pages
│   │   ├── About.jsx             # Resort intro section
│   │   ├── Contact.jsx           # Contact form modules
│   │   ├── Events.jsx            # Featured activities slide
│   │   ├── Footer.jsx            # Sophisticated multi-link elegant footer
│   │   ├── Gallery.jsx           # Quick grid highlights
│   │   ├── Hero.jsx              # Immersive coastal full-screen viewport hero
│   │   ├── Menu.jsx              # Gourmet food highlights
│   │   ├── Reservation.jsx       # Quick booking card
│   │   └── Stats.jsx             # Animated key-performance figures
│   ├── App.css             # Component-level styling overrides
│   ├── App.jsx             # React Router v7 routes layout structure
│   ├── index.css           # Tailwind CSS directives & global visual standards
│   └── main.jsx            # React root container mounting script
├── index.html              # Core HTML structure shell
├── vite.config.js          # Vite custom config & Tailwind v4 plugin integration
├── netlify.toml            # Netlify SPA redirect rules configuration
└── package.json            # NPM dependencies, metadata, and execution commands
```

---

## 🚀 Local Setup & Installation

Follow these quick steps to set up the Atella Beach Resort codebase locally on your environment:

### 1. Prerequisites
Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (Version 18.x or above recommended)
* A package manager (NPM comes pre-bundled with Node)
* Git installed

### 2. Clone the Repository
```bash
# Clone the repository
git clone https://github.com/AmirZaid11/Atella.git

# Navigate to project directory
cd Atella
```

### 3. Install Dependencies
Installs all standard project dependencies, Tailwind CSS v4 integrations, and React Router libraries:
```bash
npm install
```

### 4. Run Development Server
Spins up the local Vite hot-reloading dev server:
```bash
npm run dev
```
Once started, navigate your browser to the local URL (usually `http://localhost:5173`) to view the application live!

---

## 💼 Production Build & Deployment

### Build the Application
Generate a highly-optimized, minified bundle of assets in the `/dist` directory, fully optimized for loading speed and performance:
```bash
npm run build
```

### Deployment Configuration
The repository includes a `netlify.toml` file pre-configured to ensure single-page application (SPA) paths route perfectly on Netlify servers:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

To deploy, simply link your GitHub repository to your **Netlify** or **Vercel** dashboard, and set the build settings as follows:
* **Build Command**: `npm run build`
* **Publish Directory**: `dist`

---

## 🎯 Project Goals

- **Immersive Luxury**: Emulate a 5-star beachfront hospitality experience digitally.
- **Dynamic Interaction**: Provide guests with effortless reservation tools with instant UI responses.
- **Flawless Design**: Leverage Tailwind CSS v4 and modern CSS aesthetics to maintain absolute visual harmony on any screen resolution.
- **Performance & Smoothness**: Use modern React patterns and light-weight libraries to maintain 60 FPS scrolling and quick loads.

---

## 👨‍💻 Author & Contributions

**Amir Zaid**

* **GitHub**: [@AmirZaid11](https://github.com/AmirZaid11)
* **Live Resort Site**: [Atella Beach Resort](https://atellabeachresort.netlify.app/)

Feel free to open issues or pull requests to enhance the luxury experience of Atella Beach Resort!

---

## 📄 License

This project is licensed under the MIT License - see your local repository details for info. Made for showcase, presentation, and premium portfolio demonstration.

---

<div align="center">

  ⭐ **If you appreciate this luxurious design, please give it a star on GitHub!** ⭐

</div>
