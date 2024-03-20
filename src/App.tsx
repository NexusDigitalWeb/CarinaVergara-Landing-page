import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutme/AboutMe";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "./index.css";
import ServicesPage from "./components/services/ServicesPage";
import ReviewsPage from "./components/reviews/ReviewsPage";

AOS.init();

const App = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-20 relative -z-10">
        <Home />
        <ServicesPage />
        <ReviewsPage />
        <AboutMe />
        {/* ¡TEMPORAL! */}
        <div className="h-dvh text-texts-color text-[50px] lg:text-[70px] flex items-center justify-center" id="NEW">
          Sección nueva
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
