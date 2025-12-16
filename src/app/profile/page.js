'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'
import { User, Mail, Calendar, MapPin, Clock, Heart, Star, Edit2, Save, X } from 'lucide-react'

function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    if (!token) {
      router.push('/loginPage')
      return
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            'x-auth-token': token,
          },
        })
        // Ensure all fields have default values
        const userData = {
          firstName: response.data.firstName || '',
          lastName: response.data.lastName || '',
          email: response.data.email || '',
          dob: response.data.dob || '',
          birthTime: response.data.birthTime || '',
          birthPlace: response.data.birthPlace || '',
          gender: response.data.gender || '',
          status: response.data.status || '',
          partnerName: response.data.partnerName || '',
          sunSign: response.data.sunSign || '',
          moonSign: response.data.moonSign || '',
          risingSign: response.data.risingSign || '',
          ...response.data
        }
        setUser(userData)
        setFormData(userData)
        setLoading(false)
      } catch (err) {
        console.error('Profile fetch error:', err)
        setError('Failed to fetch profile data: ' + (err.response?.data?.msg || err.message))
        setLoading(false)
      }
    }

    fetchProfile()
  }, [router])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(
        'http://localhost:5000/api/profile',
        formData,
        {
          headers: {
            'x-auth-token': token,
          },
        }
      )
      setUser(response.data)
      setIsEditing(false)
      setSaving(false)
    } catch (err) {
      setError('Failed to update profile')
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setFormData(user)
    setIsEditing(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar2 />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-white text-xl animate-pulse">Loading your cosmic profile...</div>
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

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar2 />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Cosmic Profile
            </h1>
            <p className="text-gray-300 text-lg">
              Manage your personal information and astrology details
            </p>
          </div>

          {/* Profile Card */}
          <div className="glass-effect rounded-3xl p-8 mb-8">
            {/* Avatar & Edit Button */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {user.firstName || 'User'} {user.lastName || ''}
                  </h2>
                  <p className="text-gray-300">{user.email || 'No email'}</p>
                  {user.sunSign && (
                    <div className="flex items-center space-x-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-purple-300">{user.sunSign}</span>
                    </div>
                  )}
                </div>
              </div>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? 'Saving...' : 'Save'}</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>

            {/* Profile Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Personal Information
                </h3>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    />
                  ) : (
                    <p className="text-white text-lg">{user.firstName || 'Not set'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    />
                  ) : (
                    <p className="text-white text-lg">{user.lastName || 'Not set'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Gender</label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={formData.gender || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <p className="text-white text-lg">{user.gender || 'Not specified'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Relationship Status</label>
                  {isEditing ? (
                    <select
                      name="status"
                      value={formData.status || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="Single">Single</option>
                      <option value="In a Relationship">In a Relationship</option>
                      <option value="Married">Married</option>
                      <option value="It's Complicated">It's Complicated</option>
                    </select>
                  ) : (
                    <p className="text-white text-lg">{user.status || 'Not specified'}</p>
                  )}
                </div>

                {(isEditing || user.partnerName) && (
                  <div>
                    <label className="text-gray-300 text-sm mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      Partner Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="partnerName"
                        value={formData.partnerName || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                        placeholder="Optional"
                      />
                    ) : (
                      <p className="text-white text-lg">{user.partnerName}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Birth Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Birth Information
                </h3>

                <div>
                  <label className="text-gray-300 text-sm mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob ? formData.dob.split('T')[0] : ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    />
                  ) : (
                    <p className="text-white text-lg">
                      {user.dob ? new Date(user.dob).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Not specified'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Birth Time
                  </label>
                  {isEditing ? (
                    <input
                      type="time"
                      name="birthTime"
                      value={formData.birthTime || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                      placeholder="Optional"
                    />
                  ) : (
                    <p className="text-white text-lg">{user.birthTime || 'Not specified'}</p>
                  )}
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Birth Place
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="birthPlace"
                      value={formData.birthPlace || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                      placeholder="City, Country"
                    />
                  ) : (
                    <p className="text-white text-lg">{user.birthPlace || 'Not specified'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Sun Sign</label>
                  {isEditing ? (
                    <select
                      name="sunSign"
                      value={formData.sunSign || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Select your sun sign</option>
                      {zodiacSigns.map(sign => (
                        <option key={sign} value={sign}>{sign}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-white text-lg">{user.sunSign || 'Not specified'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Moon Sign</label>
                  {isEditing ? (
                    <select
                      name="moonSign"
                      value={formData.moonSign || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Select your moon sign</option>
                      {zodiacSigns.map(sign => (
                        <option key={sign} value={sign}>{sign}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-white text-lg">{user.moonSign || 'Not specified'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Rising Sign</label>
                  {isEditing ? (
                    <select
                      name="risingSign"
                      value={formData.risingSign || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Select your rising sign</option>
                      {zodiacSigns.map(sign => (
                        <option key={sign} value={sign}>{sign}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-white text-lg">{user.risingSign || 'Not specified'}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Completion Message */}
            {(!user.birthTime || !user.birthPlace || !user.sunSign) && (
              <div className="mt-8 p-4 bg-purple-900/30 border border-purple-500/50 rounded-lg">
                <p className="text-purple-300 text-center">
                  ✨ Complete your profile with birth time and location for accurate astrology readings!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile