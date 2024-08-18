import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Expertise from "./sections/Expertise";
import Contact from "./sections/Contact";
import './styles/main.css';
import {useEffect} from "react";

const App = () => {

    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY + window.scrollY}px`;
        })

    }, []);


  return (
    <div className="App">
      <div className="cursor"></div>
      <Navbar/>
      <Home/>
      <Expertise/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
