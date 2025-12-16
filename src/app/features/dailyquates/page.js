'use client'
import React, { useState, useEffect } from 'react'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import { Quote, RefreshCw, Heart, Star, Sparkles, TrendingUp, Moon, Sun } from 'lucide-react'

function DailyQuotes() {
  const [currentQuote, setCurrentQuote] = useState(null)
  const [category, setCategory] = useState('all')

  const quotes = {
    motivation: [
      { text: "The stars don't just shine in the sky, they shine within you too.", author: "Ancient Wisdom", zodiac: "Leo" },
      { text: "Your present circumstances don't determine where you can go; they merely determine where you start.", author: "Cosmic Truth", zodiac: "Aries" },
      { text: "Trust the timing of your life. The universe has a plan.", author: "Spiritual Guide", zodiac: "Sagittarius" },
      { text: "You are made of stardust and wishes and magical things.", author: "Cosmic Whisper", zodiac: "Pisces" },
      { text: "The cosmos is within us. We are made of star-stuff.", author: "Carl Sagan", zodiac: "Aquarius" }
    ],
    love: [
      { text: "Love is written in the stars, but lived in the heart.", author: "Astrological Wisdom", zodiac: "Libra" },
      { text: "The universe brought us together for a reason.", author: "Cosmic Romance", zodiac: "Cancer" },
      { text: "True love is a cosmic connection that transcends time and space.", author: "Celestial Truth", zodiac: "Scorpio" },
      { text: "In a universe of billions, our souls found each other.", author: "Starlight Wisdom", zodiac: "Pisces" },
      { text: "Love is the gravity that pulls hearts together.", author: "Cosmic Love", zodiac: "Taurus" }
    ],
    wisdom: [
      { text: "The cosmos is not outside of you. Look inside yourself.", author: "Mystic Sage", zodiac: "Virgo" },
      { text: "As above, so below. As within, so without.", author: "Hermes Trismegistus", zodiac: "Capricorn" },
      { text: "The universe whispers to those who listen with their heart.", author: "Ancient Knowledge", zodiac: "Cancer" },
      { text: "Your thoughts create ripples across the cosmos.", author: "Quantum Wisdom", zodiac: "Gemini" },
      { text: "Embrace the mystery, for in it lies infinite possibility.", author: "Cosmic Teacher", zodiac: "Pisces" }
    ],
    success: [
      { text: "Align with your purpose, and the universe conspires to help you.", author: "Success Mantra", zodiac: "Capricorn" },
      { text: "Your potential is as limitless as the universe itself.", author: "Achievement Guide", zodiac: "Leo" },
      { text: "Success is not a destination, it's a constellation of efforts.", author: "Cosmic Success", zodiac: "Aries" },
      { text: "The universe rewards bold action and clear intention.", author: "Manifestation Master", zodiac: "Sagittarius" },
      { text: "Build your dreams on a foundation of stars.", author: "Success Wisdom", zodiac: "Taurus" }
    ],
    peace: [
      { text: "Peace is found when you align with the rhythm of the cosmos.", author: "Zen Master", zodiac: "Libra" },
      { text: "In the stillness, hear the wisdom of the universe.", author: "Peaceful Heart", zodiac: "Cancer" },
      { text: "Let go and let the universe guide you home.", author: "Inner Peace", zodiac: "Pisces" },
      { text: "Balance is the key to cosmic harmony.", author: "Ancient Balance", zodiac: "Libra" },
      { text: "Find peace in knowing you are exactly where you need to be.", author: "Present Moment", zodiac: "Taurus" }
    ]
  }

  const allQuotes = Object.values(quotes).flat()

  useEffect(() => {
    selectRandomQuote()
  }, [])

  const selectRandomQuote = () => {
    const quotesToChooseFrom = category === 'all' ? allQuotes : quotes[category]
    const randomIndex = Math.floor(Math.random() * quotesToChooseFrom.length)
    setCurrentQuote(quotesToChooseFrom[randomIndex])
  }

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    setTimeout(() => {
      const quotesToChooseFrom = newCategory === 'all' ? allQuotes : quotes[newCategory]
      const randomIndex = Math.floor(Math.random() * quotesToChooseFrom.length)
      setCurrentQuote(quotesToChooseFrom[randomIndex])
    }, 300)
  }

  const getIcon = () => {
    switch(category) {
      case 'motivation': return <TrendingUp className="w-8 h-8" />
      case 'love': return <Heart className="w-8 h-8" />
      case 'wisdom': return <Star className="w-8 h-8" />
      case 'success': return <Sparkles className="w-8 h-8" />
      case 'peace': return <Moon className="w-8 h-8" />
      default: return <Sun className="w-8 h-8" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar2 />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Quote className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Daily Cosmic Quotes
            </h1>
            <p className="text-gray-300 text-lg">
              Words of wisdom from the universe to guide your journey
            </p>
          </div>

          {/* Category Filters */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 text-center">Choose Your Inspiration</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'motivation', 'love', 'wisdom', 'success', 'peace'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    category === cat
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Quote Display */}
          {currentQuote && (
            <div className="glass-effect rounded-3xl p-12 mb-8 text-center animate-float">
              <div className="text-purple-400 mb-8">
                {getIcon()}
              </div>
              
              <Quote className="w-12 h-12 text-purple-300/30 mx-auto mb-6" />
              
              <p className="text-2xl md:text-3xl text-white font-light mb-8 leading-relaxed">
                "{currentQuote.text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <span className="text-lg">— {currentQuote.author}</span>
                <span className="text-purple-400">•</span>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{currentQuote.zodiac}</span>
                </div>
              </div>
            </div>
          )}

          {/* Refresh Button */}
          <div className="text-center mb-12">
            <button
              onClick={selectRandomQuote}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Get New Quote</span>
            </button>
          </div>

          {/* Quote Categories Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Motivation</h3>
              <p className="text-gray-300 text-sm">Fuel your cosmic journey</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Love</h3>
              <p className="text-gray-300 text-sm">Connect with universal love</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Wisdom</h3>
              <p className="text-gray-300 text-sm">Ancient cosmic knowledge</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DailyQuotes