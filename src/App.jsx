import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import JoinUs from './pages/JoinUs';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;