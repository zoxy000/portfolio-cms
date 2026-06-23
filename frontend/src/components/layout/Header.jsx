import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Cpu, MessageSquare, BookOpen } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', path: '/', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Trang chủ', path: '/home', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Dự án', path: '#projects', isHash: true, icon: <Cpu className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Liên hệ', path: '#contact', isHash: true, icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const handleNavLinkClick = (e, link) => {
    setIsOpen(false);
    if (link.isHash) {
      e.preventDefault();
      const targetId = link.path.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If not on Home page, navigate home first then scroll (can handle later)
        window.location.href = '/' + link.path;
      }
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-lg shadow-slate-950/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:from-indigo-200 group-hover:to-white transition-all">
              Dev<span className="text-indigo-400">CMS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.isHash ? (
                  <a
                    href={link.path}
                    onClick={(e) => handleNavLinkClick(e, link)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900/50 transition-all duration-200 flex items-center space-x-1.5"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                      isActive(link.path)
                        ? 'text-white bg-indigo-500/10 border border-indigo-500/20 shadow-inner shadow-indigo-500/5'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                )}
              </React.Fragment>
            ))}
            
            <span className="w-px h-6 bg-slate-800 mx-2"></span>
            
            {/* Admin Link */}
            <Link
              to="/admin"
              className="ml-2 px-4 py-2 text-xs font-semibold text-indigo-400 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/10 hover:text-white hover:border-indigo-500 transition-all duration-300 shadow-md shadow-indigo-500/5"
            >
              CMS Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/60 focus:outline-none transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-80 opacity-100 border-b border-slate-900/80 bg-slate-950/95 backdrop-blur-2xl' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {link.isHash ? (
                <a
                  href={link.path}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 flex items-center space-x-2"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium flex items-center space-x-2 ${
                    isActive(link.path)
                      ? 'bg-indigo-600/10 text-white border border-indigo-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="pt-3 px-4">
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 px-4 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
            >
              CMS Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
