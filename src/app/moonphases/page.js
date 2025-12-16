'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Moon, Sparkles, Calendar, Heart, Lightbulb } from 'lucide-react';

const MoonPhases = () => {
  const [currentPhase, setCurrentPhase] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));

    // Calculate approximate moon phase
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    // Simplified moon phase calculation
    const c = Math.floor(year / 100);
    const e = Math.floor(c / 4);
    const jd = 365.25 * year;
    const d = (jd + Math.floor(30.6 * month) + day - 694039.09) / 29.53;
    const phase = (d - Math.floor(d)) * 29.53;

    let phaseName = '';
    if (phase < 1.84566) phaseName = 'New Moon';
    else if (phase < 5.53699) phaseName = 'Waxing Crescent';
    else if (phase < 9.22831) phaseName = 'First Quarter';
    else if (phase < 12.91963) phaseName = 'Waxing Gibbous';
    else if (phase < 16.61096) phaseName = 'Full Moon';
    else if (phase < 20.30228) phaseName = 'Waning Gibbous';
    else if (phase < 23.99361) phaseName = 'Last Quarter';
    else phaseName = 'Waning Crescent';

    const phaseData = moonPhases.find(p => p.name === phaseName);
    setCurrentPhase(phaseData);
  }, []);

  const moonPhases = [
    {
      name: 'New Moon',
      emoji: '🌑',
      symbol: '●',
      percentage: '0%',
      description: 'The Moon is positioned between Earth and the Sun, making it invisible from Earth. This is the beginning of the lunar cycle.',
      energy: 'New beginnings, fresh starts, intention setting, planting seeds',
      emotional: 'Introspective, reflective, quiet energy. Time to rest and envision the future.',
      best_for: [
        'Starting new projects',
        'Setting intentions and goals',
        'Meditation and self-reflection',
        'Breaking bad habits',
        'Decluttering and releasing'
      ],
      rituals: 'Write down intentions, create vision boards, cleanse your space, start a journal',
      chakra: 'Root Chakra - Grounding and new foundations',
      colors: ['Black', 'Deep Purple', 'Dark Blue'],
      crystals: ['Black Tourmaline', 'Obsidian', 'Smoky Quartz'],
      advice: 'This is your cosmic reset button. Take time to envision what you want to manifest in this lunar cycle.'
    },
    {
      name: 'Waxing Crescent',
      emoji: '🌒',
      symbol: '☽',
      percentage: '1-49%',
      description: 'A sliver of the Moon becomes visible as it moves away from the Sun. The illuminated portion grows each night.',
      energy: 'Growth, development, taking action on intentions, momentum building',
      emotional: 'Optimistic, motivated, determined. Energy is building and pushing you forward.',
      best_for: [
        'Taking first steps toward goals',
        'Learning new skills',
        'Making plans and strategies',
        'Building confidence',
        'Seeking opportunities'
      ],
      rituals: 'Create action plans, start new habits, reach out to mentors, take courses',
      chakra: 'Sacral Chakra - Creativity and action',
      colors: ['Orange', 'Coral', 'Peach'],
      crystals: ['Carnelian', 'Orange Calcite', 'Sunstone'],
      advice: 'Your intentions are taking root. Water them with consistent action and watch them grow.'
    },
    {
      name: 'First Quarter',
      emoji: '🌓',
      symbol: '◐',
      percentage: '50%',
      description: 'Half of the Moon is illuminated. This phase represents a turning point where action is required to move forward.',
      energy: 'Decision-making, overcoming obstacles, commitment, perseverance',
      emotional: 'Challenged, determined, focused. You may face resistance but have the strength to push through.',
      best_for: [
        'Making important decisions',
        'Overcoming challenges',
        'Taking decisive action',
        'Problem-solving',
        'Showing commitment'
      ],
      rituals: 'Face your fears, make tough choices, ask for help, adjust your course if needed',
      chakra: 'Solar Plexus Chakra - Willpower and determination',
      colors: ['Yellow', 'Gold', 'Amber'],
      crystals: ['Citrine', 'Tiger\'s Eye', 'Pyrite'],
      advice: 'This is the challenge phase. Stay committed to your path even when obstacles appear.'
    },
    {
      name: 'Waxing Gibbous',
      emoji: '🌔',
      symbol: '◐',
      percentage: '51-99%',
      description: 'The Moon is more than half illuminated and growing. This is a time of refinement and preparation.',
      energy: 'Refinement, adjustment, patience, preparation, trust',
      emotional: 'Anticipatory, patient, trusting. You can see your goals manifesting.',
      best_for: [
        'Refining your approach',
        'Editing and improving',
        'Patience and trust',
        'Preparation and practice',
        'Fine-tuning details'
      ],
      rituals: 'Review your progress, make adjustments, practice gratitude, prepare for manifestation',
      chakra: 'Heart Chakra - Trust and patience',
      colors: ['Green', 'Pink', 'Rose'],
      crystals: ['Rose Quartz', 'Green Aventurine', 'Rhodonite'],
      advice: 'Your goals are nearly manifested. Trust the process and make final adjustments.'
    },
    {
      name: 'Full Moon',
      emoji: '🌕',
      symbol: '○',
      percentage: '100%',
      description: 'The Moon is fully illuminated and opposite the Sun. This is the peak of the lunar cycle\'s energy.',
      energy: 'Manifestation, culmination, celebration, illumination, heightened emotions',
      emotional: 'Intense, expressive, emotional, powerful. Everything comes to light.',
      best_for: [
        'Celebrating achievements',
        'Releasing what no longer serves',
        'Heightened intuition',
        'Charging crystals',
        'Gratitude practices'
      ],
      rituals: 'Full moon ceremony, release rituals, charge crystals, express gratitude, dance and celebrate',
      chakra: 'Crown Chakra - Divine connection and illumination',
      colors: ['White', 'Silver', 'Violet'],
      crystals: ['Selenite', 'Moonstone', 'Clear Quartz'],
      advice: 'This is harvest time. Celebrate what you\'ve manifested and release what you no longer need.'
    },
    {
      name: 'Waning Gibbous',
      emoji: '🌖',
      symbol: '◑',
      percentage: '99-51%',
      description: 'The Moon begins to decrease in illumination after the Full Moon. Time for gratitude and sharing.',
      energy: 'Gratitude, sharing wisdom, giving back, teaching',
      emotional: 'Grateful, generous, wise. Desire to share and help others.',
      best_for: [
        'Sharing knowledge',
        'Teaching others',
        'Giving back to community',
        'Expressing gratitude',
        'Reflection on lessons'
      ],
      rituals: 'Mentor someone, share your abundance, write thank-you notes, journal lessons learned',
      chakra: 'Throat Chakra - Communication and sharing',
      colors: ['Blue', 'Turquoise', 'Aqua'],
      crystals: ['Blue Lace Agate', 'Aquamarine', 'Turquoise'],
      advice: 'Share your wisdom and abundance. What you give returns to you multiplied.'
    },
    {
      name: 'Last Quarter',
      emoji: '🌗',
      symbol: '◑',
      percentage: '50%',
      description: 'Half of the Moon is illuminated again, but now decreasing. This is a time of release and letting go.',
      energy: 'Release, forgiveness, breaking patterns, letting go',
      emotional: 'Reflective, ready to release, forgiving. Time to clear emotional baggage.',
      best_for: [
        'Releasing old patterns',
        'Forgiveness practices',
        'Ending toxic relationships',
        'Clearing negativity',
        'Breaking bad habits'
      ],
      rituals: 'Write and burn what you\'re releasing, forgiveness meditation, cord-cutting ceremonies',
      chakra: 'Third Eye Chakra - Inner wisdom and clarity',
      colors: ['Indigo', 'Deep Blue', 'Purple'],
      crystals: ['Amethyst', 'Lapis Lazuli', 'Sodalite'],
      advice: 'Release what\'s holding you back. Make space for the new by honoring and releasing the old.'
    },
    {
      name: 'Waning Crescent',
      emoji: '🌘',
      symbol: '☾',
      percentage: '49-1%',
      description: 'A thin crescent remains as the Moon prepares to become new again. Time for deep rest and surrender.',
      energy: 'Rest, surrender, recovery, completion, wisdom integration',
      emotional: 'Tired, contemplative, peaceful. Ready to rest and integrate lessons.',
      best_for: [
        'Rest and recuperation',
        'Surrender and acceptance',
        'Tying up loose ends',
        'Inner reflection',
        'Preparing for rebirth'
      ],
      rituals: 'Sleep more, take baths, gentle yoga, meditation, dream work, rest without guilt',
      chakra: 'All Chakras - Integration and balance',
      colors: ['Lavender', 'Soft Pink', 'Pale Blue'],
      crystals: ['Lepidolite', 'Howlite', 'Celestite'],
      advice: 'Honor your need for rest. The cycle is completing, and you need energy for the new beginning ahead.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Moon className="w-12 h-12 text-blue-300 animate-pulse mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Moon Phases
            </h1>
            <Sparkles className="w-12 h-12 text-yellow-400 animate-twinkle ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Understand the lunar cycle and harness the Moon's powerful influence on your life
          </p>
          <p className="text-lg text-gray-400 mt-4">{currentDate}</p>
        </div>
      </section>

      {/* Current Moon Phase */}
      {currentPhase && (
        <section className="pb-16 px-6 md:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Current Moon Phase
              </h2>
              <div className="text-9xl mb-6">{currentPhase.emoji}</div>
              <h3 className="text-4xl font-bold mb-4">{currentPhase.name}</h3>
              <p className="text-xl text-gray-300 mb-6">{currentPhase.percentage} Illuminated</p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {currentPhase.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="glass-effect rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Energy
                  </h4>
                  <p className="text-gray-300">{currentPhase.energy}</p>
                </div>
                <div className="glass-effect rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    Emotional State
                  </h4>
                  <p className="text-gray-300">{currentPhase.emotional}</p>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6 mt-6">
                <h4 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  Cosmic Advice
                </h4>
                <p className="text-gray-300 text-lg">{currentPhase.advice}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Moon Phases */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            The Complete Lunar Cycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moonPhases.map((phase, index) => (
              <div
                key={index}
                className="zodiac-card group cursor-pointer"
                onClick={() => {
                  document.getElementById(`phase-${index}`).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="text-center mb-4">
                  <div className="text-7xl mb-3 group-hover:scale-125 transition-transform">
                    {phase.emoji}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{phase.name}</h3>
                  <p className="text-gray-400 text-sm">{phase.percentage} Illuminated</p>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {phase.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="text-sm font-semibold text-blue-400 hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Phase Information */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {moonPhases.map((phase, index) => (
            <div
              key={index}
              id={`phase-${index}`}
              className="glass-effect rounded-3xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-7xl">{phase.emoji}</div>
                <div>
                  <h3 className="text-3xl font-bold">{phase.name}</h3>
                  <p className="text-gray-400">{phase.percentage} Illuminated</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-purple-400">Description</h4>
                  <p className="text-gray-300">{phase.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-yellow-400">Energy</h4>
                    <p className="text-gray-300">{phase.energy}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-pink-400">Emotional State</h4>
                    <p className="text-gray-300">{phase.emotional}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-400">Best Activities</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.best_for.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <Sparkles className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-400">Rituals & Practices</h4>
                  <p className="text-gray-300">{phase.rituals}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass-effect rounded-xl p-4">
                    <h5 className="font-bold mb-2">Chakra</h5>
                    <p className="text-sm text-gray-300">{phase.chakra}</p>
                  </div>
                  <div className="glass-effect rounded-xl p-4">
                    <h5 className="font-bold mb-2">Colors</h5>
                    <div className="flex gap-1">
                      {phase.colors.map((color, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="glass-effect rounded-xl p-4">
                    <h5 className="font-bold mb-2">Crystals</h5>
                    <div className="flex flex-wrap gap-1">
                      {phase.crystals.map((crystal, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                          {crystal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  <p className="text-gray-200 italic">💫 {phase.advice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoonPhases;
