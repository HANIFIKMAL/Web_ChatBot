import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const injectScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    injectScript('https://cdn.botpress.cloud/webchat/v2.2/inject.js');
    injectScript('https://files.bpcontent.cloud/2024/11/27/15/20241127155148-YS20UDD3.js');
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
