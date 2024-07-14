import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import './modern-normalize.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Rooms from './pages/rooms/Rooms'
import Facilities from './pages/facilities/Facilties'
import AboutUs from './pages/about-us/AboutUs'
import Gallery from './pages/gallery/Gallery'
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <Router>
        <div className="App">
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
    </Router>
  )
}

export default App
