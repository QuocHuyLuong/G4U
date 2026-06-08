import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.jpg';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide on scroll down, show on scroll up (specifically for mobile browsers)
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Click outside to close mobile drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      const headerEl = document.getElementById('site-header');
      if (headerEl && !headerEl.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Sự kiện', href: '#events' },
    { label: 'Thư viện', href: '#gallery' },
    { label: 'Các ban', href: '#departments' },
    { label: 'G4U Studio', href: '#music-room' },
    { label: 'Merchandise', href: '#merchandise' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header 
      id="site-header"
      className={`${isScrolled ? 'scrolled' : ''} ${isVisible ? '' : 'nav-hidden'}`}
    >
      <div className="container flex-between" style={{ padding: 0 }}>
        <a href="#" className="flex-center logo-container" style={{ gap: '10px', textDecoration: 'none' }}>
          <img 
            src={logo} 
            alt="CLB Guitar G4U Logo" 
            className="logo-img"
            style={{ 
              width: '38px', 
              height: '38px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '2px solid var(--color-primary)' 
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span 
              style={{ 
                fontSize: '0.62rem', 
                fontWeight: '800', 
                color: 'var(--color-secondary-light)', 
                letterSpacing: '1.8px', 
                textTransform: 'uppercase', 
                marginBottom: '1px',
                lineHeight: '1'
              }}
            >
              Câu lạc bộ
            </span>
            <span 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: '800', 
                fontSize: '1.15rem', 
                color: 'var(--color-text-title)',
                lineHeight: '1.1',
                letterSpacing: '0.2px'
              }}
            >
              Guitar <span className="gradient-text">G4U</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-only">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="nav-link-item"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="nav-cta-btn"
          >
            Liên hệ ngay
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          id="mobile-nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-title)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="mobile-only"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer mobile-only">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-link"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="nav-cta-btn" 
            style={{ width: '100%', textAlign: 'center', justifyContent: 'center', marginLeft: 0, marginTop: '8px' }}
          >
            Liên hệ ngay
          </a>
        </div>
      )}

      {/* Modern styles helper */}
      <style dangerouslySetInnerHTML={{__html: `
        #site-header {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 32px);
          max-width: 1200px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 30px -10px rgba(99, 58, 135, 0.08);
          padding: 12px 24px !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000 !important;
        }
        #site-header.scrolled {
          top: 10px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 12px 40px -10px rgba(99, 58, 135, 0.18);
          padding: 8px 24px !important;
        }
        #site-header.nav-hidden {
          transform: translate(-50%, -120px) !important;
          opacity: 0;
        }
        .nav-link-item {
          position: relative;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text-title) !important;
          padding: 8px 16px;
          border-radius: 9999px;
          text-decoration: none;
          transition: var(--transition);
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 16px;
          height: 2px;
          background: var(--color-primary);
          border-radius: 9999px;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-item:hover {
          color: var(--color-primary) !important;
          background: rgba(232, 59, 77, 0.05) !important;
        }
        .nav-link-item:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-cta-btn {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          color: #fff !important;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 10px 22px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 15px -3px rgba(232, 59, 77, 0.3);
          transition: var(--transition);
          margin-left: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .nav-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(232, 59, 77, 0.5), 0 0 0 3px rgba(232, 59, 77, 0.12);
        }
        .nav-cta-btn:active {
          transform: translateY(0);
        }
        .logo-container {
          display: flex;
          align-items: center;
          transition: var(--transition);
        }
        .logo-img {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-container:hover .logo-img {
          transform: scale(1.08) rotate(8deg);
        }
        .mobile-menu-drawer {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          left: auto;
          width: 220px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 10px 30px rgba(99, 58, 135, 0.12);
          display: flex;
          flex-direction: column;
          gap: 6px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 1001;
        }
        .mobile-link {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-title) !important;
          padding: 10px 16px;
          border-radius: 12px;
          text-decoration: none;
          background: transparent;
          border: none;
          transition: all 0.2s ease;
          display: block;
          text-align: left;
          width: 100%;
        }
        .mobile-link:hover {
          background: rgba(232, 59, 77, 0.05) !important;
          color: var(--color-primary) !important;
          padding-left: 20px !important;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block; }
          #site-header {
            top: 12px;
            width: calc(100% - 24px);
            padding: 10px 16px !important;
          }
          #site-header.scrolled {
            top: 6px;
            padding: 8px 16px !important;
          }
        }
      `}} />

    </header>
  );
}
