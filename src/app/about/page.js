"use client";
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar2';
import { Star, Globe, Users, BookOpen } from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <Navbar />

    { /* Hero Section */}
        <section className="py-16 pt-36 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gradient mb-6 animate-fadeIn">
          About Us
            </h1>
            <p className="text-lg tracking-wide text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-1s">
          Astrosphere is more than just an astrology platform. We are a bridge between ancient cosmic wisdom and modern digital exploration, 
          empowering individuals to understand themselves and their potential through personalized astrological insights.
            </p>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold text-slate-100 mb-6">
            Our Cosmic Mission
          </h2>
          <p className="text-slate-300 tracking-wide leading-relaxed space-y-4 mb-6">
            We believe that astrology is a powerful tool for self-discovery and personal growth. Our platform combines sophisticated technology 
            with time-honored astrological practices to provide meaningful, personalized guidance.
          </p>
          <div className='pt-2 space-y-2'>
          <div className="flex items-center space-x-3 mt-4">
            <Star className="text-emerald-400 w-6 h-6" />
            <span className="text-slate-300 tracking-wide">Personalized Insights</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="text-cyan-400 w-6 h-6" />
            <span className="text-slate-300 tracking-wide">Global Perspective</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="text-emerald-300 w-6 h-6" />
            <span className="text-slate-300 tracking-wide">Community-Driven Learning</span>
          </div>
          </div>
            </div>
            <div className="order-1 md:order-2">
          <div className="rounded-xl overflow-hidden shadow-lg glass-effect border border-slate-800/80">
            <img
              src="https://images.unsplash.com/photo-1622267109998-2bf9ebcccac6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFzdHJvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Astrosphere Platform"
              className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl tracking-wide font-bold text-center text-gradient mb-12">
            Our Comprehensive Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-neutral-600 mb-4" />,
                title: "Personalized Horoscopes",
                description: "Tailored daily, weekly, and monthly insights that resonate with your unique astrological profile.",
                placeholder: "/api/placeholder/400/300"
              },
              {
                icon: <Users className="w-12 h-12 text-neutral-600 mb-4" />,
                title: "Relationship Compatibility",
                description: "Deep dive into interpersonal dynamics and potential synergies between zodiac signs.",
                placeholder: "/api/placeholder/400/300"
              },
              {
                icon: <Globe className="w-12 h-12 text-neutral-600 mb-4" />,
                title: "Cosmic Learning",
                description: "Comprehensive resources and expert articles to expand your astrological knowledge.",
                placeholder: "/api/placeholder/400/300"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="glass-effect p-6 rounded-xl tracking-wide shadow-md hover:shadow-lg transition-shadow border border-slate-800/80"
              >
                {service.icon}
                <h3 className="text-xl font-semibold tracking-wide text-slate-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 tracking-wide">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-wide text-gradient mb-6">
            Our Transformative Vision
          </h2>
          <p className="text-lg text-slate-300 tracking-wide leading-relaxed mb-8">
            We envision a world where individuals are empowered by cosmic understanding, 
            using astrological insights as a tool for personal growth, self-reflection, 
            and meaningful life navigation.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto glass-effect border border-slate-800/80">
            <img
              src= 'https://images.unsplash.com/photo-1640091777650-5706c3180d72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHpvZGlhYyUyMHNpZ25zfGVufDB8fDB8fHww'
              alt="Astrosphere Vision"
              className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;