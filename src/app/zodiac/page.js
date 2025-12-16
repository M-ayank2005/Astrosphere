'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Sparkles, Heart, Briefcase, Activity, Star } from 'lucide-react';

const ZodiacSigns = () => {
  const [selectedSign, setSelectedSign] = useState(null);

  const zodiacData = [
    {
      name: 'Aries',
      symbol: '♈',
      dateRange: 'March 21 - April 19',
      element: 'Fire',
      rulingPlanet: 'Mars',
      color: '#FF6B6B',
      traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
      description: 'Aries are natural-born leaders with a fiery spirit and boundless energy. They charge forward with courage and determination, always ready to take on new challenges.',
      strengths: 'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
      weaknesses: 'Impatient, moody, short-tempered, impulsive, aggressive',
      compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      luckyNumbers: [1, 8, 17],
      luckyColors: ['Red', 'Scarlet'],
      image: '/zodiac/aries.png'
    },
    {
      name: 'Taurus',
      symbol: '♉',
      dateRange: 'April 20 - May 20',
      element: 'Earth',
      rulingPlanet: 'Venus',
      color: '#4ECDC4',
      traits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stable'],
      description: 'Taurus individuals are grounded, reliable, and devoted. They appreciate beauty, comfort, and the finer things in life while maintaining a practical approach.',
      strengths: 'Reliable, patient, practical, devoted, responsible, stable',
      weaknesses: 'Stubborn, possessive, uncompromising',
      compatibility: ['Cancer', 'Virgo', 'Capricorn', 'Pisces'],
      luckyNumbers: [2, 6, 9, 12, 24],
      luckyColors: ['Green', 'Pink'],
      image: '/zodiac/taurus.png'
    },
    {
      name: 'Gemini',
      symbol: '♊',
      dateRange: 'May 21 - June 20',
      element: 'Air',
      rulingPlanet: 'Mercury',
      color: '#FFE66D',
      traits: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Quick-learner', 'Witty'],
      description: 'Gemini are social butterflies with quick wit and endless curiosity. They thrive on communication and mental stimulation.',
      strengths: 'Gentle, affectionate, curious, adaptable, ability to learn quickly',
      weaknesses: 'Nervous, inconsistent, indecisive',
      compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      luckyNumbers: [5, 7, 14, 23],
      luckyColors: ['Yellow', 'Light Green'],
      image: '/zodiac/gemini.png'
    },
    {
      name: 'Cancer',
      symbol: '♋',
      dateRange: 'June 21 - July 22',
      element: 'Water',
      rulingPlanet: 'Moon',
      color: '#A8E6CF',
      traits: ['Tenacious', 'Loyal', 'Emotional', 'Sympathetic', 'Persuasive'],
      description: 'Cancer individuals are deeply intuitive and sentimental. They value home, family, and emotional security above all.',
      strengths: 'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive',
      weaknesses: 'Moody, pessimistic, suspicious, manipulative, insecure',
      compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      luckyNumbers: [2, 3, 15, 20],
      luckyColors: ['White', 'Silver'],
      image: '/zodiac/cancer.png'
    },
    {
      name: 'Leo',
      symbol: '♌',
      dateRange: 'July 23 - August 22',
      element: 'Fire',
      rulingPlanet: 'Sun',
      color: '#FFD93D',
      traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous'],
      description: 'Leo are natural performers who love being in the spotlight. They are generous, warm-hearted, and fiercely loyal to their loved ones.',
      strengths: 'Creative, passionate, generous, warm-hearted, cheerful, humorous',
      weaknesses: 'Arrogant, stubborn, self-centered, lazy, inflexible',
      compatibility: ['Aries', 'Gemini', 'Libra', 'Sagittarius'],
      luckyNumbers: [1, 3, 10, 19],
      luckyColors: ['Gold', 'Yellow', 'Orange'],
      image: '/zodiac/leo.png'
    },
    {
      name: 'Virgo',
      symbol: '♍',
      dateRange: 'August 23 - September 22',
      element: 'Earth',
      rulingPlanet: 'Mercury',
      color: '#95E1D3',
      traits: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
      description: 'Virgo individuals are analytical perfectionists with a keen eye for detail. They are practical, methodical, and devoted to helping others.',
      strengths: 'Loyal, analytical, kind, hardworking, practical',
      weaknesses: 'Shyness, worry, overly critical, perfectionist',
      compatibility: ['Taurus', 'Cancer', 'Scorpio', 'Capricorn'],
      luckyNumbers: [5, 14, 15, 23, 32],
      luckyColors: ['Grey', 'Beige', 'Pale-Yellow'],
      image: '/zodiac/virgo.png'
    },
    {
      name: 'Libra',
      symbol: '♎',
      dateRange: 'September 23 - October 22',
      element: 'Air',
      rulingPlanet: 'Venus',
      color: '#F38181',
      traits: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
      description: 'Libra are the diplomats of the zodiac, always seeking balance and harmony. They appreciate beauty, art, and meaningful connections.',
      strengths: 'Cooperative, diplomatic, gracious, fair-minded, social',
      weaknesses: 'Indecisive, avoids confrontations, self-pity',
      compatibility: ['Gemini', 'Leo', 'Sagittarius', 'Aquarius'],
      luckyNumbers: [4, 6, 13, 15, 24],
      luckyColors: ['Pink', 'Green'],
      image: '/zodiac/libra.png'
    },
    {
      name: 'Scorpio',
      symbol: '♏',
      dateRange: 'October 23 - November 21',
      element: 'Water',
      rulingPlanet: 'Pluto',
      color: '#AA96DA',
      traits: ['Resourceful', 'Brave', 'Passionate', 'Stubborn', 'A true friend'],
      description: 'Scorpio are intense, passionate, and deeply emotional. They possess remarkable determination and can transform themselves through life challenges.',
      strengths: 'Resourceful, brave, passionate, stubborn, a true friend',
      weaknesses: 'Distrusting, jealous, secretive, violent',
      compatibility: ['Cancer', 'Virgo', 'Capricorn', 'Pisces'],
      luckyNumbers: [8, 11, 18, 22],
      luckyColors: ['Deep Red', 'Black'],
      image: '/zodiac/scorpio.png'
    },
    {
      name: 'Sagittarius',
      symbol: '♐',
      dateRange: 'November 22 - December 21',
      element: 'Fire',
      rulingPlanet: 'Jupiter',
      color: '#FCBAD3',
      traits: ['Generous', 'Idealistic', 'Great sense of humor'],
      description: 'Sagittarius are adventurous philosophers with an insatiable thirst for knowledge and new experiences. They are optimistic, freedom-loving, and honest.',
      strengths: 'Generous, idealistic, great sense of humor',
      weaknesses: 'Promises more than can deliver, impatient, tactless',
      compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      luckyNumbers: [3, 7, 9, 12, 21],
      luckyColors: ['Blue', 'Purple'],
      image: '/zodiac/sagittarius.png'
    },
    {
      name: 'Capricorn',
      symbol: '♑',
      dateRange: 'December 22 - January 19',
      element: 'Earth',
      rulingPlanet: 'Saturn',
      color: '#6C5CE7',
      traits: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
      description: 'Capricorn are ambitious and disciplined individuals who value tradition and responsibility. They are masters of self-control with remarkable perseverance.',
      strengths: 'Responsible, disciplined, self-control, good managers',
      weaknesses: 'Know-it-all, unforgiving, condescending, pessimistic',
      compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      luckyNumbers: [4, 8, 13, 22],
      luckyColors: ['Brown', 'Black'],
      image: '/zodiac/capricorn.png'
    },
    {
      name: 'Aquarius',
      symbol: '♒',
      dateRange: 'January 20 - February 18',
      element: 'Air',
      rulingPlanet: 'Uranus',
      color: '#00D2FF',
      traits: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
      description: 'Aquarius are visionary innovators who march to the beat of their own drum. They are intellectual, independent, and deeply humanitarian.',
      strengths: 'Progressive, original, independent, humanitarian',
      weaknesses: 'Runs from emotional expression, temperamental, uncompromising',
      compatibility: ['Aries', 'Gemini', 'Libra', 'Sagittarius'],
      luckyNumbers: [4, 7, 11, 22, 29],
      luckyColors: ['Light-Blue', 'Silver'],
      image: '/zodiac/aquarius.png'
    },
    {
      name: 'Pisces',
      symbol: '♓',
      dateRange: 'February 19 - March 20',
      element: 'Water',
      rulingPlanet: 'Neptune',
      color: '#A8E6CF',
      traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Musical'],
      description: 'Pisces are dreamy, empathetic souls with deep emotional intelligence. They are creative, compassionate, and spiritually aware.',
      strengths: 'Compassionate, artistic, intuitive, gentle, wise, musical',
      weaknesses: 'Fearful, overly trusting, desire to escape reality',
      compatibility: ['Taurus', 'Cancer', 'Scorpio', 'Capricorn'],
      luckyNumbers: [3, 9, 12, 15, 18, 24],
      luckyColors: ['Mauve', 'Lilac', 'Purple', 'Violet', 'Sea green'],
      image: '/zodiac/pisces.png'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Zodiac Signs
            </h1>
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover the unique characteristics, traits, and cosmic influences of all 12 zodiac signs
          </p>
        </div>
      </section>

      {/* Zodiac Grid */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zodiacData.map((sign, index) => (
              <div
                key={index}
                className="zodiac-card cursor-pointer group"
                onClick={() => setSelectedSign(sign)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: sign.color }}>
                      {sign.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{sign.dateRange}</p>
                  </div>
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                    {sign.symbol}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Element:</span>
                    <span className="font-semibold" style={{ color: sign.color }}>{sign.element}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Ruling Planet:</span>
                    <span className="font-semibold">{sign.rulingPlanet}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-300 text-sm line-clamp-3">
                  {sign.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {sign.traits.slice(0, 3).map((trait, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold glass-effect"
                      style={{ borderColor: sign.color }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <button className="text-sm font-semibold hover:underline" style={{ color: sign.color }}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Sign */}
      {selectedSign && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSign(null)}
        >
          <div
            className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-7xl">{selectedSign.symbol}</span>
                <div>
                  <h2 className="text-4xl font-bold" style={{ color: selectedSign.color }}>
                    {selectedSign.name}
                  </h2>
                  <p className="text-gray-400">{selectedSign.dateRange}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSign(null)}
                className="text-3xl hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5" style={{ color: selectedSign.color }} />
                  Element
                </h3>
                <p className="text-2xl font-bold" style={{ color: selectedSign.color }}>
                  {selectedSign.element}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-2">Ruling Planet</h3>
                <p className="text-2xl font-bold" style={{ color: selectedSign.color }}>
                  {selectedSign.rulingPlanet}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: selectedSign.color }}>
                  About {selectedSign.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedSign.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-4">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-400" />
                    Strengths
                  </h3>
                  <p className="text-gray-300">{selectedSign.strengths}</p>
                </div>
                <div className="glass-effect rounded-xl p-4">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-400" />
                    Weaknesses
                  </h3>
                  <p className="text-gray-300">{selectedSign.weaknesses}</p>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Best Compatibility
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSign.compatibility.map((sign, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full font-semibold glass-effect"
                      style={{ borderColor: selectedSign.color }}
                    >
                      {sign}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-4">
                  <h3 className="text-xl font-semibold mb-3">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {selectedSign.luckyNumbers.map((num, i) => (
                      <span
                        key={i}
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                        style={{ backgroundColor: selectedSign.color }}
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-effect rounded-xl p-4">
                  <h3 className="text-xl font-semibold mb-3">Lucky Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSign.luckyColors.map((color, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full font-semibold glass-effect"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSign.traits.map((trait, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full font-semibold glass-effect"
                      style={{ borderColor: selectedSign.color }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ZodiacSigns;
