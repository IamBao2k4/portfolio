import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Mail, Facebook } from 'lucide-react';

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'CV', path: '/cv' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/IamBao2k4', label: 'GitHub' },
    { icon: Mail, href: 'mailto:pmgbao2004@gmail.com', label: 'Email' },
    { icon: Facebook, href: 'https://www.facebook.com/bao.phanminhgia.54', label: 'Facebook' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${darkMode
        ? 'bg-dark-secondary/95 backdrop-blur-sm border-b border-gray-700'
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              
            </div> */}
            <img src="/assets/ME.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />            <span className="font-bold text-xl text-primary">Gia Bảo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : darkMode
                      ? 'text-gray-300 hover:text-primary hover:bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-200 ${darkMode
                    ? 'text-gray-400 hover:text-primary hover:bg-primary/10'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                  }`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-dark-secondary' : 'bg-white'
          } border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : darkMode
                      ? 'text-gray-300 hover:text-primary hover:bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-200 ${darkMode
                      ? 'text-gray-400 hover:text-primary hover:bg-primary/10'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                    }`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
