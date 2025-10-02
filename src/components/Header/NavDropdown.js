import React, { useState, useRef, useEffect, useCallback } from 'react';
import { prestationsItems } from './servicesData';

const NavDropdown = ({ onMobileClose }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    if (onMobileClose) onMobileClose();
  }, [onMobileClose]);

  useEffect(() => {
    if (!open) return;
    
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        close();
      }
    };
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, close]);

  return (
    <li className={`nav-item nav-dropdown ${open ? 'open' : ''}`} ref={menuRef}> 
      <button
        className="nav-link nav-dropdown-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        NOS PRESTATIONS
        <span className="caret" aria-hidden>▼</span>
      </button>
      
      {open && (
        <div 
          className="dropdown-panel"
          role="menu"
        >
          <ul className="dropdown-list">
            {prestationsItems.map(item => (
              <li key={item.id} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className="dropdown-link"
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;