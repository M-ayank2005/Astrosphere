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
      <div className="bg-white p-8 space-y-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-neutral-800 text-center mb-4">
          Sign In
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-neutral-700 mb-2"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-800 placeholder-neutral-500"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-neutral-700"
              >
                Password
              </label>
              <button 
                type="button"
                className="text-xs text-neutral-600 hover:text-neutral-800 transition-colors"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-800 placeholder-neutral-500"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500"
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