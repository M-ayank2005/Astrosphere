"use client";
import React from 'react';
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Heart, Users, Quote, Calendar, ArrowRight, Star, Book, Sparkles } from 'lucide-react';

function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar2 />

      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-10 pt-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl tracking-wide md:text-5xl font-bold mb-6">
            Explore Our Useful Services
          </h1>
          <p className="text-xl text-gray-300 tracking-wide mb-8 leading-relaxed">
            Dive into our comprehensive suite of astrological tools and services designed to 
            enhance your love life and personal growth.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Personalized suggestions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Daily Inspirationsal Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Book className="w-5 h-5" />
              <span>Expert Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Love Calculator Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Heart className="w-8 h-8 text-neutral-700" />
                <h2 className="text-3xl font-bold text-neutral-800">Love Percentage Calculator</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Our advanced love calculator uses astrological principles to analyze compatibility 
                between partners. Get detailed insights into:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Emotional compatibility based on moon signs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Communication harmony through Mercury positions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Long-term relationship potential analysis</span>
                </li>
              </ul>
              <a href="/features/lovepercent" 
                className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                Try Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1484678002699-0e7dc5fa52c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGxvdmUlMjBoZWFydCUyMHBhcnRuZXJzfGVufDB8fDB8fHww"
                alt="Love Calculator"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Zodiac Matches Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1574740637579-9ca0a610e491?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhcnRuZXIlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Zodiac Matches"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="w-8 h-8 text-neutral-700" />
                <h2 className="text-3xl font-bold text-neutral-800">Zodiac Partner Matches</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Discover your ideal partner matches through our comprehensive zodiac analysis 
                system. Our advanced algorithms consider:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Element compatibility (Fire, Earth, Air, Water)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Planetary alignments and their influence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Personal trait matching based on birth charts</span>
                </li>
              </ul>
              <a href="/features/matches" 
                className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                Find Matches
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Quotes Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Quote className="w-8 h-8 text-neutral-700" />
                <h2 className="text-3xl font-bold text-neutral-800">Daily Zodiac Inspiration</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Start each day with personalized astrological wisdom and motivation. 
                Our curated collection includes:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Sign-specific daily affirmations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Cosmic wisdom from renowned astrologers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Practical guidance based on planetary positions</span>
                </li>
              </ul>
              <a href="/features/dailyquates" 
                className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                Get Inspired
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1642775418318-f0ce3f912475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHFvdXRlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Zodiac Quotes"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Yearly Feedback Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1Z2dlc3Rpb24lMjBiZXR0ZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Yearly Feedback"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-8 h-8 text-neutral-700" />
                <h2 className="text-3xl font-bold text-neutral-800">Yearly Zodiac Guidance</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Plan your year ahead with comprehensive astrological insights and 
                personalized recommendations:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Monthly opportunity forecasts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Career and relationship guidance periods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-neutral-700 mt-1" />
                  <span className="text-neutral-600">Personal growth and development timelines</span>
                </li>
              </ul>
              <a href="/features/yearlyfeedback" 
                className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
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