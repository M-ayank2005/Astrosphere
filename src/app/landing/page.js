'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Corousal from '@/components/corousal';
import Image from 'next/image';
import Images from '@/components/Images';
import { 
  Star, 
  Moon, 
  Sun, 
  Rocket, 
  Telescope, 
  Globe, 
  BookOpen, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

function Page() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Star className="w-12 h-12 text-emerald-500" />,
      title: "Personalized Horoscopes",
      description: "Dive deep into daily, weekly, and monthly insights tailored specifically to your unique zodiac profile.",
      details: "Our advanced astrological algorithms provide nuanced, personalized guidance that goes beyond generic predictions."
    },
    {
      icon: <Moon className="w-12 h-12 text-indigo-500" />,
      title: "Relationship Compatibility",
      description: "Unlock the secrets of cosmic connections and understand your interpersonal dynamics.",
      details: "Explore in-depth compatibility analysis across personal, professional, and romantic relationships."
    },
    {
      icon: <Sun className="w-12 h-12 text-amber-500" />,
      title: "Cosmic Learning",
      description: "Expand your astrological knowledge with expert-curated articles and insights.",
      details: "From planetary movements to zodiac deep dives, enhance your understanding of celestial wisdom."
    }
  ];

  const celestialFeatures = [
    {
      icon: <Telescope className="w-12 h-12 text-emerald-500" />,
      title: "Advanced Cosmic Mapping",
      description: "Detailed planetary positioning and its impact on your life journey."
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-500" />,
      title: "Global Astrological Insights",
      description: "Connect with cosmic trends affecting different regions and cultures."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-amber-500" />,
      title: "Comprehensive Learning Hub",
      description: "In-depth courses and resources for astrology enthusiasts."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-80" />
        
        <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Rocket className="w-12 h-12 text-yellow-400 animate-pulse" />
              <span className="text-lg text-gray-300">Your Cosmic Journey Begins</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gray-300">
              Explore Your Celestial Potential
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Unravel the mysteries of the universe through personalized astrological insights. 
              Discover how celestial movements shape your life, destiny, and personal growth.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="/loginPage"
                className="px-8 py-4 bg-emerald-600 rounded-full text-white font-semibold hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="px-8 py-4 border-2 border-white/30 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right Carousel */}
          <div className="hidden md:block">
            <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              <Corousal />
            </div>
          </div>
        </div>
      </section>

      {/* Celestial Insights Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-800">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Carousel Column */}
          <div className="hidden md:block">
            <div className="bg-slate-700 rounded-2xl shadow-2xl overflow-hidden">
              <Images/>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">
              Celestial Insights Await
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Dive into a world where cosmic wisdom meets personal discovery. 
              Our advanced platform provides comprehensive astrological insights 
              that go beyond traditional horoscopes.
            </p>
            
            <div className="space-y-6">
              {celestialFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  {feature.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore More Insights</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Additional sections remain the same as in the previous implementation */}
      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-20 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">
            Unleash Your Cosmic Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-8 rounded-xl shadow-2xl hover:scale-105 transition-transform group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-emerald-400">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {feature.description}
                </p>
                {activeFeature === index && (
                  <p className="text-sm text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {feature.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black-500 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg">
            <p>
              "Astrosphere helped me understand my strengths and challenges through astrology. Highly recommended!"
            </p>
            <h4 className="mt-4 font-bold">- Sarah M.</h4>
          </div>
          <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg">
            <p>
              "The compatibility insights have been spot-on. My partner and I have grown closer than ever."
            </p>
            <h4 className="mt-4 font-bold">- John D.</h4>
          </div>
          <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg">
            <p>
              "The daily horoscopes are my favorite part of the day. It's like a guiding star for me!"
            </p>
            <h4 className="mt-4 font-bold">- Emma R.</h4>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 bg-gray-700 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Astrosphere Today</h2>
        <p className="text-lg mb-8">
          Start your journey into the cosmos and discover the wisdom of the stars.
        </p>
        <a
          href="/loginPage"
          className="px-8 py-4 bg-purple-600 rounded-lg text-white text-lg hover:bg-purple-700 transition"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Page;