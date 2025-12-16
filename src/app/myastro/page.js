'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import { Star, Moon, Sun, TrendingUp, Heart, Briefcase, DollarSign, Activity, Calendar, Sparkles, ChevronRight } from 'lucide-react'

function MyAstro() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  const zodiacData = {
    Aries: { element: 'Fire', ruler: 'Mars', color: '#E74C3C', traits: ['Courageous', 'Energetic', 'Passionate'] },
    Taurus: { element: 'Earth', ruler: 'Venus', color: '#27AE60', traits: ['Reliable', 'Patient', 'Practical'] },
    Gemini: { element: 'Air', ruler: 'Mercury', color: '#F39C12', traits: ['Adaptable', 'Curious', 'Social'] },
    Cancer: { element: 'Water', ruler: 'Moon', color: '#3498DB', traits: ['Intuitive', 'Emotional', 'Protective'] },
    Leo: { element: 'Fire', ruler: 'Sun', color: '#E67E22', traits: ['Confident', 'Creative', 'Generous'] },
    Virgo: { element: 'Earth', ruler: 'Mercury', color: '#16A085', traits: ['Analytical', 'Practical', 'Kind'] },
    Libra: { element: 'Air', ruler: 'Venus', color: '#E91E63', traits: ['Diplomatic', 'Fair', 'Social'] },
    Scorpio: { element: 'Water', ruler: 'Pluto', color: '#8E44AD', traits: ['Passionate', 'Resourceful', 'Brave'] },
    Sagittarius: { element: 'Fire', ruler: 'Jupiter', color: '#9B59B6', traits: ['Optimistic', 'Adventurous', 'Honest'] },
    Capricorn: { element: 'Earth', ruler: 'Saturn', color: '#34495E', traits: ['Disciplined', 'Responsible', 'Ambitious'] },
    Aquarius: { element: 'Air', ruler: 'Uranus', color: '#3498DB', traits: ['Original', 'Independent', 'Humanitarian'] },
    Pisces: { element: 'Water', ruler: 'Neptune', color: '#1ABC9C', traits: ['Compassionate', 'Artistic', 'Intuitive'] }
  }

  const dailyInsights = {
    love: "Venus is in a favorable position today. Your emotional connections deepen.",
    career: "Mercury's influence brings clarity to your professional goals.",
    finance: "Jupiter's energy suggests opportunities for financial growth.",
    health: "Mars encourages physical activity. Focus on maintaining balance.",
    lucky: {
      number: Math.floor(Math.random() * 99) + 1,
      color: ['Purple', 'Gold', 'Blue', 'Green'][Math.floor(Math.random() * 4)],
      time: ['Morning', 'Afternoon', 'Evening'][Math.floor(Math.random() * 3)]
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('jwtToken')
    if (!token) {
      router.push('/loginPage')
      return
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        // Ensure all fields have default values
        const userData = {
          firstName: response.data.firstName || '',
          lastName: response.data.lastName || '',
          email: response.data.email || '',
          dob: response.data.dob || '',
          birthTime: response.data.birthTime || '',
          birthPlace: response.data.birthPlace || '',
          sunSign: response.data.sunSign || '',
          moonSign: response.data.moonSign || '',
          risingSign: response.data.risingSign || '',
          ...response.data
        }
        setUser(userData)
        setLoading(false)
      } catch (err) {
        console.error('Profile fetch error:', err)
        setError('Failed to fetch profile data: ' + (err.response?.data?.msg || err.message))
        setLoading(false)
      }
    }

    fetchProfile()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar2 />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-white text-xl animate-pulse">Loading your cosmic insights...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar2 />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-red-400 text-xl">{error}</div>
        </div>
      </div>
    )
  }

  if (!user) return null

  const sunSignData = user.sunSign ? zodiacData[user.sunSign] : null
  const moonSignData = user.moonSign ? zodiacData[user.moonSign] : null
  const risingSignData = user.risingSign ? zodiacData[user.risingSign] : null

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar2 />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Astro Dashboard
            </h1>
            <p className="text-gray-300 text-lg">
              Your personalized cosmic insights for {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Check if profile is complete */}
          {(!user.sunSign || !user.birthTime || !user.birthPlace) && (
            <div className="glass-effect rounded-2xl p-6 mb-8 border-2 border-yellow-500/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Complete Your Profile</h3>
                    <p className="text-gray-300">Add your birth details for accurate astrology readings</p>
                  </div>
                </div>
                <button
                  onClick={() => router.push('/profile')}
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
                >
                  Complete Profile
                </button>
              </div>
            </div>
          )}

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Big Three */}
            <div className="lg:col-span-2 space-y-8">
              {/* Sun Sign Card */}
              {sunSignData && (
                <div className="glass-effect rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <Sun className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Sun Sign</h2>
                        <p className="text-gray-300">Your Core Identity</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h3 className="text-3xl font-bold" style={{ color: sunSignData.color }}>
                        {user.sunSign}
                      </h3>
                      <p className="text-gray-300">{sunSignData.element}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <p className="text-gray-400 text-sm mb-2">Ruling Planet</p>
                      <p className="text-white font-semibold">{sunSignData.ruler}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <p className="text-gray-400 text-sm mb-2">Element</p>
                      <p className="text-white font-semibold">{sunSignData.element}</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-3">Key Traits</p>
                    <div className="flex flex-wrap gap-2">
                      {sunSignData.traits.map((trait, idx) => (
                        <span key={idx} className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Moon & Rising Signs */}
              <div className="grid md:grid-cols-2 gap-6">
                {moonSignData && (
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                        <Moon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Moon Sign</h3>
                        <p className="text-gray-400 text-sm">Emotions</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2" style={{ color: moonSignData.color }}>
                      {user.moonSign}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">{moonSignData.element} Element</p>
                    <div className="space-y-1">
                      {moonSignData.traits.slice(0, 2).map((trait, idx) => (
                        <p key={idx} className="text-gray-400 text-sm">• {trait}</p>
                      ))}
                    </div>
                  </div>
                )}

                {risingSignData && (
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Rising Sign</h3>
                        <p className="text-gray-400 text-sm">Outer Self</p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2" style={{ color: risingSignData.color }}>
                      {user.risingSign}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">{risingSignData.element} Element</p>
                    <div className="space-y-1">
                      {risingSignData.traits.slice(0, 2).map((trait, idx) => (
                        <p key={idx} className="text-gray-400 text-sm">• {trait}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Daily Insights */}
              <div className="glass-effect rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Today's Cosmic Guidance
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="w-5 h-5 text-pink-400" />
                      <h3 className="text-white font-semibold">Love & Relationships</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{dailyInsights.love}</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                      <h3 className="text-white font-semibold">Career & Success</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{dailyInsights.career}</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <h3 className="text-white font-semibold">Finance & Wealth</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{dailyInsights.finance}</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Activity className="w-5 h-5 text-red-400" />
                      <h3 className="text-white font-semibold">Health & Wellness</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{dailyInsights.health}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Info */}
            <div className="space-y-6">
              {/* Lucky Elements */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Today's Lucky Elements
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Lucky Number</p>
                    <p className="text-3xl font-bold text-yellow-400">{dailyInsights.lucky.number}</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Lucky Color</p>
                    <p className="text-xl font-bold text-purple-300">{dailyInsights.lucky.color}</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Best Time</p>
                    <p className="text-xl font-bold text-blue-300">{dailyInsights.lucky.time}</p>
                  </div>
                </div>
              </div>

              {/* Birth Details */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Birth Details</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Date of Birth</p>
                    <p className="text-white font-semibold">
                      {user.dob ? new Date(user.dob).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      }) : 'Not specified'}
                    </p>
                  </div>

                  {user.birthTime && (
                    <div>
                      <p className="text-gray-400 text-sm">Birth Time</p>
                      <p className="text-white font-semibold">{user.birthTime}</p>
                    </div>
                  )}

                  {user.birthPlace && (
                    <div>
                      <p className="text-gray-400 text-sm">Birth Place</p>
                      <p className="text-white font-semibold">{user.birthPlace}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Explore More</h3>
                
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/horoscope')}
                    className="w-full flex items-center justify-between px-4 py-3 bg-purple-600/30 hover:bg-purple-600/50 text-white rounded-lg transition-colors"
                  >
                    <span>Daily Horoscope</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => router.push('/birthchart')}
                    className="w-full flex items-center justify-between px-4 py-3 bg-purple-600/30 hover:bg-purple-600/50 text-white rounded-lg transition-colors"
                  >
                    <span>Birth Chart</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => router.push('/features/lovepercent')}
                    className="w-full flex items-center justify-between px-4 py-3 bg-purple-600/30 hover:bg-purple-600/50 text-white rounded-lg transition-colors"
                  >
                    <span>Love Calculator</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => router.push('/profile')}
                    className="w-full flex items-center justify-between px-4 py-3 bg-purple-600/30 hover:bg-purple-600/50 text-white rounded-lg transition-colors"
                  >
                    <span>Edit Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyAstro