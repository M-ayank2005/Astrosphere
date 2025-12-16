"use client";
import React from 'react';
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Heart, Users, Quote, Calendar, ArrowRight, Star, Book, Sparkles } from 'lucide-react';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar2 />

      {/* Hero Section */}
      <section className="bg-slate-950 text-slate-100 py-10 pt-24 px-6 md:px-20 star-field">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl tracking-wide md:text-6xl font-bold mb-6 text-gradient">
            Explore Our Cosmic Tools
          </h1>
          <p className="text-xl text-slate-300 tracking-wide mb-8 leading-relaxed">
            Discover our comprehensive suite of astrological tools and services designed to
            enhance your spiritual journey and personal growth.
          </p>
          <div className="flex justify-center flex-wrap gap-6 mt-8">
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-slate-700/70">
              <Star className="w-5 h-5 text-emerald-400" />
              <span>Personalized Insights</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-slate-700/70">
              <Sparkles className="w-5 h-5 text-emerald-300" />
              <span>Daily Inspiration</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-slate-700/70">
              <Book className="w-5 h-5 text-cyan-300" />
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Love Calculator Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Heart className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-slate-100">Love Percentage Calculator</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our advanced love calculator uses astrological principles to analyze compatibility
                between partners. Get detailed insights into:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Emotional compatibility based on moon signs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Communication harmony through Mercury positions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Long-term relationship potential analysis</span>
                </li>
              </ul>
              <a
                href="/features/lovepercent"
                className="cosmic-button cosmic-button--primary inline-flex items-center px-6 py-3"
              >
                Try Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg glass-effect">
              <img
                src="https://images.unsplash.com/photo-1484678002699-0e7dc5fa52c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGxvdmUlMjBoZWFydCUyMHBhcnRuZXJzfGVufDB8fDB8fHww"
                alt="Love Calculator"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Zodiac Matches Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg glass-effect">
              <img
                src="https://images.unsplash.com/photo-1574740637579-9ca0a610e491?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhcnRuZXIlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Zodiac Matches"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 glass-effect p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-slate-100">Zodiac Partner Matches</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Discover your ideal partner matches through our comprehensive zodiac analysis
                system. Our advanced algorithms consider:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Element compatibility (Fire, Earth, Air, Water)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Planetary alignments and their influence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Personal trait matching based on birth charts</span>
                </li>
              </ul>
              <a
                href="/features/matches"
                className="cosmic-button inline-flex items-center px-6 py-3"
              >
                Find Matches
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Quotes Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Quote className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-slate-100">Daily Zodiac Inspiration</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Start each day with personalized astrological wisdom and motivation.
                Our curated collection includes:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Sign-specific daily affirmations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Cosmic wisdom from renowned astrologers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Practical guidance based on planetary positions</span>
                </li>
              </ul>
              <a
                href="/features/dailyquates"
                className="cosmic-button inline-flex items-center px-6 py-3"
              >
                Get Inspired
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg glass-effect">
              <img
                src="https://images.unsplash.com/photo-1642775418318-f0ce3f912475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHFvdXRlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Zodiac Quotes"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Yearly Feedback Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg glass-effect">
              <img
                src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1Z2dlc3Rpb24lMjBiZXR0ZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Yearly Feedback"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 glass-effect p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-8 h-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-slate-100">Yearly Zodiac Guidance</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Plan your year ahead with comprehensive astrological insights and
                personalized recommendations:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Monthly opportunity forecasts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Career and relationship guidance periods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">Personal growth and development timelines</span>
                </li>
              </ul>
              <a
                href="/features/yearlyfeedback"
                className="cosmic-button inline-flex items-center px-6 py-3"
              >
                Plan Your Year
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;