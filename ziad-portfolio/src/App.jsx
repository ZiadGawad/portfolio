import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
    </>
  )
}

export default App
