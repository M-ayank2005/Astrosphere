'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Star, Sparkles } from 'lucide-react';

const BirthChart = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: ''
  });
  const [chartGenerated, setChartGenerated] = useState(false);
  const [birthChart, setBirthChart] = useState(null);

  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const houses = [
    '1st House - Self & Identity',
    '2nd House - Values & Possessions',
    '3rd House - Communication',
    '4th House - Home & Family',
    '5th House - Creativity & Pleasure',
    '6th House - Health & Service',
    '7th House - Partnerships',
    '8th House - Transformation',
    '9th House - Philosophy & Travel',
    '10th House - Career & Status',
    '11th House - Community & Goals',
    '12th House - Spirituality & Subconscious'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate birth chart calculation
    const date = new Date(formData.date);
    const month = date.getMonth();
    const day = date.getDate();
    
    // Simple sun sign calculation
    let sunSign = '';
    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) sunSign = 'Aries';
    else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) sunSign = 'Taurus';
    else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) sunSign = 'Gemini';
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) sunSign = 'Cancer';
    else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) sunSign = 'Leo';
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sunSign = 'Virgo';
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sunSign = 'Libra';
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) sunSign = 'Scorpio';
    else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) sunSign = 'Sagittarius';
    else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) sunSign = 'Capricorn';
    else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) sunSign = 'Aquarius';
    else sunSign = 'Pisces';

    // Generate random moon and rising signs for demo
    const moonSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
    const risingSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];

    const chart = {
      sunSign,
      moonSign,
      risingSign,
      planets: {
        Mercury: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
        Venus: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
        Mars: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
        Jupiter: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
        Saturn: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)]
      }
    };

    setBirthChart(chart);
    setChartGenerated(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-12 h-12 text-yellow-400 animate-pulse mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Birth Chart Calculator
            </h1>
            <Sparkles className="w-12 h-12 text-purple-400 animate-twinkle ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Discover your cosmic blueprint and understand the planetary positions at the moment of your birth
          </p>
        </div>
      </section>

      {/* Input Form */}
      {!chartGenerated && (
        <section className="pb-20 px-6 md:px-20">
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
                Enter Your Birth Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    Time of Birth
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">Accurate time is important for Rising Sign and House placements</p>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="City, Country"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cosmic-button py-4 text-lg font-bold"
                >
                  Generate My Birth Chart
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Birth Chart Results */}
      {chartGenerated && birthChart && (
        <section className="pb-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gradient mb-4">
                {formData.name}'s Birth Chart
              </h2>
              <p className="text-gray-300">Born on {formData.date} at {formData.time} in {formData.location}</p>
              <button
                onClick={() => setChartGenerated(false)}
                className="mt-4 px-6 py-2 glass-effect rounded-full text-sm hover:scale-105 transition-transform"
              >
                Calculate Another Chart
              </button>
            </div>

            {/* Big Three */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">☀️</div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Sun Sign</h3>
                <p className="text-4xl font-bold mb-3">{birthChart.sunSign}</p>
                <p className="text-gray-300 text-sm">Your core identity and life purpose</p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🌙</div>
                <h3 className="text-2xl font-bold mb-2 text-blue-300">Moon Sign</h3>
                <p className="text-4xl font-bold mb-3">{birthChart.moonSign}</p>
                <p className="text-gray-300 text-sm">Your emotional nature and inner self</p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">⬆️</div>
                <h3 className="text-2xl font-bold mb-2 text-purple-400">Rising Sign</h3>
                <p className="text-4xl font-bold mb-3">{birthChart.risingSign}</p>
                <p className="text-gray-300 text-sm">Your outer personality and first impression</p>
              </div>
            </div>

            {/* Planetary Positions */}
            <div className="glass-effect rounded-3xl p-8 mb-8">
              <h3 className="text-3xl font-bold mb-6 text-center text-gradient">
                Planetary Positions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(birthChart.planets).map(([planet, sign], index) => (
                  <div key={index} className="glass-effect rounded-xl p-4 flex items-center justify-between">
                    <span className="font-semibold text-lg">{planet}</span>
                    <span className="text-2xl font-bold text-purple-400">{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interpretation */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Sun in {birthChart.sunSign}</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your Sun sign represents your core essence and life purpose. As a {birthChart.sunSign}, 
                  you embody the key traits and energies of this sign, shaping your fundamental approach to life.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Moon in {birthChart.moonSign}</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your Moon sign reveals your emotional landscape and instinctual responses. With the Moon in {birthChart.moonSign}, 
                  your emotional needs and nurturing style reflect this sign's qualities.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{birthChart.risingSign} Rising</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your Rising sign (Ascendant) is how others perceive you and how you approach new situations. 
                  {birthChart.risingSign} Rising gives you a unique way of interacting with the world.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Your Unique Blend</h3>
                <p className="text-gray-300 leading-relaxed">
                  The combination of {birthChart.sunSign} Sun, {birthChart.moonSign} Moon, and {birthChart.risingSign} Rising 
                  creates your unique cosmic signature, influencing your personality, emotions, and life path.
                </p>
              </div>
            </div>

            {/* Houses Information */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-center text-gradient">
                The 12 Houses
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Each house represents different life areas where planetary energies express themselves
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {houses.map((house, index) => (
                  <div key={index} className="glass-effect rounded-xl p-4">
                    <p className="text-sm text-gray-300">{house}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Information Section */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient">
              Understanding Your Birth Chart
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Your birth chart, also known as a natal chart, is a snapshot of the sky at the exact moment you were born. 
                It shows the positions of the Sun, Moon, planets, and other celestial points in relation to the zodiac signs and houses.
              </p>
              <p>
                <strong className="text-white">The Big Three:</strong> Your Sun, Moon, and Rising signs form the foundation of your astrological identity. 
                The Sun represents your conscious self, the Moon your emotional nature, and the Rising sign your outer personality.
              </p>
              <p>
                <strong className="text-white">Planetary Positions:</strong> Each planet governs different aspects of life and personality. 
                Their placement in zodiac signs colors how these planetary energies express in your life.
              </p>
              <p>
                <strong className="text-white">Houses:</strong> The 12 houses divide the chart into life areas such as career, relationships, 
                and spirituality. Planets in different houses show where their energies are most active in your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BirthChart;
