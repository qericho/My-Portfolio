import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AllProjects from './Pages/AllProjects'; 
import MoreAbout from './Pages/MoreAbout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        }/>
        <Route path="/all-about" element={<MoreAbout />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
