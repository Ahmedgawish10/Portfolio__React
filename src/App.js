import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import ScaleLoader from "react-spinners/ScaleLoader";


function App() {
  const [loading,setloading]=useState(false);
  //if there is no value in local storage return "light" in use state!
  const gettheme=()=> localStorage.getItem("mode") || "light";
  // git value from gettheme() and put it in usestate!
  const [theme, settheme] = useState(gettheme())
//give light theme for localstorage for first time onlay!
  localStorage.setItem("mode",theme)
//change value of usestate and set to local storage
const toggletheme=()=>{
  theme=="light"?settheme("dark"):settheme("light")
  localStorage.setItem("mode",theme)
}
 useEffect(()=>{
  if(localStorage.getItem("mode") ){
    document.body.className=localStorage.getItem("mode")  
  }},[theme])
// useEffect(()=>{
//       setloading(true);
//       setTimeout(()=>{
//       setloading(false)
//       },1000)
      
//           },[])
  return (
    <>
    {loading ?
    <ScaleLoader 
       className='icon-loading'
        color={"#FFB800"}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:
    <>
    <Header theme={theme} toggletheme={toggletheme}/>
    <main className="main ">      
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Qualification/>
    <Testimonials/>
    <Contact/>
    </main>
    <Footer/>
    <Scrollup/></>
    
    }
      
    </>
  );
}

export default App;
