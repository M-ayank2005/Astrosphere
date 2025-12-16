'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { 
  Star, Moon, Sun, Sparkles, Compass, BookOpen, 
  Heart, Zap, Globe, Telescope, User, Calculator 
} from 'lucide-react';

const ExplorePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const exploreCategories = [
    {
      title: 'Zodiac Universe',
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/30',
      description: 'Explore the 12 zodiac signs and their cosmic influences',
      items: [
        { name: 'Zodiac Signs', href: '/zodiac', icon: '♈', desc: 'Discover all 12 signs' },
        { name: 'Daily Horoscope', href: '/horoscope', icon: '📅', desc: 'Your daily cosmic forecast' },
        { name: 'Compatibility', href: '/features/matches', icon: '💑', desc: 'Find your perfect match' },
      ]
    },
    {
      title: 'Cosmic Calculators',
      icon: <Calculator className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Powerful tools to unlock your cosmic blueprint',
      items: [
        { name: 'Birth Chart', href: '/birthchart', icon: '🎯', desc: 'Generate your natal chart' },
        { name: 'Love Calculator', href: '/features/lovepercent', icon: '💖', desc: 'Calculate love compatibility' },
        { name: 'Moon Phases', href: '/moonphases', icon: '🌙', desc: 'Track lunar cycles' },
      ]
    },
    {
      title: 'Celestial Knowledge',
      icon: <Telescope className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Learn about planets, stars, and the universe',
      items: [
        { name: 'Planets', href: '/planets', icon: '🪐', desc: 'Explore planetary influences' },
        { name: 'Stars & Constellations', href: '/stars', icon: '⭐', desc: 'Navigate the night sky' },
        { name: 'Galaxies', href: '/universe', icon: '🌌', desc: 'Journey through space' },
      ]
    },
    {
      title: 'Learning Hub',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      description: 'Master astrology from basics to advanced',
      items: [
        { name: 'Learning Center', href: '/learn', icon: '📚', desc: 'Comprehensive guides' },
        { name: 'Astro Chat', href: '/astrochat', icon: '💬', desc: 'AI-powered astro assistant' },
        { name: 'About', href: '/about', icon: 'ℹ️', desc: 'Learn about AstroSphere' },
      ]
    },
    {
      title: 'Personal Space',
      icon: <User className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      description: 'Your personalized astrology experience',
      items: [
        { name: 'My Astro Profile', href: '/myastro', icon: '👤', desc: 'Your personal astro data' },
        { name: 'Profile Settings', href: '/profile', icon: '⚙️', desc: 'Manage your account' },
        { name: 'Daily Quotes', href: '/features/dailyquates', icon: '💭', desc: 'Cosmic inspiration' },
      ]
    },
    {
      title: 'Fun & Games',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/30',
      description: 'Interactive tools and entertaining features',
      items: [
        { name: 'All Features', href: '/features', icon: '🎮', desc: 'Browse all tools' },
        { name: 'Yearly Forecast', href: '/features/yearlyfeedback', icon: '🎊', desc: 'Your year ahead' },
        { name: 'Custom Match', href: '/features/matches/custommatch', icon: '🎲', desc: 'Create unique matches' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-800/20 to-blue-600/20 border border-green-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Compass className="w-5 h-5 text-green-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-green-300 font-semibold">Your Cosmic Journey Awaits</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Explore the Universe
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover all the cosmic tools, knowledge, and features AstroSphere has to offer. 
            Your path to understanding the stars begins here.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { label: 'Features', value: '20+', icon: '🎯' },
              { label: 'Zodiac Signs', value: '12', icon: '♈' },
              { label: 'Planets', value: '10', icon: '🪐' },
              { label: 'Learning Guides', value: '15+', icon: '📚' },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreCategories.map((category, index) => (
              <div
                key={index}
                className={`relative group ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 overflow-hidden`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon with animation */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                  <div className="text-white">{category.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className="block group/item"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 hover:bg-slate-900/60 border border-transparent hover:border-purple-500/30 transition-all duration-300">
                        <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-white group-hover/item:text-purple-400 transition-colors duration-300">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 group-hover/item:text-gray-400 transition-colors duration-300">
                            {item.desc}
                          </div>
                        </div>
                        <Zap className="w-4 h-4 text-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-12 text-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-blue-600/5 animate-gradient"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Ready to Begin Your Journey?
              </h2>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Start exploring your cosmic destiny today. Get personalized insights, 
                track celestial events, and unlock the mysteries of the universe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/birthchart"
                  className="px-8 py-4 bg-green-700 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-red-300/50"
                >
                  Generate Birth Chart
                </a>
                <a
                  href="/horoscope"
                  className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  Read Horoscope
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExplorePage;
