'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const BackendApi = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      dob: formData.get('dob'),
      gender: formData.get('gender'),
      status: formData.get('status'),
      partnerName: status === 'Engaged' ? partnerName : null,
    };

    try {
      const response = await fetch(`${BackendApi}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Sign up successful! Please log in.');
        console.log('Sign up successful!');
        window.location.href = '/loginPage';
      } else {
        toast.error(result.message || 'Sign up failed. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 pt-5 rounded-lg shadow-xl w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* First Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-slate-300 mb-1">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-slate-300 mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              >
                <option value="" className="bg-slate-800 text-white">Select Gender</option>
                <option value="Male" className="bg-slate-800 text-white">Male</option>
                <option value="Female" className="bg-slate-800 text-white">Female</option>
                <option value="Other" className="bg-slate-800 text-white">Other</option>
              </select>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-300 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
              >
                <option value="" className="bg-slate-800 text-white">Select Status</option>
                <option value="Single" className="bg-slate-800 text-white">Single</option>
                <option value="Engaged" className="bg-slate-800 text-white">Engaged</option>
                <option value="Married" className="bg-slate-800 text-white">Married</option>
              </select>
            </div>
            {(status === 'Engaged'||status === 'Married') && (
              <div>
                <label htmlFor="partnerName" className="block text-sm font-medium text-slate-300 mb-1">
                  Partner Name
                </label>
                <input
                  id="partnerName"
                  name="partnerName"
                  type="text"
                  placeholder="Enter your partner's name"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm placeholder-slate-400"
                />
              </div>
            )}
          </div>

          {/* Full Width Submit Button */}
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-md hover:from-emerald-600 hover:to-cyan-600 focus:outline-none shadow-lg shadow-emerald-500/20 font-semibold"
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
  );
};

export default SignUpForm;