'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Calendar, Heart, Briefcase, Coins, Star, Sun, Moon } from 'lucide-react';

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState('Aries');
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', color: '#FF6B6B', dates: 'Mar 21 - Apr 19' },
    { name: 'Taurus', symbol: '♉', color: '#4ECDC4', dates: 'Apr 20 - May 20' },
    { name: 'Gemini', symbol: '♊', color: '#FFE66D', dates: 'May 21 - Jun 20' },
    { name: 'Cancer', symbol: '♋', color: '#A8E6CF', dates: 'Jun 21 - Jul 22' },
    { name: 'Leo', symbol: '♌', color: '#FFD93D', dates: 'Jul 23 - Aug 22' },
    { name: 'Virgo', symbol: '♍', color: '#95E1D3', dates: 'Aug 23 - Sep 22' },
    { name: 'Libra', symbol: '♎', color: '#F38181', dates: 'Sep 23 - Oct 22' },
    { name: 'Scorpio', symbol: '♏', color: '#AA96DA', dates: 'Oct 23 - Nov 21' },
    { name: 'Sagittarius', symbol: '♐', color: '#FCBAD3', dates: 'Nov 22 - Dec 21' },
    { name: 'Capricorn', symbol: '♑', color: '#6C5CE7', dates: 'Dec 22 - Jan 19' },
    { name: 'Aquarius', symbol: '♒', color: '#00D2FF', dates: 'Jan 20 - Feb 18' },
    { name: 'Pisces', symbol: '♓', color: '#A8E6CF', dates: 'Feb 19 - Mar 20' }
  ];

  const horoscopeData = {
    today: {
      Aries: {
        overview: 'Today brings a powerful surge of energy and motivation. Your leadership qualities shine, making it an excellent day for taking initiative in both personal and professional matters.',
        love: 'Romance is in the air! If you\'re in a relationship, plan something spontaneous with your partner. Singles might encounter someone intriguing during social activities.',
        career: 'Your innovative ideas will gain recognition at work. Don\'t hesitate to present that project you\'ve been working on. Collaboration with colleagues leads to breakthroughs.',
        money: 'Financial opportunities appear, but avoid impulsive purchases. Consider long-term investments that align with your goals.',
        health: 'High energy levels make this perfect for physical activities. Channel your enthusiasm into exercise, but don\'t overexert yourself.',
        luckyNumber: 7,
        luckyColor: 'Red'
      },
      Taurus: {
        overview: 'Stability and comfort are your themes today. Focus on creating harmony in your environment and nurturing important relationships.',
        love: 'Deep conversations strengthen bonds. Show appreciation to your loved ones through thoughtful gestures. Your patience and understanding create beautiful moments.',
        career: 'Your practical approach solves complex problems at work. Colleagues seek your advice. Stay grounded and methodical in your tasks.',
        money: 'Good day for financial planning. Review your budget and consider savings strategies. Avoid lending money to others today.',
        health: 'Focus on nutrition and self-care. Pamper yourself with activities that bring peace, like yoga or meditation.',
        luckyNumber: 6,
        luckyColor: 'Green'
      },
      Gemini: {
        overview: 'Communication flows effortlessly today. Your wit and charm attract positive attention, making it ideal for networking and social interactions.',
        love: 'Express your feelings openly. Your words have power to strengthen relationships or ignite new romantic possibilities.',
        career: 'Multitasking comes naturally. You\'ll handle various projects with ease. Networking opportunities lead to exciting prospects.',
        money: 'Diverse income sources show promise. Stay flexible with financial strategies and explore new opportunities.',
        health: 'Mental stimulation is key. Engage in activities that challenge your mind while balancing with physical exercise.',
        luckyNumber: 5,
        luckyColor: 'Yellow'
      },
      Cancer: {
        overview: 'Intuition guides you strongly today. Trust your feelings and create emotional security in all areas of your life.',
        love: 'Nurturing energy surrounds you. Family and close relationships receive your tender care. Emotional honesty deepens connections.',
        career: 'Your empathy helps navigate workplace dynamics. Team-oriented tasks flourish under your guidance.',
        money: 'Protect your resources. Conservative financial decisions serve you well. Home-related investments show promise.',
        health: 'Emotional well-being needs attention. Practice self-care rituals that comfort and restore you.',
        luckyNumber: 2,
        luckyColor: 'Silver'
      },
      Leo: {
        overview: 'Your charisma is magnetic today. Step into the spotlight and let your natural leadership shine in all endeavors.',
        love: 'Passion and romance intensify. Grand gestures win hearts. Your confidence attracts admiration from potential partners.',
        career: 'Recognition comes your way. Present your ideas boldly. Your creative solutions impress superiors and peers alike.',
        money: 'Opportunities for financial growth appear. Invest in yourself and your talents. Avoid showing off with unnecessary expenses.',
        health: 'High vitality allows for ambitious physical goals. Channel energy into activities that make you feel powerful and alive.',
        luckyNumber: 1,
        luckyColor: 'Gold'
      },
      Virgo: {
        overview: 'Attention to detail pays off today. Your analytical skills help solve problems others overlook. Organization brings clarity.',
        love: 'Show love through helpful acts. Your practical support means more than words. Focus on quality time with loved ones.',
        career: 'Precision and efficiency earn respect. Complete important tasks that require concentration. Your work ethic inspires others.',
        money: 'Budget carefully and plan ahead. Small savings accumulate into significant amounts. Avoid unnecessary subscriptions or services.',
        health: 'Maintain healthy routines. Regular exercise and balanced nutrition support your well-being. Don\'t neglect rest.',
        luckyNumber: 5,
        luckyColor: 'Navy Blue'
      },
      Libra: {
        overview: 'Balance and harmony guide your day. Diplomacy resolves conflicts, and your sense of fairness brings peace to situations.',
        love: 'Partnership energy is strong. Compromise and cooperation strengthen relationships. Singles attract partners who value equality.',
        career: 'Collaboration leads to success. Your ability to see multiple perspectives helps mediate and create win-win solutions.',
        money: 'Partnership ventures show promise. Balance spending and saving. Seek advice before major financial decisions.',
        health: 'Find equilibrium between activity and rest. Social activities boost mood while alone time restores energy.',
        luckyNumber: 6,
        luckyColor: 'Pink'
      },
      Scorpio: {
        overview: 'Intensity and transformation mark your day. Deep insights emerge, helping you understand hidden truths and motivations.',
        love: 'Passion runs deep. Meaningful connections intensify. Your magnetic presence draws others. Be open but protect your vulnerability.',
        career: 'Research and investigation skills shine. Uncover information that gives you an edge. Trust your instincts about people.',
        money: 'Opportunities for financial transformation appear. Consider investments with long-term potential. Avoid risky speculation.',
        health: 'Emotional release is healing. Physical activities that challenge you help channel intense energy productively.',
        luckyNumber: 8,
        luckyColor: 'Maroon'
      },
      Sagittarius: {
        overview: 'Adventure and expansion call to you. Broaden your horizons through learning, travel, or philosophical exploration.',
        love: 'Optimism attracts positive relationships. Share your enthusiasm with others. Freedom and honesty strengthen bonds.',
        career: 'Big-picture thinking leads to breakthroughs. Don\'t get bogged down in details. Your vision inspires the team.',
        money: 'Opportunities come from unexpected sources. Stay open-minded about income streams. Avoid overcommitting financially.',
        health: 'Outdoor activities energize you. Movement and exploration boost both physical and mental health.',
        luckyNumber: 3,
        luckyColor: 'Purple'
      },
      Capricorn: {
        overview: 'Discipline and determination drive success today. Your pragmatic approach and persistence overcome obstacles.',
        love: 'Stability in relationships matters. Show commitment through consistent actions. Build foundations for lasting connections.',
        career: 'Your professionalism stands out. Take on responsibilities that showcase your capabilities. Long-term planning yields results.',
        money: 'Conservative financial strategies work well. Focus on building wealth steadily. Consider traditional investment options.',
        health: 'Structure supports wellness. Maintain regular exercise and sleep schedules. Don\'t sacrifice health for work.',
        luckyNumber: 8,
        luckyColor: 'Black'
      },
      Aquarius: {
        overview: 'Innovation and originality flow freely. Your unique perspective brings fresh solutions to old problems.',
        love: 'Independence and connection balance today. Embrace unconventional expressions of affection. Intellectual compatibility deepens.',
        career: 'Revolutionary ideas gain traction. Technology and teamwork combine effectively. Network with like-minded professionals.',
        money: 'Unconventional income opportunities arise. Stay open to new financial models. Group investments show promise.',
        health: 'Mental stimulation is vital. Try new activities that engage both mind and body. Connect with friends for motivation.',
        luckyNumber: 4,
        luckyColor: 'Electric Blue'
      },
      Pisces: {
        overview: 'Intuition and creativity flow abundantly. Trust your dreams and imaginative insights to guide important decisions.',
        love: 'Romantic and compassionate energy surrounds you. Deep emotional connections form. Express feelings through creative means.',
        career: 'Artistic and healing talents shine. Your empathy helps others. Creative projects receive positive recognition.',
        money: 'Trust intuition about financial matters. Charitable giving brings unexpected rewards. Avoid confusion by keeping clear records.',
        health: 'Spiritual practices enhance well-being. Water-based activities, meditation, or creative expression restore energy.',
        luckyNumber: 9,
        luckyColor: 'Sea Green'
      }
    },
    weekly: {
      overview: 'This week brings opportunities for growth and transformation across all zodiac signs. Planetary alignments favor communication, relationships, and professional advancement.'
    },
    monthly: {
      overview: 'December 2025 is a powerful month for manifestation and achieving long-term goals. The cosmic energy supports new beginnings and completing important cycles.'
    }
  };

  const selectedZodiac = zodiacSigns.find(sign => sign.name === selectedSign);
  const currentHoroscope = horoscopeData[selectedPeriod][selectedSign] || {};

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sun className="w-12 h-12 text-yellow-400 animate-pulse mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-300">
              Daily Horoscope
            </h1>
            <Moon className="w-12 h-12 text-blue-300 animate-pulse ml-4" />
          </div>
          <p className="text-xl text-gray-300">{currentDate}</p>
          <p className="text-lg text-gray-400 mt-2">
            Discover what the stars have in store for you today
          </p>
        </div>
      </section>

      {/* Period Selector */}
      <section className="pb-8 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-2 flex-wrap">
            {['today', 'weekly', 'monthly'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedPeriod === period
                    ? 'bg-gradient-to-r from-green-600 to-green-700 shadow-lg scale-105'
                    : 'glass-effect hover:scale-105'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Zodiac Selector */}
      <section className="pb-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => setSelectedSign(sign.name)}
                className={`zodiac-card text-center px-1 transition-all duration-300 ${
                  selectedSign === sign.name ? 'scale-110 ring-2' : ''
                }`}
                style={{
                  ringColor: selectedSign === sign.name ? sign.color : 'transparent'
                }}
              >
                <div className="text-3xl mb-1 text-center">{sign.symbol}</div>
                <div className="text-xs font-semibold">{sign.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Horoscope Content */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Selected Sign Header */}
          <div className="glass-effect rounded-3xl p-8 mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-7xl">{selectedZodiac.symbol}</span>
              <div>
                <h2 className="text-4xl font-bold" style={{ color: selectedZodiac.color }}>
                  {selectedZodiac.name}
                </h2>
                <p className="text-gray-400">{selectedZodiac.dates}</p>
              </div>
            </div>
          </div>

          {selectedPeriod === 'today' && currentHoroscope.overview && (
            <>
              {/* Overview */}
              <div className="glass-effect rounded-3xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6" style={{ color: selectedZodiac.color }} />
                  Today's Overview
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentHoroscope.overview}
                </p>
              </div>

              {/* Detailed Sections */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="glass-effect rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    Love & Relationships
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentHoroscope.love}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    Career & Work
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentHoroscope.career}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Coins className="w-5 h-5 text-yellow-400" />
                    Money & Finance
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentHoroscope.money}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    Health & Wellness
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{currentHoroscope.health}</p>
                </div>
              </div>

              {/* Lucky Elements */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Today's Lucky Elements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Lucky Number</p>
                    <div
                      className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl font-bold"
                      style={{ backgroundColor: selectedZodiac.color }}
                    >
                      {currentHoroscope.luckyNumber}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Lucky Color</p>
                    <div className="text-3xl font-bold" style={{ color: selectedZodiac.color }}>
                      {currentHoroscope.luckyColor}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedPeriod !== 'today' && (
            <div className="glass-effect rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: selectedZodiac.color }}>
                {selectedPeriod === 'weekly' ? 'This Week' : 'This Month'} for {selectedZodiac.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {horoscopeData[selectedPeriod].overview}
              </p>
              <p className="text-gray-400 mt-4">
                Detailed {selectedPeriod} predictions coming soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DailyHoroscope;
