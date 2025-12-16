'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import { Heart, Users, Sparkles, Star, TrendingUp, Flame } from 'lucide-react'

function LoveCalculator() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name1: '',
    zodiac1: '',
    name2: '',
    zodiac2: ''
  })
  const [result, setResult] = useState(null)
  const [calculating, setCalculating] = useState(false)

  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

  const compatibility = {
    Aries: { best: ['Leo', 'Sagittarius', 'Gemini'], good: ['Aquarius', 'Libra'], challenging: ['Cancer', 'Capricorn'] },
    Taurus: { best: ['Virgo', 'Capricorn', 'Cancer'], good: ['Pisces', 'Scorpio'], challenging: ['Leo', 'Aquarius'] },
    Gemini: { best: ['Libra', 'Aquarius', 'Aries'], good: ['Leo', 'Sagittarius'], challenging: ['Virgo', 'Pisces'] },
    Cancer: { best: ['Scorpio', 'Pisces', 'Taurus'], good: ['Virgo', 'Capricorn'], challenging: ['Aries', 'Libra'] },
    Leo: { best: ['Aries', 'Sagittarius', 'Gemini'], good: ['Libra', 'Aquarius'], challenging: ['Taurus', 'Scorpio'] },
    Virgo: { best: ['Taurus', 'Capricorn', 'Cancer'], good: ['Scorpio', 'Pisces'], challenging: ['Gemini', 'Sagittarius'] },
    Libra: { best: ['Gemini', 'Aquarius', 'Leo'], good: ['Aries', 'Sagittarius'], challenging: ['Cancer', 'Capricorn'] },
    Scorpio: { best: ['Cancer', 'Pisces', 'Virgo'], good: ['Taurus', 'Capricorn'], challenging: ['Leo', 'Aquarius'] },
    Sagittarius: { best: ['Aries', 'Leo', 'Libra'], good: ['Gemini', 'Aquarius'], challenging: ['Virgo', 'Pisces'] },
    Capricorn: { best: ['Taurus', 'Virgo', 'Scorpio'], good: ['Cancer', 'Pisces'], challenging: ['Aries', 'Libra'] },
    Aquarius: { best: ['Gemini', 'Libra', 'Sagittarius'], good: ['Aries', 'Leo'], challenging: ['Taurus', 'Scorpio'] },
    Pisces: { best: ['Cancer', 'Scorpio', 'Capricorn'], good: ['Taurus', 'Virgo'], challenging: ['Gemini', 'Sagittarius'] }
  }

  const calculateLove = () => {
    if (!formData.name1 || !formData.name2 || !formData.zodiac1 || !formData.zodiac2) {
      alert('Please fill all fields')
      return
    }

    setCalculating(true)
    setTimeout(() => {
      const name1 = formData.name1.toLowerCase()
      const name2 = formData.name2.toLowerCase()
      
      let baseScore = 0
      for (let i = 0; i < Math.min(name1.length, name2.length); i++) {
        baseScore += name1.charCodeAt(i) + name2.charCodeAt(i)
      }
      baseScore = (baseScore % 51) + 50

      const compat = compatibility[formData.zodiac1]
      let adjustment = 0
      
      if (compat.best.includes(formData.zodiac2)) {
        adjustment = 15
      } else if (compat.good.includes(formData.zodiac2)) {
        adjustment = 5
      } else if (compat.challenging.includes(formData.zodiac2)) {
        adjustment = -10
      }

      const finalScore = Math.min(100, Math.max(45, baseScore + adjustment))
      
      let level, message, advice, color
      if (finalScore >= 90) {
        level = 'Soulmates!'
        message = 'Your cosmic connection is extraordinary! The stars align perfectly for you two.'
        advice = 'Nurture this rare connection with open communication and shared dreams.'
        color = 'from-pink-500 to-red-500'
      } else if (finalScore >= 75) {
        level = 'Excellent Match'
        message = 'Strong compatibility! You complement each other beautifully.'
        advice = 'Continue building on your solid foundation with trust and adventure.'
        color = 'from-purple-500 to-pink-500'
      } else if (finalScore >= 60) {
        level = 'Good Potential'
        message = 'Promising connection with room to grow together.'
        advice = 'Focus on understanding each other\'s differences and finding common ground.'
        color = 'from-blue-500 to-purple-500'
      } else {
        level = 'Needs Work'
        message = 'Challenges ahead, but love can overcome with effort.'
        advice = 'Communication and compromise are key. Learn to appreciate your differences.'
        color = 'from-orange-500 to-yellow-500'
      }

      setResult({
        percentage: finalScore,
        level,
        message,
        advice,
        color,
        zodiacMatch: compat.best.includes(formData.zodiac2) ? 'Perfect' : 
                     compat.good.includes(formData.zodiac2) ? 'Good' : 'Challenging'
      })
      setCalculating(false)
    }, 2000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar2 />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="w-20 h-20 text-pink-500 animate-pulse" />
                <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-twinkle" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Love Compatibility Calculator
            </h1>
            <p className="text-gray-300 text-lg">
              Discover your cosmic connection through astrology
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">First Person</h3>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name1"
                    value={formData.name1}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Zodiac Sign</label>
                  <select
                    name="zodiac1"
                    value={formData.zodiac1}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">Select sign</option>
                    {zodiacSigns.map(sign => (
                      <option key={sign} value={sign}>{sign}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <h3 className="text-xl font-bold text-white">Second Person</h3>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name2"
                    value={formData.name2}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Zodiac Sign</label>
                  <select
                    name="zodiac2"
                    value={formData.zodiac2}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">Select sign</option>
                    {zodiacSigns.map(sign => (
                      <option key={sign} value={sign}>{sign}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={calculateLove}
              disabled={calculating}
              className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 disabled:opacity-50"
            >
              {calculating ? (
                <span className="flex items-center justify-center">
                  <Flame className="w-5 h-5 mr-2 animate-pulse" />
                  Calculating...
                </span>
              ) : (
                'Calculate Love Percentage'
              )}
            </button>
          </div>

          {result && (
            <div className="glass-effect rounded-3xl p-8 animate-float">
              <div className="text-center mb-8">
                <div className={`inline-block p-8 rounded-full bg-gradient-to-br ${result.color} mb-6`}>
                  <h2 className="text-6xl font-bold text-white">{result.percentage}%</h2>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{result.level}</h3>
                <p className="text-gray-300 text-lg">{result.message}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Love Score</p>
                  <p className="text-white font-bold text-xl">{result.percentage}/100</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Zodiac Match</p>
                  <p className="text-white font-bold text-xl">{result.zodiacMatch}</p>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <Flame className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Chemistry</p>
                  <p className="text-white font-bold text-xl">
                    {result.percentage >= 80 ? 'High' : result.percentage >= 60 ? 'Medium' : 'Growing'}
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6">
                <h4 className="text-white font-bold mb-2 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Cosmic Advice
                </h4>
                <p className="text-gray-300">{result.advice}</p>
              </div>

              <button
                onClick={() => setResult(null)}
                className="w-full mt-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                Calculate Again
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LoveCalculator