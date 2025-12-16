'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import { Calendar, TrendingUp, Heart, Briefcase, DollarSign, Activity, Star, Sparkles, Target, Award } from 'lucide-react'

function YearlyFeedback() {
  const router = useRouter()
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedZodiac, setSelectedZodiac] = useState('')
  const [showPrediction, setShowPrediction] = useState(false)

  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  
  const years = [2024, 2025, 2026]

  const yearlyPredictions = {
    Aries: {
      overview: 'A year of bold initiatives and new beginnings awaits you, Aries. Your natural leadership will shine.',
      love: 'Romance blossoms in unexpected places. Single Aries may find love through adventure, while couples deepen their bond through shared challenges.',
      career: 'Major career advancement opportunities arise. Your innovative ideas gain recognition. Perfect time for entrepreneurial ventures.',
      finance: 'Financial growth through calculated risks. Invest in yourself and your skills. Money flows from multiple sources.',
      health: 'High energy levels throughout the year. Focus on channeling your vitality productively. Regular exercise brings clarity.',
      luckyMonths: ['March', 'July', 'November'],
      challenges: 'Learn patience and consider others\' perspectives before acting impulsively.',
      opportunities: 'Leadership roles, international travel, creative projects'
    },
    Taurus: {
      overview: 'Stability and growth define your year. Focus on building lasting foundations in all areas of life.',
      love: 'Deep emotional connections flourish. Perfect year for commitment. Singles attract stable partners.',
      career: 'Steady progress leads to recognition. Your dedication pays off with promotions or salary increases.',
      finance: 'Excellent year for savings and investments. Real estate and long-term financial planning favored.',
      health: 'Focus on maintaining balance. Yoga and meditation bring inner peace. Watch dietary habits.',
      luckyMonths: ['April', 'August', 'December'],
      challenges: 'Embrace change even when it feels uncomfortable. Flexibility is key.',
      opportunities: 'Property investments, artistic pursuits, skill development'
    },
    Gemini: {
      overview: 'Communication and learning take center stage. Your versatility opens multiple doors.',
      love: 'Intellectual connections deepen relationships. Express your feelings more openly.',
      career: 'Networking brings valuable opportunities. Multiple projects keep you engaged and fulfilled.',
      finance: 'Income from diverse sources. Good year for freelancing and side projects.',
      health: 'Mental health is priority. Practice mindfulness. Respiratory system needs attention.',
      luckyMonths: ['May', 'September', 'January'],
      challenges: 'Avoid spreading yourself too thin. Focus on completing what you start.',
      opportunities: 'Writing projects, teaching, technology ventures, travel'
    },
    Cancer: {
      overview: 'Home and family take precedence. Emotional growth leads to deeper fulfillment.',
      love: 'Nurturing relationships bring joy. Family bonds strengthen. Romance deepens emotionally.',
      career: 'Work-life balance improves. Consider home-based opportunities. Trust your intuition.',
      finance: 'Family investments payoff. Real estate and home improvements are favored.',
      health: 'Emotional wellbeing directly affects physical health. Prioritize self-care and boundaries.',
      luckyMonths: ['June', 'October', 'February'],
      challenges: 'Release past hurts. Don\'t let emotions cloud judgment in important decisions.',
      opportunities: 'Real estate, interior design, caregiving roles, family business'
    },
    Leo: {
      overview: 'Your time to shine! Recognition and success come naturally this year.',
      love: 'Romance is passionate and dramatic. Perfect year for grand gestures and celebrations.',
      career: 'Leadership opportunities abound. Your creative vision inspires others. Time for the spotlight.',
      finance: 'Generous income matches generous spending. Balance luxury with smart investments.',
      health: 'Heart health is important. Channel stress positively. Regular cardio recommended.',
      luckyMonths: ['July', 'November', 'March'],
      challenges: 'Stay humble in success. Share the spotlight. Ego management is crucial.',
      opportunities: 'Entertainment industry, public speaking, creative direction, entrepreneurship'
    },
    Virgo: {
      overview: 'Organization and efficiency bring success. Your attention to detail is your superpower.',
      love: 'Practical approach to relationships works well. Show love through service and support.',
      career: 'Your skills are in high demand. Perfectionism leads to excellent results and recognition.',
      finance: 'Careful planning leads to financial security. Budget management brings peace of mind.',
      health: 'Digestive health needs attention. Don\'t let perfectionism create stress.',
      luckyMonths: ['August', 'December', 'April'],
      challenges: 'Accept that imperfection is okay. Don\'t let analysis lead to paralysis.',
      opportunities: 'Healthcare, consulting, editing, quality control, wellness industry'
    },
    Libra: {
      overview: 'Balance and harmony guide your year. Relationships and partnerships flourish.',
      love: 'Love life is harmonious and romantic. Singles find balanced partnerships.',
      career: 'Collaboration brings success. Diplomatic skills open doors. Partnership ventures prosper.',
      finance: 'Shared finances work well. Fair negotiations improve your financial position.',
      health: 'Balance is key. Alternate activity with rest. Kidney and lower back need care.',
      luckyMonths: ['September', 'January', 'May'],
      challenges: 'Make decisions without overthinking. Trust your judgment.',
      opportunities: 'Law, mediation, art, fashion, relationship coaching'
    },
    Scorpio: {
      overview: 'Transformation and deep insights characterize your year. Embrace change powerfully.',
      love: 'Intense connections deepen. Trust issues resolve. Passionate encounters possible.',
      career: 'Research and investigation lead to breakthroughs. Hidden talents emerge.',
      finance: 'Unexpected gains possible. Good year for inheritance or shared resources.',
      health: 'Detoxification beneficial. Address mental health. Transformative healing occurs.',
      luckyMonths: ['October', 'February', 'June'],
      challenges: 'Release control. Forgiveness heals. Let go of destructive patterns.',
      opportunities: 'Psychology, research, finance, detective work, healing arts'
    },
    Sagittarius: {
      overview: 'Adventure and expansion define your year. Horizons broaden in all directions.',
      love: 'Freedom within commitment. Long-distance romance possible. Honesty deepens bonds.',
      career: 'International opportunities arise. Teaching and publishing favored. Think big.',
      finance: 'Risk-taking pays off. Travel investments worthwhile. Multiple income streams.',
      health: 'Outdoor activities boost health. Watch thighs and hips. Flexibility important.',
      luckyMonths: ['November', 'March', 'July'],
      challenges: 'Balance wanderlust with responsibilities. Finish what you start.',
      opportunities: 'Travel industry, education, publishing, international business'
    },
    Capricorn: {
      overview: 'Ambition and determination bring lasting success. Build your empire steadily.',
      love: 'Committed relationships strengthen. Singles attract mature partners. Loyalty valued.',
      career: 'Climb the ladder steadily. Authority positions within reach. Hard work recognized.',
      finance: 'Long-term investments payoff. Build wealth methodically. Financial security achieved.',
      health: 'Bones and joints need attention. Don\'t neglect rest. Stress management crucial.',
      luckyMonths: ['December', 'April', 'August'],
      challenges: 'Work-life balance needed. Don\'t sacrifice relationships for career.',
      opportunities: 'Management, architecture, government, traditional business'
    },
    Aquarius: {
      overview: 'Innovation and independence lead to breakthroughs. Your uniqueness is your strength.',
      love: 'Unconventional relationships thrive. Freedom and friendship in romance.',
      career: 'Technology and innovation bring success. Group projects flourish. Revolutionary ideas valued.',
      finance: 'Unexpected sources of income. Crowdfunding or group investments work well.',
      health: 'Circulation important. Ankles need care. Mental stimulation affects overall health.',
      luckyMonths: ['January', 'May', 'September'],
      challenges: 'Balance independence with intimacy. Don\'t detach emotionally from loved ones.',
      opportunities: 'Technology, social reform, science, humanitarian work'
    },
    Pisces: {
      overview: 'Intuition and creativity flow abundantly. Spiritual growth brings fulfillment.',
      love: 'Romantic and dreamy connections. Soulmate energy strong. Compassion deepens bonds.',
      career: 'Creative and healing professions highlighted. Intuitive decisions are accurate.',
      finance: 'Trust your hunches. Be careful with loans. Artistic endeavors profitable.',
      health: 'Feet need care. Avoid escapism. Meditation and spirituality heal deeply.',
      luckyMonths: ['February', 'June', 'October'],
      challenges: 'Set boundaries. Don\'t lose yourself in others. Stay grounded in reality.',
      opportunities: 'Arts, healing professions, spirituality, music, photography'
    }
  }

  const handleGetPrediction = () => {
    if (!selectedZodiac) {
      alert('Please select your zodiac sign')
      return
    }
    setShowPrediction(true)
  }

  const currentPrediction = selectedZodiac ? yearlyPredictions[selectedZodiac] : null

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar2 />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Yearly Astrology Forecast
            </h1>
            <p className="text-gray-300 text-lg">
              Discover what the stars have planned for your year ahead
            </p>
          </div>

          {/* Selection Card */}
          {!showPrediction && (
            <div className="glass-effect rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Get Your Yearly Forecast</h2>
              
              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-gray-300 mb-3 text-lg">Select Year</label>
                  <div className="grid grid-cols-3 gap-4">
                    {years.map(year => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`p-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                          selectedYear === year
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 text-lg">Select Your Zodiac Sign</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {zodiacSigns.map(sign => (
                      <button
                        key={sign}
                        onClick={() => setSelectedZodiac(sign)}
                        className={`p-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                          selectedZodiac === sign
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {sign}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGetPrediction}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105"
                >
                  Get My {selectedYear} Forecast
                </button>
              </div>
            </div>
          )}

          {/* Prediction Display */}
          {showPrediction && currentPrediction && (
            <div className="space-y-8">
              {/* Overview */}
              <div className="glass-effect rounded-3xl p-8">
                <div className="text-center mb-6">
                  <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedZodiac} - {selectedYear} Forecast
                  </h2>
                  <p className="text-xl text-purple-300">{currentPrediction.overview}</p>
                </div>
              </div>

              {/* Life Areas */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-8 h-8 text-pink-500" />
                    <h3 className="text-2xl font-bold text-white">Love & Romance</h3>
                  </div>
                  <p className="text-gray-300">{currentPrediction.love}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="w-8 h-8 text-blue-500" />
                    <h3 className="text-2xl font-bold text-white">Career & Success</h3>
                  </div>
                  <p className="text-gray-300">{currentPrediction.career}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="w-8 h-8 text-green-500" />
                    <h3 className="text-2xl font-bold text-white">Finance & Wealth</h3>
                  </div>
                  <p className="text-gray-300">{currentPrediction.finance}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-8 h-8 text-red-500" />
                    <h3 className="text-2xl font-bold text-white">Health & Wellness</h3>
                  </div>
                  <p className="text-gray-300">{currentPrediction.health}</p>
                </div>
              </div>

              {/* Additional Insights */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">Lucky Months</h3>
                  </div>
                  <div className="space-y-2">
                    {currentPrediction.luckyMonths.map((month, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-orange-400" />
                    <h3 className="text-xl font-bold text-white">Challenges</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{currentPrediction.challenges}</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Opportunities</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{currentPrediction.opportunities}</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setShowPrediction(false)
                    setSelectedZodiac('')
                  }}
                  className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Another Forecast
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default YearlyFeedback