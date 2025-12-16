'use client'
import React, { useState } from 'react'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import { Heart, Users, Star, Sparkles, TrendingUp, Flame, Check, X } from 'lucide-react'

function ZodiacMatches() {
  const [selectedZodiac, setSelectedZodiac] = useState('Aries')

  const zodiacMatches = {
    Aries: {
      bestMatches: ['Leo', 'Sagittarius', 'Gemini'],
      goodMatches: ['Aquarius', 'Libra'],
      challenging: ['Cancer', 'Capricorn'],
      traits: ['Passionate', 'Independent', 'Energetic'],
      color: 'from-red-500 to-orange-500',
      element: 'Fire'
    },
    Taurus: {
      bestMatches: ['Virgo', 'Capricorn', 'Cancer'],
      goodMatches: ['Pisces', 'Scorpio'],
      challenging: ['Leo', 'Aquarius'],
      traits: ['Loyal', 'Practical', 'Sensual'],
      color: 'from-green-500 to-emerald-500',
      element: 'Earth'
    },
    Gemini: {
      bestMatches: ['Libra', 'Aquarius', 'Aries'],
      goodMatches: ['Leo', 'Sagittarius'],
      challenging: ['Virgo', 'Pisces'],
      traits: ['Curious', 'Adaptable', 'Social'],
      color: 'from-yellow-500 to-amber-500',
      element: 'Air'
    },
    Cancer: {
      bestMatches: ['Scorpio', 'Pisces', 'Taurus'],
      goodMatches: ['Virgo', 'Capricorn'],
      challenging: ['Aries', 'Libra'],
      traits: ['Nurturing', 'Emotional', 'Protective'],
      color: 'from-blue-400 to-cyan-400',
      element: 'Water'
    },
    Leo: {
      bestMatches: ['Aries', 'Sagittarius', 'Gemini'],
      goodMatches: ['Libra', 'Aquarius'],
      challenging: ['Taurus', 'Scorpio'],
      traits: ['Confident', 'Generous', 'Creative'],
      color: 'from-yellow-600 to-orange-600',
      element: 'Fire'
    },
    Virgo: {
      bestMatches: ['Taurus', 'Capricorn', 'Cancer'],
      goodMatches: ['Scorpio', 'Pisces'],
      challenging: ['Gemini', 'Sagittarius'],
      traits: ['Analytical', 'Reliable', 'Perfectionist'],
      color: 'from-teal-500 to-green-600',
      element: 'Earth'
    },
    Libra: {
      bestMatches: ['Gemini', 'Aquarius', 'Leo'],
      goodMatches: ['Aries', 'Sagittarius'],
      challenging: ['Cancer', 'Capricorn'],
      traits: ['Diplomatic', 'Charming', 'Balanced'],
      color: 'from-pink-500 to-rose-500',
      element: 'Air'
    },
    Scorpio: {
      bestMatches: ['Cancer', 'Pisces', 'Virgo'],
      goodMatches: ['Taurus', 'Capricorn'],
      challenging: ['Leo', 'Aquarius'],
      traits: ['Intense', 'Passionate', 'Mysterious'],
      color: 'from-purple-700 to-indigo-700',
      element: 'Water'
    },
    Sagittarius: {
      bestMatches: ['Aries', 'Leo', 'Libra'],
      goodMatches: ['Gemini', 'Aquarius'],
      challenging: ['Virgo', 'Pisces'],
      traits: ['Adventurous', 'Optimistic', 'Honest'],
      color: 'from-purple-500 to-violet-500',
      element: 'Fire'
    },
    Capricorn: {
      bestMatches: ['Taurus', 'Virgo', 'Scorpio'],
      goodMatches: ['Cancer', 'Pisces'],
      challenging: ['Aries', 'Libra'],
      traits: ['Ambitious', 'Disciplined', 'Practical'],
      color: 'from-gray-600 to-slate-700',
      element: 'Earth'
    },
    Aquarius: {
      bestMatches: ['Gemini', 'Libra', 'Sagittarius'],
      goodMatches: ['Aries', 'Leo'],
      challenging: ['Taurus', 'Scorpio'],
      traits: ['Independent', 'Innovative', 'Humanitarian'],
      color: 'from-cyan-500 to-blue-600',
      element: 'Air'
    },
    Pisces: {
      bestMatches: ['Cancer', 'Scorpio', 'Capricorn'],
      goodMatches: ['Taurus', 'Virgo'],
      challenging: ['Gemini', 'Sagittarius'],
      traits: ['Intuitive', 'Compassionate', 'Artistic'],
      color: 'from-teal-400 to-cyan-500',
      element: 'Water'
    }
  }

  const currentMatch = zodiacMatches[selectedZodiac]
  const allSigns = Object.keys(zodiacMatches)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar2 />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Zodiac Compatibility Matches
            </h1>
            <p className="text-slate-300 text-lg">
              Discover your perfect cosmic connections
            </p>
          </div>

          {/* Zodiac Selector */}
          <div className="glass-effect rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Select Your Zodiac Sign</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allSigns.map(sign => (
                <button
                  key={sign}
                  onClick={() => setSelectedZodiac(sign)}
                  className={`p-4 rounded-xl font-semibold transition-all transform hover:scale-105 border ${
                    selectedZodiac === sign
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-lg'
                      : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {sign}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Sign Details */}
          <div className="glass-effect rounded-3xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block p-6 rounded-full bg-slate-900 border border-emerald-400/60 mb-4 shadow-lg shadow-emerald-500/40">
                <Star className="w-12 h-12 text-emerald-300" />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gradient">{selectedZodiac}</h2>
              <p className="text-emerald-300 text-lg">{currentMatch.element} Sign</p>
              <div className="flex justify-center space-x-2 mt-4">
                {currentMatch.traits.map((trait, idx) => (
                  <span key={idx} className="px-4 py-2 bg-emerald-500/15 text-emerald-200 rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Best Matches */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-slate-100">Best Matches</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {currentMatch.bestMatches.map(match => (
                  <div key={match} className="glass-effect rounded-xl p-6 border border-emerald-500/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-emerald-300">{match}</h4>
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-200">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm">90-100% Compatibility</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Good Matches */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-slate-100">Good Matches</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentMatch.goodMatches.map(match => (
                  <div key={match} className="glass-effect rounded-xl p-6 border border-cyan-400/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-cyan-200">{match}</h4>
                      <TrendingUp className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-200">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm">70-85% Compatibility</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenging Matches */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <X className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold text-slate-100">Challenging Matches</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentMatch.challenging.map(match => (
                  <div key={match} className="glass-effect rounded-xl p-6 border border-amber-500/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-amber-200">{match}</h4>
                      <X className="w-6 h-6 text-amber-300" />
                    </div>
                    <p className="text-amber-200 text-sm">
                      Requires extra effort and understanding
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Heart className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-slate-100 font-bold mb-2">Love Compatibility</h3>
              <p className="text-slate-300 text-sm">Find your perfect match</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-slate-100 font-bold mb-2">Friendship Bonds</h3>
              <p className="text-slate-300 text-sm">Build lasting connections</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <Sparkles className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-slate-100 font-bold mb-2">Cosmic Harmony</h3>
              <p className="text-slate-300 text-sm">Universal understanding</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ZodiacMatches