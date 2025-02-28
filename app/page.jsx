"use client";

import { useEffect } from 'react';

export default function JobSeeker() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Pattern background */
        .pattern-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        /* Refined text gradients */
        .text-gradient {
            background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Smooth transitions */
        .transition-all {
            transition: all 0.3s ease-in-out;
        }

        /* Card hover effects */
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Enterprise-style button */
        .enterprise-button {
            background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
            transition: all 0.3s ease;
        }
        .enterprise-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.2);
        }
      `}</style>

      {/* Your existing HTML goes here, but converted to JSX syntax */}
      <div className="bg-white font-sans">
        {/* Convert the header */}
        <header className="bg-white border-b border-gray-200">
          {/* ... rest of your HTML converted to JSX ... */}
        </header>

        <main>
          {/* ... rest of your HTML converted to JSX ... */}
        </main>

        <footer className="bg-gray-50 py-12">
          {/* ... rest of your HTML converted to JSX ... */}
        </footer>
      </div>
    </>
  );
} 