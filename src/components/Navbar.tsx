import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Classes', path: '/classes' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm'
      } border-b border-[#ebebeb]`}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#082777] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-heading">M</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-[#082777] font-bold text-base font-heading leading-tight">CBSE Math</span>
            <span className="text-[#0aad93] font-semibold text-xs block -mt-0.5">Solution Hub</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-[#082777]'
                  : 'text-[#464646] hover:text-[#082777]'
              } link-underline`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#464646] hover:text-[#082777] hover:bg-[#f4f6f8] transition-all"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
            {searchOpen && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 top-12 w-72 bg-white rounded-xl shadow-lg border border-[#ebebeb] p-3 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="flex items-center gap-2 bg-[#f4f6f8] rounded-lg px-3 py-2">
                  <Search size={16} className="text-[#6c6c6c]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search chapters, topics..."
                    className="bg-transparent text-sm outline-none w-full placeholder:text-[#b4b4b4]"
                    autoFocus
                  />
                </div>
              </form>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#464646] hover:text-[#082777] hover:bg-[#f4f6f8] transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#ebebeb] animate-in slide-in-from-top-2 duration-200">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#d4e2ff] text-[#082777]'
                    : 'text-[#464646] hover:bg-[#f4f6f8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
