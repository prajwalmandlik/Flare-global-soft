import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from "./components/services/Services";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
