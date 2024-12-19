'use client';
import React, { useState } from 'react';
import SignUpForm from '@/components/Signupform';
import SignInForm from '@/components/Signinform';
import { 
  Star, 
  Moon, 
  Sun, 
  Rocket, 
  ArrowRight, 
  LogIn, 
  UserPlus 
} from 'lucide-react';

function Page() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [animation, setAnimation] = useState('');

  const toggleForm = () => {
    setAnimation(isSignIn ? 'animate-slide-right' : 'animate-slide-left');
    setTimeout(() => {
      setIsSignIn(!isSignIn);
      setAnimation('');
    }, 300);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 ">
      <div className="w-full  bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side - Cosmic Background */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gray-700 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute animate-float top-10 left-20 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute animate-float-delay top-1/3 right-10 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute animate-float-delay-2 bottom-10 left-1/3 w-20 h-20 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center space-x-4">
              <Rocket className="w-12 h-12 text-white animate-pulse" />
              <span className="text-xl font-semibold">AstroSphere</span>
            </div>
            
            <h2 className="text-4xl font-bold">
              Discover Your Cosmic Journey
            </h2>
            
            <p className="text-lg opacity-80">
              Unlock personalized astrological insights, connect with your celestial potential, 
              and explore the wisdom of the stars.
            </p>
            
            <div className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-yellow-300" />
              <span>Personalized Horoscopes</span>
            </div>
            <div className="flex items-center space-x-4">
              <Moon className="w-8 h-8 text-indigo-300" />
              <span>Relationship Compatibility</span>
            </div>
            <div className="flex items-center space-x-4">
              <Sun className="w-8 h-8 text-orange-300" />
              <span>Cosmic Learning Platform</span>
            </div>
          </div>
        </div>
        
        {/* Right Side - Authentication Form */}
        <div className="flex flex-col justify-center h-screen space-y-6">
          <div className={`w-full ${animation}`}>
            {isSignIn ? (
              <div className=" pt-8 px-8 space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-emerald-600 flex items-center justify-center space-x-2">
                    <LogIn className="w-8 h-8" />
                    <span>Sign In</span>
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Welcome back to your cosmic journey
                  </p>
                </div>
                
                <SignInForm />
                
                <div className="text-center ">
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <button
                      onClick={toggleForm}
                      className="text-black-600  bg-gray-400 p-1 px-2 mb-2 rounded-md hover:text-emerald-800 font-semibold transition-colors flex items-center justify-center space-x-1 mx-auto"
                    >
                      <span>Sign Up</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 p-5">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-indigo-600 flex items-center justify-center space-x-2">
                    <UserPlus className="w-8 h-8" />
                    <span>Sign Up</span>
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Begin your astrological adventure
                  </p>
                </div>
                
                <SignUpForm />
                
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      onClick={toggleForm}
                      className="text-black-600 bg-gray-400 p-1 px-2 mb-2 rounded-md hover:text-indigo-800 font-semibold transition-colors flex items-center justify-center space-x-1 mx-auto"
                    >
                      <span className=''>Log In</span>
                      <ArrowRight className="w-3 h-4" />
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;