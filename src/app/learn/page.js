'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import { BookOpen, Lightbulb, Star, Sparkles, GraduationCap, Info } from 'lucide-react';

const LearningCenter = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const learningCategories = [
    {
      title: 'Astrology Basics',
      icon: '📚',
      color: '#667eea',
      articles: [
        {
          title: 'What is Astrology?',
          content: 'Astrology is an ancient practice that studies the correlation between celestial positions and events on Earth. It\'s based on the belief that the positions of the sun, moon, planets, and stars at the time of your birth shape your personality, relationships, and life path. While often confused with astronomy (the scientific study of celestial objects), astrology is a symbolic language that helps us understand ourselves and our place in the universe.',
          keyPoints: [
            'Ancient wisdom dating back thousands of years',
            'Based on observation of celestial patterns',
            'Used for self-reflection and guidance',
            'Not deterministic but indicative of energies and potentials'
          ]
        },
        {
          title: 'The Zodiac Wheel',
          content: 'The zodiac is divided into 12 signs, each spanning 30 degrees of the 360-degree ecliptic (the path the Sun appears to travel around Earth). These signs represent archetypal energies and characteristics. The zodiac begins with Aries at the spring equinox and moves through all signs, completing the cycle with Pisces.',
          keyPoints: [
            '12 signs representing different archetypal energies',
            'Each sign has unique traits and characteristics',
            'Signs are grouped by element and modality',
            'The zodiac reflects the cycle of seasons and growth'
          ]
        },
        {
          title: 'Elements: Fire, Earth, Air, Water',
          content: 'The four elements are fundamental to astrological understanding. Fire signs (Aries, Leo, Sagittarius) are passionate and dynamic. Earth signs (Taurus, Virgo, Capricorn) are practical and grounded. Air signs (Gemini, Libra, Aquarius) are intellectual and communicative. Water signs (Cancer, Scorpio, Pisces) are emotional and intuitive.',
          keyPoints: [
            'Fire: Action, passion, inspiration, energy',
            'Earth: Stability, practicality, material world',
            'Air: Intellect, communication, social connection',
            'Water: Emotion, intuition, depth, empathy'
          ]
        }
      ]
    },
    {
      title: 'Birth Chart Fundamentals',
      icon: '🎯',
      color: '#f093fb',
      articles: [
        {
          title: 'Understanding Your Birth Chart',
          content: 'Your birth chart is a map of the sky at the exact moment and location of your birth. It shows where all the planets were positioned in the zodiac signs and houses. This cosmic snapshot reveals your potential, challenges, talents, and life themes. No two birth charts are exactly alike, making each person\'s astrological profile unique.',
          keyPoints: [
            'Requires exact birth time, date, and location',
            'Shows planetary positions in signs and houses',
            'Reveals aspects (angles) between planets',
            'Provides a complete picture of your cosmic blueprint'
          ]
        },
        {
          title: 'The Big Three: Sun, Moon, Rising',
          content: 'Your Sun sign represents your core identity and life purpose. Your Moon sign reveals your emotional nature and inner world. Your Rising sign (Ascendant) shows how you appear to others and approach life. Together, these three form the foundation of your astrological personality.',
          keyPoints: [
            'Sun: Conscious self, ego, life force, purpose',
            'Moon: Emotions, instincts, needs, inner child',
            'Rising: Outer personality, first impression, approach to life',
            'All three are equally important for self-understanding'
          ]
        },
        {
          title: 'The 12 Houses',
          content: 'Houses divide the birth chart into 12 sections, each governing different life areas. The 1st house rules self and identity, the 2nd rules values and possessions, the 3rd communication, and so on through the 12th house of spirituality and the subconscious. Planets in different houses show where their energies are most active in your life.',
          keyPoints: [
            'Each house represents a life area or theme',
            'Houses show where planetary energies manifest',
            'Angular houses (1, 4, 7, 10) are most powerful',
            'Empty houses are still important and influenced by their ruling sign'
          ]
        }
      ]
    },
    {
      title: 'Planetary Influences',
      icon: '🪐',
      color: '#4facfe',
      articles: [
        {
          title: 'Personal Planets: Sun to Mars',
          content: 'The personal planets (Sun, Moon, Mercury, Venus, Mars) move quickly through the zodiac and most directly influence your personality and daily life. They represent core aspects of self: identity (Sun), emotions (Moon), communication (Mercury), love (Venus), and action (Mars).',
          keyPoints: [
            'Move quickly, change signs frequently',
            'Directly affect personality and behavior',
            'Most important for understanding yourself',
            'Shape your immediate responses and preferences'
          ]
        },
        {
          title: 'Social Planets: Jupiter and Saturn',
          content: 'Jupiter and Saturn are the social planets, bridging personal and collective energies. Jupiter brings growth, expansion, and opportunities, while Saturn teaches discipline, responsibility, and life lessons. Their transits mark important life phases and developmental periods.',
          keyPoints: [
            'Jupiter: Luck, growth, wisdom, expansion (1 year per sign)',
            'Saturn: Structure, discipline, karma, lessons (2.5 years per sign)',
            'Jupiter expands, Saturn contracts',
            'Both essential for personal development'
          ]
        },
        {
          title: 'Outer Planets: Uranus, Neptune, Pluto',
          content: 'The outer planets move slowly and influence entire generations. Uranus brings revolution and innovation, Neptune dissolves boundaries and enhances spirituality, and Pluto transforms through death and rebirth. Their personal significance comes from their house placement and aspects to personal planets.',
          keyPoints: [
            'Uranus: Revolution, innovation, sudden change (7 years per sign)',
            'Neptune: Dreams, illusions, spirituality (14 years per sign)',
            'Pluto: Transformation, power, deep change (12-31 years per sign)',
            'Influence generations and collective consciousness'
          ]
        }
      ]
    },
    {
      title: 'Astrological Aspects',
      icon: '🔗',
      color: '#fa709a',
      articles: [
        {
          title: 'Understanding Aspects',
          content: 'Aspects are angles between planets in your birth chart. They show how planetary energies interact, creating harmony or tension. Major aspects include conjunction (0°), sextile (60°), square (90°), trine (120°), and opposition (180°). Each aspect type has a different quality and influence.',
          keyPoints: [
            'Conjunction: Blending of energies, intensity',
            'Sextile: Opportunity, ease, talent',
            'Square: Challenge, tension, growth catalyst',
            'Trine: Harmony, natural ability, flow',
            'Opposition: Balance seeking, awareness, integration'
          ]
        },
        {
          title: 'Harmonious vs. Challenging Aspects',
          content: 'Harmonious aspects (trines, sextiles) indicate natural talents and areas of ease, while challenging aspects (squares, oppositions) point to growth areas and life lessons. Both types are valuable: harmonious aspects show where you flow naturally, while challenging aspects indicate where you\'ll develop strength through overcoming obstacles.',
          keyPoints: [
            'No aspect is purely "good" or "bad"',
            'Challenging aspects drive growth and achievement',
            'Harmonious aspects can indicate complacency',
            'Balance of both creates a well-rounded personality'
          ]
        }
      ]
    },
    {
      title: 'Transits & Timing',
      icon: '⏰',
      color: '#43e97b',
      articles: [
        {
          title: 'What are Transits?',
          content: 'Transits occur when planets in the current sky form aspects to planets in your birth chart. They activate different parts of your chart at different times, triggering events, opportunities, and challenges. Understanding transits helps you work with cosmic timing rather than against it.',
          keyPoints: [
            'Current planetary positions affecting your birth chart',
            'Slow-moving planets create longer-term influences',
            'Fast-moving planets trigger daily/weekly events',
            'Transits don\'t force events but open doors'
          ]
        },
        {
          title: 'Retrogrades Explained',
          content: 'When a planet appears to move backward in the sky (from Earth\'s perspective), it\'s retrograde. This creates a time for review, revision, and internal processing related to that planet\'s themes. Mercury retrograde affects communication and technology, Venus retrograde impacts relationships and values, and so on.',
          keyPoints: [
            'Planets appear to move backward (optical illusion)',
            'Time for reflection and reassessment',
            'Not inherently negative, just introspective',
            'Different planets retrograde affect different life areas'
          ]
        },
        {
          title: 'Saturn Return',
          content: 'Saturn Return occurs around ages 29-30 and 58-60 when Saturn returns to its birth position. These are major life milestones that push you toward maturity, responsibility, and authenticity. While challenging, Saturn Returns are ultimately about building lasting structures in your life.',
          keyPoints: [
            'Occurs approximately every 29.5 years',
            'Major life assessment and restructuring period',
            'Pushes you toward authenticity and responsibility',
            'Second return around 58-60 brings wisdom'
          ]
        }
      ]
    },
    {
      title: 'Practical Applications',
      icon: '🎨',
      color: '#fdcb6e',
      articles: [
        {
          title: 'Using Astrology for Self-Understanding',
          content: 'Astrology is a powerful tool for self-reflection and personal growth. By understanding your birth chart, you gain insights into your strengths, challenges, patterns, and potentials. This awareness empowers you to make conscious choices aligned with your authentic nature.',
          keyPoints: [
            'Reveals natural talents and abilities',
            'Illuminates shadow aspects needing integration',
            'Helps understand emotional patterns',
            'Provides framework for self-acceptance'
          ]
        },
        {
          title: 'Relationship Compatibility',
          content: 'Synastry (comparing two birth charts) reveals relationship dynamics, attractions, and challenges. While no aspect guarantees success or failure, understanding cosmic compatibility helps navigate relationships with greater awareness and compassion.',
          keyPoints: [
            'Compare Sun, Moon, Venus, Mars placements',
            'Look for complementary elements',
            'Challenging aspects can create growth',
            'No combination is "doomed" or "perfect"'
          ]
        },
        {
          title: 'Career & Life Purpose',
          content: 'Your Midheaven (10th house cusp), Sun sign, and 6th house reveal career inclinations and life purpose. Saturn shows where you build mastery, Jupiter where you find opportunities, and the North Node points toward your soul\'s growth direction.',
          keyPoints: [
            'Midheaven: Public role and career path',
            'Sun: Core purpose and life mission',
            '6th House: Daily work and service',
            'North Node: Soul growth direction'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-12 h-12 text-blue-400 animate-float mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Astrology Learning Center
            </h1>
            <BookOpen className="w-12 h-12 text-yellow-400 animate-pulse ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
            Master the ancient art of astrology with our comprehensive guides and educational resources
          </p>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {learningCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl">{category.icon}</span>
                <h2 className="text-4xl font-bold" style={{ color: category.color }}>
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.articles.map((article, artIndex) => (
                  <div
                    key={artIndex}
                    className="zodiac-card cursor-pointer group"
                    onClick={() => setSelectedArticle({ ...article, categoryColor: category.color })}
                    style={{
                      background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}05 100%)`,
                      borderColor: `${category.color}50`
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold pr-2" style={{ color: category.color }}>
                        {article.title}
                      </h3>
                      <Info className="w-6 h-6 flex-shrink-0 group-hover:scale-125 transition-transform" style={{ color: category.color }} />
                    </div>

                    <p className="text-gray-300 text-sm line-clamp-4 mb-4">
                      {article.content}
                    </p>

                    <div className="text-center">
                      <button
                        className="text-sm font-semibold hover:underline"
                        style={{ color: category.color }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-4xl font-bold pr-8" style={{ color: selectedArticle.categoryColor }}>
                {selectedArticle.title}
              </h2>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-4xl hover:text-red-500 transition-colors flex-shrink-0"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedArticle.content}
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: selectedArticle.categoryColor }}>
                  <Lightbulb className="w-6 h-6" />
                  Key Points
                </h3>
                <ul className="space-y-3">
                  {selectedArticle.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Star className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: selectedArticle.categoryColor }} />
                      <span>{point}</span>
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

export default LearningCenter;
