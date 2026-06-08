import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Departments from './components/Departments';
import MusicPlayer from './components/MusicPlayer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Departments />
        <MusicPlayer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
