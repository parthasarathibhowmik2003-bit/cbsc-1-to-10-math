import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Phone, ChevronUp, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#082777] text-white">
      <div className="container-main pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <BookOpen size={20} className="text-[#0aad93]" />
              </div>
              <div>
                <span className="font-bold text-lg font-heading">CBSE Math</span>
                <span className="text-[#0aad93] text-xs block -mt-0.5">Solution Hub</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Complete CBSE Mathematics solutions for Classes 1-10. Your trusted partner for chapter-wise answers, practice questions, and exam preparation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0aad93] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-white/80">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Class 6 Mathematics', path: '/class/6' },
                { label: 'Class 7 Mathematics', path: '/class/7' },
                { label: 'Class 8 Mathematics', path: '/class/8' },
                { label: 'Class 9 Mathematics', path: '/class/9' },
                { label: 'Class 10 Mathematics', path: '/class/10' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#0aad93] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-white/80">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Blog', path: '/blog' },
                { label: 'Privacy Policy', path: '#' },
                { label: 'Terms & Conditions', path: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#0aad93] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-white/80">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#0aad93] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">support@cbsemathsolutions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#0aad93] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#0aad93] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} CBSE Math Solution Hub. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0aad93] transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
