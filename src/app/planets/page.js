'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Globe, Sparkles, Zap, Info } from 'lucide-react';

const PlanetsPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planetsData = [
    {
      name: 'Sun',
      symbol: '☉',
      color: '#FFD700',
      type: 'Star (Luminary)',
      rules: 'Leo',
      exaltation: 'Aries',
      description: 'The Sun represents your core identity, ego, and life force. It governs your sense of self, vitality, and creative expression.',
      influences: 'Leadership, confidence, creativity, vitality, purpose, self-expression, father figure',
      inSigns: 'When the Sun is strong in your chart, you possess natural leadership abilities and a strong sense of identity. It illuminates your path and gives you the energy to pursue your life\'s purpose.',
      mythology: 'In ancient civilizations, the Sun was worshipped as the most powerful deity. Apollo in Greek mythology and Ra in Egyptian mythology represented the life-giving and all-seeing power of the Sun.',
      funFacts: [
        'Takes approximately 30 days to transit through each zodiac sign',
        'Rules Sunday (Sun-day)',
        'Associated with gold and the heart in medical astrology',
        'Your Sun sign is determined by your birth date'
      ],
      elements: 'Fire, Yang energy, masculine principle',
      lifeAreas: 'Career ambitions, personal identity, creative projects, relationships with authority figures',
      emoji: '☀️'
    },
    {
      name: 'Moon',
      symbol: '☽',
      color: '#C0C0C0',
      type: 'Luminary',
      rules: 'Cancer',
      exaltation: 'Taurus',
      description: 'The Moon governs your emotions, instincts, and subconscious mind. It represents your inner world, nurturing needs, and how you respond emotionally.',
      influences: 'Emotions, intuition, habits, home, mother figure, comfort, security, memory',
      inSigns: 'The Moon moves quickly through the zodiac, changing signs every 2.5 days. Its placement reveals your emotional nature, what makes you feel secure, and how you nurture others.',
      mythology: 'Selene in Greek mythology and Diana in Roman tradition embodied the Moon\'s mystical and feminine energy. The Moon has been associated with magic, dreams, and the tides.',
      funFacts: [
        'Changes zodiac signs every 2-3 days',
        'Rules Monday (Moon-day)',
        'Governs the tides and emotional cycles',
        'Associated with silver and the stomach in medical astrology'
      ],
      elements: 'Water, Yin energy, feminine principle',
      lifeAreas: 'Emotional well-being, family relationships, home environment, instinctual responses, daily routines',
      emoji: '🌙'
    },
    {
      name: 'Mercury',
      symbol: '☿',
      color: '#87CEEB',
      type: 'Personal Planet',
      rules: 'Gemini, Virgo',
      exaltation: 'Aquarius',
      description: 'Mercury rules communication, intellect, and mental processes. It governs how you think, learn, and express your ideas.',
      influences: 'Communication, logic, learning, travel, technology, writing, siblings, commerce',
      inSigns: 'Mercury\'s placement shows your communication style, learning preferences, and mental agility. It influences how you process information and connect with others.',
      mythology: 'Named after the Roman messenger god (Hermes in Greek mythology), Mercury was known for speed, wit, and eloquence. He was the mediator between gods and mortals.',
      funFacts: [
        'Spends about 3 weeks in each sign',
        'Goes retrograde 3-4 times per year',
        'Rules Wednesday (Wodens-day/Mercury-day)',
        'Governs short trips and daily communications'
      ],
      elements: 'Air and Earth, mutable quality',
      lifeAreas: 'Education, conversations, contracts, technology, local travel, mental health',
      emoji: '💬'
    },
    {
      name: 'Venus',
      symbol: '♀',
      color: '#FF69B4',
      type: 'Personal Planet',
      rules: 'Taurus, Libra',
      exaltation: 'Pisces',
      description: 'Venus governs love, beauty, harmony, and values. It represents what you find attractive, your artistic sensibilities, and how you relate to others.',
      influences: 'Love, relationships, beauty, art, pleasure, money, values, harmony, social grace',
      inSigns: 'Venus shows your approach to love and relationships, what you value, and how you appreciate beauty. It reveals your romantic style and aesthetic preferences.',
      mythology: 'Aphrodite (Greek) or Venus (Roman) was the goddess of love and beauty. Born from sea foam, she represented the power of attraction and aesthetic perfection.',
      funFacts: [
        'Spends about 4 weeks in each sign',
        'Rules Friday (Freya\'s day/Venus day)',
        'Never more than 47 degrees from the Sun',
        'Associated with copper and the throat/kidneys in medical astrology'
      ],
      elements: 'Earth and Air, feminine energy',
      lifeAreas: 'Romantic relationships, artistic pursuits, financial matters, self-worth, social connections',
      emoji: '💖'
    },
    {
      name: 'Mars',
      symbol: '♂',
      color: '#FF0000',
      type: 'Personal Planet',
      rules: 'Aries, Scorpio',
      exaltation: 'Capricorn',
      description: 'Mars represents your drive, passion, and assertiveness. It governs your energy levels, ambition, and how you pursue your desires.',
      influences: 'Action, desire, aggression, courage, competition, sexuality, physical energy, conflict',
      inSigns: 'Mars placement indicates how you assert yourself, express anger, and pursue goals. It shows your fighting spirit and what motivates you to take action.',
      mythology: 'Ares (Greek) or Mars (Roman) was the god of war, representing raw power, courage, and martial prowess. He embodied the warrior spirit and passionate drive.',
      funFacts: [
        'Spends about 6-7 weeks in each sign',
        'Rules Tuesday (Mars-day/Tyr\'s day)',
        'Goes retrograde every 2 years',
        'Associated with iron and the muscles/blood in medical astrology'
      ],
      elements: 'Fire and Water, masculine energy',
      lifeAreas: 'Career drive, athletic pursuits, sexual expression, conflict resolution, competitive endeavors',
      emoji: '🔥'
    },
    {
      name: 'Jupiter',
      symbol: '♃',
      color: '#FFA500',
      type: 'Social Planet',
      rules: 'Sagittarius, Pisces',
      exaltation: 'Cancer',
      description: 'Jupiter is the planet of expansion, growth, and abundance. It represents wisdom, optimism, and your capacity for good fortune.',
      influences: 'Luck, growth, expansion, wisdom, philosophy, higher education, travel, optimism, generosity',
      inSigns: 'Jupiter shows where you can experience growth and abundance. It indicates your philosophical outlook, what brings you joy, and areas of natural luck.',
      mythology: 'Zeus (Greek) or Jupiter (Roman) was the king of gods, representing supreme power, justice, and benevolence. He was the sky father and bringer of good fortune.',
      funFacts: [
        'Spends about 1 year in each sign',
        'Rules Thursday (Thor\'s day/Jupiter\'s day)',
        'Known as the "Greater Benefic" in traditional astrology',
        'Associated with tin and the liver in medical astrology'
      ],
      elements: 'Fire and Water, expansive energy',
      lifeAreas: 'Higher education, international travel, spiritual growth, legal matters, publishing, teaching',
      emoji: '🍀'
    },
    {
      name: 'Saturn',
      symbol: '♄',
      color: '#4B0082',
      type: 'Social Planet',
      rules: 'Capricorn, Aquarius',
      exaltation: 'Libra',
      description: 'Saturn represents discipline, responsibility, and life lessons. It governs structure, limitations, and the areas where you must work hardest.',
      influences: 'Discipline, responsibility, time, karma, limitations, structure, authority, perseverance, wisdom through experience',
      inSigns: 'Saturn shows where you face challenges and must develop maturity. It indicates areas requiring discipline and where you\'ll find lasting achievement through persistence.',
      mythology: 'Cronus (Greek) or Saturn (Roman) was the god of time and harvest, representing the cycles of life, death, and rebirth. He taught the value of patience and hard work.',
      funFacts: [
        'Spends about 2.5 years in each sign',
        'Rules Saturday (Saturn-day)',
        'Known as the "Greater Malefic" but also the "Great Teacher"',
        'Saturn Return occurs around age 29-30 and 58-60'
      ],
      elements: 'Earth and Air, restrictive energy',
      lifeAreas: 'Career foundations, long-term goals, responsibilities, boundaries, life lessons, aging',
      emoji: '⏰'
    },
    {
      name: 'Uranus',
      symbol: '♅',
      color: '#00FFFF',
      type: 'Outer Planet',
      rules: 'Aquarius',
      exaltation: 'Scorpio',
      description: 'Uranus is the planet of revolution, innovation, and sudden change. It represents your individuality, originality, and capacity for breakthrough insights.',
      influences: 'Innovation, rebellion, freedom, originality, sudden changes, technology, electricity, awakening, revolution',
      inSigns: 'Uranus shows where you seek freedom and innovation. It indicates areas of sudden change and where you break from tradition to embrace the new and unusual.',
      mythology: 'Ouranos (Greek) was the primordial god of the sky, representing the heavens and cosmic order. Uranus symbolizes the breakthrough of divine inspiration.',
      funFacts: [
        'Spends about 7 years in each sign',
        'Rotates on its side (98-degree axial tilt)',
        'Discovered in 1781, first planet found with a telescope',
        'Associated with the nervous system and ankles'
      ],
      elements: 'Air, electric energy',
      lifeAreas: 'Technology, scientific breakthroughs, unconventional relationships, sudden life changes, humanitarian causes',
      emoji: '⚡'
    },
    {
      name: 'Neptune',
      symbol: '♆',
      color: '#4169E1',
      type: 'Outer Planet',
      rules: 'Pisces',
      exaltation: 'Cancer',
      description: 'Neptune governs dreams, illusions, and spiritual connection. It represents your imagination, compassion, and ability to transcend material reality.',
      influences: 'Dreams, intuition, spirituality, illusion, compassion, creativity, transcendence, escapism, mysticism',
      inSigns: 'Neptune shows where you seek transcendence and spiritual connection. It indicates areas of idealism, creativity, and potential confusion or deception.',
      mythology: 'Poseidon (Greek) or Neptune (Roman) was the god of the sea, representing the vast, mysterious depths of emotion and the collective unconscious.',
      funFacts: [
        'Spends about 14 years in each sign',
        'Discovered in 1846',
        'Rules the oceans and all liquids',
        'Associated with the pineal gland and feet'
      ],
      elements: 'Water, dissolving energy',
      lifeAreas: 'Spiritual practices, artistic creation, film and music, healing arts, meditation, dreams',
      emoji: '🌊'
    },
    {
      name: 'Pluto',
      symbol: '♇',
      color: '#8B0000',
      type: 'Outer Planet',
      rules: 'Scorpio',
      exaltation: 'Leo',
      description: 'Pluto represents transformation, power, and regeneration. It governs the cycles of death and rebirth, deep psychological processes, and collective evolution.',
      influences: 'Transformation, power, death and rebirth, intensity, psychology, hidden things, control, regeneration',
      inSigns: 'Pluto shows where you undergo profound transformation and empowerment. It indicates areas of intense experience and where you must surrender to change.',
      mythology: 'Hades (Greek) or Pluto (Roman) was the god of the underworld, representing the hidden depths, wealth from below, and the transformation through death.',
      funFacts: [
        'Spends 12-31 years in each sign (varies due to elliptical orbit)',
        'Discovered in 1930',
        'Reclassified as a "dwarf planet" in 2006 (but still powerful in astrology!)',
        'Associated with elimination systems and reproductive organs'
      ],
      elements: 'Water and Fire, transformative energy',
      lifeAreas: 'Major life transformations, psychology, shared resources, inheritance, deep healing, power dynamics',
      emoji: '🔮'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-blue-400 animate-spin-slow mr-4" style={{ animation: 'rotate-slow 20s linear infinite' }} />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Planets & Their Meanings
            </h1>
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Explore how celestial bodies shape your personality, destiny, and life experiences
          </p>
        </div>
      </section>

      {/* Planets Grid */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planetsData.map((planet, index) => (
              <div
                key={index}
                className="zodiac-card cursor-pointer group"
                onClick={() => setSelectedPlanet(planet)}
                style={{
                  background: `linear-gradient(135deg, ${planet.color}15 0%, ${planet.color}05 100%)`,
                  borderColor: `${planet.color}40`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: planet.color }}>
                      {planet.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{planet.type}</p>
                  </div>
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                    {planet.emoji}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Symbol:</span>
                    <span className="text-2xl" style={{ color: planet.color }}>{planet.symbol}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Rules:</span>
                    <span className="font-semibold">{planet.rules}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {planet.description}
                </p>

                <div className="text-center">
                  <button
                    className="text-sm font-semibold hover:underline flex items-center justify-center mx-auto gap-1"
                    style={{ color: planet.color }}
                  >
                    Learn More <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Planet */}
      {selectedPlanet && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPlanet(null)}
        >
          <div
            className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-7xl">{selectedPlanet.emoji}</span>
                <div>
                  <h2 className="text-4xl font-bold" style={{ color: selectedPlanet.color }}>
                    {selectedPlanet.name}
                  </h2>
                  <p className="text-gray-400 text-lg">{selectedPlanet.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPlanet(null)}
                className="text-4xl hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Symbol</h3>
                <p className="text-4xl" style={{ color: selectedPlanet.color }}>
                  {selectedPlanet.symbol}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Rules</h3>
                <p className="text-xl font-bold">{selectedPlanet.rules}</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Exaltation</h3>
                <p className="text-xl font-bold">{selectedPlanet.exaltation}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedPlanet.color }}>
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedPlanet.description}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedPlanet.color }}>
                  Key Influences
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedPlanet.influences}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedPlanet.color }}>
                  In Your Chart
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedPlanet.inSigns}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedPlanet.color }}>
                  Mythology & Symbolism
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedPlanet.mythology}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedPlanet.color }}>
                  Life Areas
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedPlanet.lifeAreas}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6" style={{ color: selectedPlanet.color }} />
                  Fun Facts
                </h3>
                <ul className="space-y-2">
                  {selectedPlanet.funFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span style={{ color: selectedPlanet.color }}>•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PlanetsPage;
