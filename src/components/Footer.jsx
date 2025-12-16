import React from 'react';
import { Twitter, Facebook, Youtube, Linkedin, Github, Mail, MapPin, Phone, Star } from 'lucide-react';

const footerData = {
  columns: [
    {
      title: 'Astrology',
      icon: '✨',
      links: [
        { text: 'Zodiac Signs', href: '/zodiac' },
        { text: 'Daily Horoscope', href: '/horoscope' },
        { text: 'Birth Chart', href: '/birthchart' },
        { text: 'Moon Phases', href: '/moonphases' },
      ],
    },
    {
      title: 'Cosmic Knowledge',
      icon: '🌌',
      links: [
        { text: 'Planets', href: '/planets' },
        { text: 'Stars & Constellations', href: '/stars' },
        { text: 'Galaxies & Universe', href: '/universe' },
        { text: 'Learning Center', href: '/learn' },
      ],
    },
    {
      title: 'Tools & Features',
      icon: '🔮',
      links: [
        { text: 'Features', href: '/features' },
        { text: 'Love Calculator', href: '/features/lovepercent' },
        { text: 'Compatibility Checker', href: '/features/matches' },
        { text: 'Daily Quotes', href: '/features/dailyquates' },
      ],
    },
    {
      title: 'Connect',
      icon: '💫',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Astro Chat', href: '/astrochat' },
        { text: 'Explore All', href: '/explore' },
        { text: 'Profile', href: '/profile' },
      ],
    },
  ],
  socialLinks: [
    { href: 'https://x.com/ayushmxxn', icon: <Twitter size={20} />, label: 'Twitter' },
    { href: '#', icon: <Facebook size={20} />, label: 'Facebook' },
    { href: '#', icon: <Youtube size={20} />, label: 'YouTube' },
    { href: '#', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { href: 'https://github.com/ayushmxxn', icon: <Github size={20} />, label: 'GitHub' },
  ],
};

const FooterLink = ({ href, children, target, rel }) => (
  <a 
    href={href} 
    className="text-slate-400 hover:text-emerald-400 text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
    target={target} 
    rel={rel}
  >
    <span className="relative">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-green-400"></span>
    </span>
  </a>
);

const FooterColumn = ({ title, icon, links }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-lg">
      <span className="text-2xl">{icon}</span>
      {title}
    </h3>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.href}>
        {link.text}
      </FooterLink>
    ))}
  </div>
);

const Footer = () => {
  const { columns, socialLinks } = footerData;

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-emerald-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-40 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-sky-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold ">
                AstroSphere
              </h2>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Your cosmic companion for exploring the mysteries of the universe and unlocking your celestial potential.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((column, index) => (
            <FooterColumn key={index} title={column.title} icon={column.icon} links={column.links} />
          ))}
        </div>

        {/* Divider with glow effect */}
          <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-500/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-950 px-4 text-emerald-400">⭐</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} AstroSphere. Made with ✨ for cosmic explorers.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Made with love note */}
          <div className="text-sm text-slate-500 hidden lg:block">
            Powered by the stars ✨
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;