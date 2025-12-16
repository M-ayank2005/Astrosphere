'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { Star, Sparkles, Eye, BookOpen } from 'lucide-react';

const StarsConstellations = () => {
  const [selectedConstellation, setSelectedConstellation] = useState(null);

  const constellationsData = [
    {
      name: 'Orion',
      type: 'Prominent Constellation',
      visibility: 'Winter (Northern Hemisphere)',
      brightestStar: 'Rigel',
      description: 'One of the most recognizable constellations in the night sky, Orion the Hunter is visible worldwide and features some of the brightest stars.',
      mythology: 'Orion was a legendary hunter in Greek mythology, placed among the stars by Zeus. He is often depicted fighting Taurus the Bull. According to legend, he was either killed by a scorpion (now the constellation Scorpius) or by Artemis, the goddess of the hunt.',
      stars: [
        { name: 'Betelgeuse', info: 'Red supergiant, one of the largest stars visible to the naked eye' },
        { name: 'Rigel', info: 'Blue supergiant, the brightest star in Orion' },
        { name: 'Bellatrix', info: 'Blue giant, the "Female Warrior"' }
      ],
      features: ['Orion\'s Belt (3 aligned stars)', 'Orion Nebula (M42)', 'Great Nebula', 'Horsehead Nebula'],
      significance: 'Ancient civilizations used Orion for navigation and timekeeping. The pyramids of Giza align with Orion\'s Belt.',
      astroSignificance: 'Associated with ambition, adventure, and the quest for knowledge. Orion energy inspires courage and exploration.',
      color: '#4A90E2'
    },
    {
      name: 'Ursa Major',
      type: 'Circumpolar Constellation',
      visibility: 'Year-round (Northern Hemisphere)',
      brightestStar: 'Alioth',
      description: 'The Great Bear is one of the most famous constellations, containing the Big Dipper asterism used for navigation for millennia.',
      mythology: 'In Greek mythology, Ursa Major represents Callisto, a nymph transformed into a bear by jealous Hera. Zeus placed her in the sky to protect her from hunters. Native American and Asian cultures also have rich stories about this celestial bear.',
      stars: [
        { name: 'Dubhe', info: 'Orange giant, pointer star to Polaris' },
        { name: 'Merak', info: 'White main-sequence star, second pointer to Polaris' },
        { name: 'Alioth', info: 'The brightest star in Ursa Major' }
      ],
      features: ['Big Dipper asterism', 'Points to Polaris (North Star)', 'Multiple galaxies including M81 and M82', 'Bode\'s Galaxy'],
      significance: 'The Big Dipper has been used for navigation, telling time, and as a calendar by countless cultures throughout history.',
      astroSignificance: 'Symbolizes guidance, protection, and maternal energy. Ursa Major energy brings wisdom and direction.',
      color: '#F4A460'
    },
    {
      name: 'Cassiopeia',
      type: 'Circumpolar Constellation',
      visibility: 'Year-round (Northern Hemisphere)',
      brightestStar: 'Schedar',
      description: 'Shaped like a W or M depending on the season, Cassiopeia is a striking constellation opposite Ursa Major across the North Star.',
      mythology: 'Cassiopeia was a vain queen in Greek mythology who boasted about her beauty. As punishment, Poseidon placed her in the sky tied to a chair, eternally rotating around the celestial pole, spending half the year upside down.',
      stars: [
        { name: 'Schedar', info: 'Orange giant, the "Breast" of Cassiopeia' },
        { name: 'Caph', info: 'Variable star forming the right point of the W' },
        { name: 'Gamma Cassiopeiae', info: 'Variable star at the center of the W' }
      ],
      features: ['Distinctive W or M shape', 'Rich star field in the Milky Way', 'Several star clusters', 'Tycho\'s Supernova remnant'],
      significance: 'Used for navigation and finding the North Star. Contains numerous deep-sky objects for astronomers.',
      astroSignificance: 'Represents vanity, beauty, and the consequences of pride. Also symbolizes persistence and staying visible despite challenges.',
      color: '#FF6B9D'
    },
    {
      name: 'Scorpius',
      type: 'Zodiac Constellation',
      visibility: 'Summer (Northern Hemisphere)',
      brightestStar: 'Antares',
      description: 'One of the oldest recognized constellations, Scorpius actually resembles a scorpion with its curved tail and prominent body.',
      mythology: 'In Greek mythology, the scorpion was sent by Gaia to kill Orion after he boasted he could hunt any animal. The two were placed in opposite sides of the sky, so when Scorpius rises, Orion sets.',
      stars: [
        { name: 'Antares', info: 'Red supergiant, "Heart of the Scorpion", rival of Mars' },
        { name: 'Shaula', info: 'Blue subgiant forming the scorpion\'s stinger' },
        { name: 'Lesath', info: 'Forms the stinger with Shaula' }
      ],
      features: ['Antares (red supergiant)', 'Butterfly Cluster', 'Ptolemy Cluster', 'Rich Milky Way star fields'],
      significance: 'One of the 12 zodiac constellations. Ancient Sumerians called it "the creature with burning sting."',
      astroSignificance: 'Embodies transformation, intensity, and hidden depths. Scorpius energy is passionate, mysterious, and powerful.',
      color: '#8B0000'
    },
    {
      name: 'Leo',
      type: 'Zodiac Constellation',
      visibility: 'Spring (Northern Hemisphere)',
      brightestStar: 'Regulus',
      description: 'Leo the Lion is one of the easiest zodiac constellations to find, with a distinctive sickle shape forming the lion\'s head and mane.',
      mythology: 'Represents the Nemean Lion slain by Hercules as his first labor. The lion\'s hide was impervious to weapons, so Hercules strangled it with his bare hands. Zeus honored the beast by placing it among the stars.',
      stars: [
        { name: 'Regulus', info: 'Blue-white main sequence star, "Heart of the Lion"' },
        { name: 'Denebola', info: 'White main sequence star, "Tail of the Lion"' },
        { name: 'Algieba', info: 'Binary star system, "The Mane"' }
      ],
      features: ['The Sickle asterism', 'Leo Triplet (galaxies)', 'Multiple galaxy clusters', 'Leo I & II dwarf galaxies'],
      significance: 'Ancient Egyptians associated Leo with the annual flooding of the Nile when the Sun passed through this constellation.',
      astroSignificance: 'Symbolizes courage, leadership, and royalty. Leo energy is bold, creative, and generous.',
      color: '#FFD700'
    },
    {
      name: 'Pleiades',
      type: 'Star Cluster (in Taurus)',
      visibility: 'Winter (both hemispheres)',
      brightestStar: 'Alcyone',
      description: 'Also known as the Seven Sisters, the Pleiades is the most famous open star cluster, containing over 1,000 stars though only 6-7 are visible to the naked eye.',
      mythology: 'In Greek mythology, the Pleiades were the seven daughters of Atlas and Pleione. Zeus placed them in the sky to protect them from Orion\'s pursuit. Cultures worldwide have legends about these sisters.',
      stars: [
        { name: 'Alcyone', info: 'The brightest of the Pleiades, blue-white giant' },
        { name: 'Atlas', info: 'Binary star, father of the Pleiades' },
        { name: 'Merope', info: 'The only sister who married a mortal' }
      ],
      features: ['Young star cluster (~100 million years old)', 'Blue reflection nebulae', 'Over 1,000 stars confirmed', 'Visible to naked eye'],
      significance: 'Used for navigation and seasonal calendars by numerous ancient cultures. In Japan, known as Subaru (inspiration for the car brand).',
      astroSignificance: 'Represents sisterhood, unity, and divine feminine energy. Associated with new beginnings and spiritual awakening.',
      color: '#87CEEB'
    },
    {
      name: 'Draco',
      type: 'Circumpolar Constellation',
      visibility: 'Year-round (Northern Hemisphere)',
      brightestStar: 'Eltanin',
      description: 'The Dragon winds between Ursa Major and Ursa Minor in the northern sky. Despite its large size, its stars are relatively faint.',
      mythology: 'Represents Ladon, the dragon who guarded the golden apples in the Garden of the Hesperides. Hercules slayed the dragon during his eleventh labor.',
      stars: [
        { name: 'Eltanin', info: 'Orange giant, "head of the dragon"' },
        { name: 'Thuban', info: 'Was the North Star in 2700 BC when Egyptians built the pyramids' },
        { name: 'Rastaban', info: 'Binary star system' }
      ],
      features: ['Cat\'s Eye Nebula', 'Spindle Galaxy', 'Draco Dwarf Galaxy', 'Historically significant Thuban'],
      significance: 'Thuban was the pole star during ancient Egyptian times. The Great Pyramid\'s descending passage points to where Thuban was at its lowest point.',
      astroSignificance: 'Symbolizes wisdom, protection, and ancient knowledge. Dragon energy represents power and transformation.',
      color: '#9932CC'
    },
    {
      name: 'Cygnus',
      type: 'Summer Constellation',
      visibility: 'Summer/Autumn (Northern Hemisphere)',
      brightestStar: 'Deneb',
      description: 'The Swan flies along the Milky Way with wings outstretched, forming the Northern Cross asterism. One of the most recognizable summer constellations.',
      mythology: 'Multiple myths exist: Zeus transformed into a swan, Orpheus placed in the sky as a swan, or Phaethon\'s friend who dove into the river to save him and was transformed into a swan.',
      stars: [
        { name: 'Deneb', info: 'White supergiant, one of the most luminous stars known' },
        { name: 'Albireo', info: 'Beautiful double star, gold and blue' },
        { name: 'Sadr', info: 'Yellow supergiant at the swan\'s chest' }
      ],
      features: ['Northern Cross asterism', 'Cygnus X-1 (black hole)', 'North America Nebula', 'Veil Nebula'],
      significance: 'Contains Cygnus X-1, one of the first black holes identified. Rich in nebulae and star-forming regions.',
      astroSignificance: 'Represents grace, transformation, and bridging worlds. Swan energy is elegant and spiritually significant.',
      color: '#E6E6FA'
    }
  ];

  const starFacts = [
    {
      title: 'Star Life Cycle',
      description: 'Stars are born in nebulae, live for millions to billions of years, and die in spectacular ways depending on their mass.',
      details: 'Smaller stars become white dwarfs, while massive stars explode as supernovae and may become neutron stars or black holes.',
      icon: '⭐'
    },
    {
      title: 'Colors of Stars',
      description: 'Star colors indicate temperature: Blue stars are hottest (~30,000K), white-yellow stars like our Sun are medium (~6,000K), and red stars are coolest (~3,000K).',
      details: 'The color also tells us about the star\'s age and chemical composition.',
      icon: '🌈'
    },
    {
      title: 'Binary Stars',
      description: 'Over half of all stars exist in binary or multiple star systems, orbiting each other in cosmic dances.',
      details: 'Some binary systems are so close they share material, while others are separated by vast distances.',
      icon: '👥'
    },
    {
      title: 'Star Navigation',
      description: 'Ancient sailors used stars for navigation long before modern instruments. The North Star (Polaris) has guided travelers for millennia.',
      details: 'Different cultures developed sophisticated star maps and navigation techniques based on constellations.',
      icon: '🧭'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white star-field">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-12 h-12 text-yellow-400 animate-pulse mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Stars & Constellations
            </h1>
            <Sparkles className="w-12 h-12 text-blue-400 animate-twinkle ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Journey through the cosmic tapestry of stars and discover the ancient stories written in the night sky
          </p>
        </div>
      </section>

      {/* Star Facts Section */}
      <section className="pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            ✨ Fascinating Star Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {starFacts.map((fact, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4 text-center">{fact.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-yellow-400">
                  {fact.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{fact.description}</p>
                <p className="text-gray-400 text-xs">{fact.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constellations Grid */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            🌌 Major Constellations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constellationsData.map((constellation, index) => (
              <div
                key={index}
                className="zodiac-card cursor-pointer group"
                onClick={() => setSelectedConstellation(constellation)}
                style={{
                  background: `linear-gradient(135deg, ${constellation.color}20 0%, ${constellation.color}05 100%)`,
                  borderColor: `${constellation.color}50`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: constellation.color }}>
                      {constellation.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{constellation.type}</p>
                  </div>
                  <Star className="w-12 h-12 group-hover:animate-pulse" style={{ color: constellation.color }} />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Visibility:</span>
                    <span className="font-semibold text-xs">{constellation.visibility}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Brightest Star:</span>
                    <span className="font-semibold">{constellation.brightestStar}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {constellation.description}
                </p>

                <div className="text-center">
                  <button
                    className="text-sm font-semibold hover:underline flex items-center justify-center mx-auto gap-1"
                    style={{ color: constellation.color }}
                  >
                    Explore <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Constellation */}
      {selectedConstellation && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedConstellation(null)}
        >
          <div
            className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Star className="w-16 h-16 animate-pulse" style={{ color: selectedConstellation.color }} />
                <div>
                  <h2 className="text-4xl font-bold" style={{ color: selectedConstellation.color }}>
                    {selectedConstellation.name}
                  </h2>
                  <p className="text-gray-400 text-lg">{selectedConstellation.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedConstellation(null)}
                className="text-4xl hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" style={{ color: selectedConstellation.color }} />
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedConstellation.description}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedConstellation.color }}>
                  Mythology & Legend
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedConstellation.mythology}</p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedConstellation.color }}>
                  Prominent Stars
                </h3>
                <div className="space-y-3">
                  {selectedConstellation.stars.map((star, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Star className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: selectedConstellation.color }} />
                      <div>
                        <p className="font-bold">{star.name}</p>
                        <p className="text-gray-400 text-sm">{star.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: selectedConstellation.color }}>
                  Notable Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedConstellation.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <Sparkles className="w-4 h-4" style={{ color: selectedConstellation.color }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: selectedConstellation.color }}>
                    Historical Significance
                  </h3>
                  <p className="text-gray-300 text-sm">{selectedConstellation.significance}</p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: selectedConstellation.color }}>
                    Astrological Meaning
                  </h3>
                  <p className="text-gray-300 text-sm">{selectedConstellation.astroSignificance}</p>
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

export default StarsConstellations;
