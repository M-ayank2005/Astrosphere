'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Navbar2 from '@/components/Navbar2'
import { User, Calendar, Heart, Star } from 'lucide-react'

function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const router = useRouter()
  const BackendApi =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000'

 useEffect(() => {
  const token = localStorage.getItem('jwtToken');
  console.log("Retrieved token:", token);
  if (!token) {
    router.push('/loginPage');
    return;
  }

  axios.get(`${BackendApi}/api/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then(res => setUser(res.data))
  .catch(() => router.push('/loginPage'))
  .finally(() => setLoading(false));
}, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar2 />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-white text-xl animate-pulse">
            Loading your cosmic profile...
          </div>
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

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex items-center h-24">
                <h2 className="text-3xl font-bold text-white">
                {user.firstName} {user.lastName}
                </h2>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </h3>

              <p className="text-gray-300">Gender</p>
              <p className="text-white mb-4">{user.gender}</p>

              <p className="text-gray-300">Relationship Status</p>
              <p className="text-white mb-4">{user.status}</p>

              {user.partnerName && (
                <>
                  <p className="text-gray-300 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Partner Name
                  </p>
                  <p className="text-white">{user.partnerName}</p>
                </>
              )}
            </div>

            {/* Birth Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Birth Information
              </h3>

              <p className="text-gray-300 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Date of Birth
              </p>
              <p className="text-white">
                {user.dob &&
                  new Date(user.dob).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
