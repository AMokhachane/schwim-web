import React from 'react';

export default function Navbar({ activeSection, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Our Team' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // 1. If function exists to update state, trigger it
    if (setCurrentPage) {
      setCurrentPage(id);
    }

    // 2. Smoothly scroll to the target element on the page
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a 
          href="#home" 
          className="brand-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <div className="logo-container">
            <img src="/logo.jpg" alt="Schwim Attorneys Logo" className="logo-img" />
          </div>
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={(activeSection || 'home') === item.id ? 'nav-link active' : 'nav-link'}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}