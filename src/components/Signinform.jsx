'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';


const SignInForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const BackendApi = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:5000';

    try {
      const response = await fetch(`${BackendApi}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('jwtToken', data.token);
        toast.success('Login successful!');
        console.log(data.token);
        window.location.href = '/home';
      } else {
        toast.error(data.message || 'Invalid credentials, please try again.');
        console.log("Login failed", data.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 space-y-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white text-center mb-4">
          Sign In
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-slate-300"
              >
                Password
              </label>
              <button 
                type="button"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-slate-400"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-md hover:from-emerald-600 hover:to-cyan-600 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-lg shadow-emerald-500/20"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;