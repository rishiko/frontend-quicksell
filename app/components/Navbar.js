// components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import DisplayOptions from './DisplayOptions';
// import './Navbar.css';

function Navbar({ groupBy, setGroupBy, sortBy, setSortBy }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleDisplayClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-title">Kanban Board</div>
      <div className="navbar-buttons">
        <button className="display-button" onClick={handleDisplayClick}>
          Display
        </button>
        {menuOpen && (
          <div className="display-menu" ref={menuRef}>
            <DisplayOptions
              groupBy={groupBy}
              setGroupBy={setGroupBy}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
