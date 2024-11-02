import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AboutMe from './components/AboutMe';
import Clinic from './components/Clinic';
import Footer from './components/Footer';
import "./index.css"

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Testimonials />
      <AboutMe />
      <Clinic />
      <Footer />
    </div>
  );
}

export default App;
