import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

// Lazy-load components
const Home = React.lazy(() => import("./components/home/Home"));
const About = React.lazy(() => import("./components/about/About"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Services = React.lazy(() => import("./components/Services/Services"));
const Portfolio = React.lazy(() => import("./components/portfolio/Portfolio"));
const Qualification = React.lazy(() =>
  import("./components/qualification/Qualification")
);
const Testimonials = React.lazy(() =>
  import("./components/testimonials/Testimonials")
);
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Test = React.lazy(() => import("./components/animation/Test"));

function App() {
  const [loading, setLoading] = useState(false);

  // Theme mode
  const getInitialTheme = () => localStorage.getItem("mode") || "light";
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("mode", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <ScaleLoader
          className="icon-loading"
          color={"#FFB800"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <Suspense
            fallback={
              <div className="loading-fallback h-[100vh] w-full flex items-center justify-center">
                <ScaleLoader color={"#FFB800"} />
              </div>
            }
          >
            <Header theme={theme} toggletheme={toggleTheme} />
            <main className="main">
              <Home />
              <About />
              <Skills />
              <Services />
              <Portfolio />
              <Qualification />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
            <Scrollup />
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
