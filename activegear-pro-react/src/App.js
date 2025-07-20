import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './pages/products';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />

    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<><Header /><Products /></>} />
      </Routes>
    </Router>
  );
}

export default App;
