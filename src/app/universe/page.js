'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Sparkles, Telescope, Globe, Zap, Eye, Atom } from 'lucide-react';

const GalaxiesUniverse = () => {
  const [selectedGalaxy, setSelectedGalaxy] = useState(null);

  const galaxiesData = [
    {
      name: 'Milky Way',
      type: 'Barred Spiral Galaxy',
      distance: 'We live here!',
      size: '100,000 light-years diameter',
      description: 'Our home galaxy, a vast spiral of stars, gas, and dust containing our Solar System and an estimated 100-400 billion stars.',
      details: 'The Milky Way is a barred spiral galaxy with four major arms spiraling outward from a central bar structure. At its heart lies Sagittarius A*, a supermassive black hole with a mass of about 4 million suns. Our Solar System is located in the Orion Spur, about 26,000 light-years from the galactic center.',
      composition: '90% dark matter, ordinary matter includes stars, gas clouds, planets, and dust',
      significance: 'Understanding our galaxy helps us comprehend our place in the universe and the nature of galaxies in general.',
      effects: 'Our position in the Milky Way affects what we see in the night sky. The galactic center is a source of powerful energies that ancient cultures believed influenced life on Earth.',
      astroConnection: 'Ancient astrologers saw the Milky Way as a river of souls or pathway for the gods. It represents the collective unconscious and our connection to something greater.',
      funFacts: [
        'On a collision course with Andromeda, will merge in ~4.5 billion years',
        'The center smells like rum and raspberries due to ethyl formate',
        'Takes 250 million years for our solar system to orbit the galaxy once',
        'Contains over 200 billion stars'
      ],
      color: '#9B59B6',
      emoji: '🌌'
    },
    {
      name: 'Andromeda Galaxy',
      type: 'Spiral Galaxy',
      distance: '2.5 million light-years',
      size: '220,000 light-years diameter',
      description: 'The nearest major galaxy to the Milky Way and the most distant object visible to the naked eye.',
      details: 'Andromeda (M31) is the largest galaxy in our Local Group, containing approximately one trillion stars. It has a double nucleus, suggesting it consumed a smaller galaxy in the past. Like the Milky Way, it has several satellite galaxies.',
      composition: 'Similar to Milky Way but larger, with more stars and a more massive central black hole',
      significance: 'Our galactic neighbor provides insights into spiral galaxy structure and evolution.',
      effects: 'Andromeda is approaching us at 110 km/s. When observed, it connects us to the vastness of space and our cosmic future.',
      astroConnection: 'Named after the princess Andromeda from Greek mythology. Represents destiny, transformation, and cosmic cycles that span billions of years.',
      funFacts: [
        'Will merge with the Milky Way to form "Milkomeda"',
        'Visible to naked eye from dark sky locations',
        'Has at least 14 satellite galaxies',
        'Contains a trillion stars, double the Milky Way'
      ],
      color: '#3498DB',
      emoji: '🌠'
    },
    {
      name: 'Triangulum Galaxy',
      type: 'Spiral Galaxy',
      distance: '3 million light-years',
      size: '60,000 light-years diameter',
      description: 'The third-largest member of our Local Group, after Andromeda and the Milky Way.',
      details: 'M33 is a face-on spiral galaxy, allowing us to see its structure clearly. It has a very small central bulge and loose, poorly defined spiral arms. It may be a satellite of Andromeda or on its first close approach.',
      composition: 'Contains about 40 billion stars and very active star-forming regions',
      significance: 'Its face-on orientation makes it valuable for studying spiral galaxy structure.',
      effects: 'Represents the interconnected web of galaxies in our local cosmic neighborhood.',
      astroConnection: 'Associated with the constellation Triangulum. Symbolizes balance, connection, and the geometric patterns underlying reality.',
      funFacts: [
        'Third member of our Local Group',
        'Can be seen with naked eye under excellent conditions',
        'Contains one of the most luminous X-ray sources known',
        'Has very active star formation regions'
      ],
      color: '#E74C3C',
      emoji: '🔺'
    },
    {
      name: 'Whirlpool Galaxy',
      type: 'Grand Design Spiral',
      distance: '23 million light-years',
      size: '76,000 light-years diameter',
      description: 'A stunning face-on spiral galaxy with magnificent spiral arms, interacting with a smaller companion galaxy.',
      details: 'M51 is the perfect example of a grand design spiral galaxy with two prominent, well-defined spiral arms. It\'s currently interacting with NGC 5195, a smaller galaxy that is passing behind M51. This interaction triggers massive star formation in the spiral arms.',
      composition: 'Contains hundreds of billions of stars with active star-forming regions',
      significance: 'First galaxy recognized as a spiral structure, inspiring our understanding of galaxy morphology.',
      effects: 'The gravitational dance between galaxies demonstrates cosmic forces shaping the universe.',
      astroConnection: 'Represents the spiral of life, cycles of creation and destruction, and cosmic partnerships.',
      funFacts: [
        'First galaxy whose spiral structure was identified',
        'Its companion is pulling material from the spiral arms',
        'Can be seen with good binoculars',
        'Located in constellation Canes Venatici'
      ],
      color: '#1ABC9C',
      emoji: '🌀'
    },
    {
      name: 'Sombrero Galaxy',
      type: 'Spiral/Elliptical Hybrid',
      distance: '28 million light-years',
      size: '50,000 light-years diameter',
      description: 'An unusual galaxy with a bright nucleus surrounded by a prominent dust lane, resembling a Mexican hat.',
      details: 'M104 has characteristics of both spiral and elliptical galaxies. It possesses a large central bulge and a prominent dust lane, with a supermassive black hole at its core estimated at 1 billion solar masses. It contains about 2,000 globular clusters, compared to 150-200 in the Milky Way.',
      composition: 'Unusual mix of young and old stars, massive central bulge, prominent dust ring',
      significance: 'Its unique structure challenges our classification of galaxy types.',
      effects: 'Reminds us that the universe is full of unique objects that don\'t fit neat categories.',
      astroConnection: 'Symbolizes mystery, hidden depths, and the importance of perspective in understanding reality.',
      funFacts: [
        'Named for its resemblance to a Mexican sombrero hat',
        'Central black hole is 1 billion times the mass of our Sun',
        'Contains 2,000 globular clusters (vs 150-200 in Milky Way)',
        'The dust ring is seen edge-on'
      ],
      color: '#F39C12',
      emoji: '🎩'
    },
    {
      name: 'Pinwheel Galaxy',
      type: 'Face-on Spiral Galaxy',
      distance: '21 million light-years',
      size: '170,000 light-years diameter',
      description: 'A massive, face-on spiral galaxy with loosely wound spiral arms filled with star-forming regions.',
      details: 'M101 is one of the largest galaxies in our cosmic neighborhood, containing a trillion stars. Its spiral arms are dotted with bright star-forming regions and hundreds of smaller satellite galaxies orbit around it. The galaxy has an asymmetric structure, likely due to past interactions.',
      composition: 'Extremely rich in star-forming regions and young blue stars',
      significance: 'Its large size and face-on orientation make it perfect for studying spiral arm structure.',
      effects: 'Demonstrates the ongoing process of star birth and galactic evolution.',
      astroConnection: 'Represents continuous creation, cycles of renewal, and the spinning wheel of cosmic time.',
      funFacts: [
        'One of the largest face-on spiral galaxies',
        'Contains estimated 1 trillion stars',
        'Home to hundreds of regions forming massive stars',
        'Has asymmetric shape due to gravitational interactions'
      ],
      color: '#9B59B6',
      emoji: '🎡'
    }
  ];

  const cosmicPhenomena = [
    {
      title: 'Black Holes',
      description: 'Regions of spacetime where gravity is so strong that nothing, not even light, can escape.',
      effects: 'Ancient astrologers saw eclipses and dark regions as powerful transformative forces. Modern understanding shows black holes as ultimate transformation agents, recycling matter and energy.',
      emoji: '🕳️',
      color: '#000000'
    },
    {
      title: 'Supernovae',
      description: 'Massive stellar explosions that can briefly outshine entire galaxies, creating and dispersing heavy elements.',
      effects: 'Every atom in your body heavier than hydrogen was created in stars and scattered by supernovae. We are literally made of stardust, connecting us to cosmic events from billions of years ago.',
      emoji: '💥',
      color: '#FF6B6B'
    },
    {
      title: 'Dark Matter',
      description: 'Invisible substance that makes up 85% of the universe\'s matter, detected only through gravitational effects.',
      effects: 'Like the subconscious mind, dark matter invisibly shapes the visible universe. It reminds us that most of reality operates beyond our direct perception.',
      emoji: '👻',
      color: '#2C3E50'
    },
    {
      title: 'Dark Energy',
      description: 'Mysterious force causing the universe\'s expansion to accelerate, comprising about 68% of the universe.',
      effects: 'Represents the unknown forces driving cosmic evolution and expansion, mirroring the invisible energies astrologers have always sensed in the cosmos.',
      emoji: '⚡',
      color: '#8E44AD'
    },
    {
      title: 'Nebulae',
      description: 'Vast clouds of gas and dust where stars are born, or remnants of stars that have died.',
      effects: 'Ancient astrologers saw nebulae as "cosmic wombs." Modern science confirms they are stellar nurseries where new star systems form, continuing the cycle of cosmic creation.',
      emoji: '☁️',
      color: '#E74C3C'
    },
    {
      title: 'Cosmic Rays',
      description: 'High-energy particles from outer space that constantly bombard Earth, originating from supernovae and other cosmic events.',
      effects: 'These particles influence cloud formation and may affect climate. Ancient astrologers intuited that cosmic forces affect Earth; cosmic rays are one proven example.',
      emoji: '☄️',
      color: '#3498DB'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white star-field">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-purple-400 animate-float mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Galaxies & The Universe
            </h1>
            <Sparkles className="w-12 h-12 text-yellow-400 animate-twinkle ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Explore the vast cosmic structures that shape our universe and their profound influence on existence
          </p>
        </div>
      </section>

      {/* Universe Facts */}
      <section className="pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gradient">
              🌟 The Observable Universe
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold text-purple-400 mb-2">93 Billion</p>
                <p className="text-gray-300">Light-years diameter</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">2 Trillion</p>
                <p className="text-gray-300">Estimated galaxies</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-pink-400 mb-2">13.8 Billion</p>
                <p className="text-gray-300">Years old</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galaxies Grid */}
      <section className="pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            🌌 Famous Galaxies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galaxiesData.map((galaxy, index) => (
              <div
                key={index}
                className="zodiac-card cursor-pointer group"
                onClick={() => setSelectedGalaxy(galaxy)}
                style={{
                  background: `linear-gradient(135deg, ${galaxy.color}20 0%, ${galaxy.color}05 100%)`,
                  borderColor: `${galaxy.color}50`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: galaxy.color }}>
                      {galaxy.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{galaxy.type}</p>
                  </div>
                  <span className="text-5xl group-hover:animate-float">
                    {galaxy.emoji}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Distance:</span>
                    <span className="font-semibold text-xs">{galaxy.distance}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Size:</span>
                    <span className="font-semibold text-xs">{galaxy.size}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {galaxy.description}
                </p>

                <div className="text-center">
                  <button
                    className="text-sm font-semibold hover:underline flex items-center justify-center mx-auto gap-1"
                    style={{ color: galaxy.color }}
                  >
                    Explore <Telescope className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmic Phenomena */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            ✨ Cosmic Phenomena & Their Effects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cosmicPhenomena.map((phenomenon, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                style={{ borderColor: `${phenomenon.color}50` }}
              >
                <div className="text-6xl mb-4 text-center">{phenomenon.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: phenomenon.color }}>
                  {phenomenon.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{phenomenon.description}</p>
                <div className="glass-effect rounded-lg p-3 mt-3">
                  <p className="text-gray-400 text-xs font-semibold mb-1">Effect on Life:</p>
                  <p className="text-gray-300 text-xs">{phenomenon.effects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Galaxy */}
      {selectedGalaxy && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedGalaxy(null)}
        >
          <div
            className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-7xl animate-float">{selectedGalaxy.emoji}</span>
                <div>
                  <h2 className="text-4xl font-bold" style={{ color: selectedGalaxy.color }}>
                    {selectedGalaxy.name}
                  </h2>
                  <p className="text-gray-400 text-lg">{selectedGalaxy.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedGalaxy(null)}
                className="text-4xl hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-sm text-gray-400 mb-2">Distance from Earth</h3>
                <p className="text-xl font-bold">{selectedGalaxy.distance}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-sm text-gray-400 mb-2">Size</h3>
                <p className="text-xl font-bold">{selectedGalaxy.size}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedGalaxy.color }}>
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedGalaxy.description}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedGalaxy.color }}>
                  Detailed Information
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedGalaxy.details}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedGalaxy.color }}>
                  Composition
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedGalaxy.composition}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: selectedGalaxy.color }}>
                    Scientific Significance
                  </h3>
                  <p className="text-gray-300 text-sm">{selectedGalaxy.significance}</p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: selectedGalaxy.color }}>
                    Effects & Influence
                  </h3>
                  <p className="text-gray-300 text-sm">{selectedGalaxy.effects}</p>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Atom className="w-6 h-6" style={{ color: selectedGalaxy.color }} />
                  Astrological Connection
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedGalaxy.astroConnection}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6" style={{ color: selectedGalaxy.color }} />
                  Fascinating Facts
                </h3>
                <ul className="space-y-2">
                  {selectedGalaxy.funFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span style={{ color: selectedGalaxy.color }}>•</span>
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

export default GalaxiesUniverse;
