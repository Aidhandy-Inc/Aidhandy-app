// Set this component to run on the client if it uses client-side hooks like useState, 
// or remove this line if it's purely server-side rendered.
// 'use client'; 

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* 1. HERO SECTION: Title and Button */}
      {/* Uses large vertical padding on mobile (py-16), larger on desktop (lg:py-24) */}
      <section className="py-16 text-center bg-white shadow-md">
        {/* Title: Large font on mobile, Extra Large on desktop */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
          AidHandy: Travel Simplified
        </h1>
        {/* Subtitle: Normal font on mobile, Larger on desktop */}
        <p className="text-lg text-gray-600 mb-8 sm:text-xl max-w-2xl mx-auto">
          Your reliable airport and inflight companion service, designed for peace of mind.
        </p>
        
        {/* Call-to-Action Button */}
        <a 
          href="/auth/login" 
          className="inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
        >
          Get Started Now
        </a>
      </section>

      {/* 2. FEATURES SECTION: Responsive Grid */}
      {/* p-8 on mobile, p-12 on desktop */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose AidHandy?</h2>
        
        {/* GRID LAYOUT: 
           - Mobile: grid-cols-1 (1 column, items stack vertically)
           - Medium (Tablet): md:grid-cols-2 (2 columns)
           - Large (Desktop): lg:grid-cols-3 (3 columns) 
        */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Seamless Assistance</h3>
            <p className="text-gray-600">
              Get real-time companion support from check-in to your destination gate.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Simple Booking</h3>
            <p className="text-gray-600">
              Easily book services through our simplified, mobile-friendly interface.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Supabase Integration</h3>
            <p className="text-gray-600">
              Secure authentication and data storage powered by Supabase.
            </p>
          </div>
          
        </div>
      </section>

      {/* 3. CALL TO ACTION (CTA) SECTION */}
      {/* Text Alignment: Centered on mobile, Left-aligned on large screens */}
      <section className="bg-blue-500 text-white p-10 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to travel with ease?</h2>
                <p className="text-blue-200">Sign up today and experience stress-free travel assistance.</p>
            </div>
            <a 
              href="/auth/login" 
              className="px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition duration-150"
            >
              Sign Up
            </a>
        </div>
      </section>
      
    </div>
  );
}
