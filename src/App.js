import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-yellow-500 text-dark hover:bg-yellow-400' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/cv" element={<CV darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
