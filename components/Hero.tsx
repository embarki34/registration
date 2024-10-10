"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex flex-col justify-center items-center text-center p-8 transition-colors duration-200`}
    >
      <motion.div 
        className="w-48 h-48 mb-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1080 1080" style={{enableBackground: 'new 0 0 1080 1080'} as React.CSSProperties} xmlSpace="preserve">
          <style type="text/css">
            {`.st0{fill:${theme === 'dark' ? '#A8D78F' : '#7AB55C'};}`}
          </style>
          <path className="st0" d="M705.89,336.92c0,0-197.29-15.33-211.29,185.35c-0.36,5.13-0.51,10.26-0.55,15.4
          c-0.14,17.54-5.05,93.15-78.03,123l-128-109.17l139.29-128h22.59c0,0,22.59-45.24,77.17-86.62H396.46L152.5,555.27L382.14,743.5
          c0,0,143.31,3.12,189.03-143.7c6.45-20.71,9.64-42.27,10.15-63.95c0.78-33.12,11.03-108.19,86.93-119.86L800,532.68l-143.05,128
          h-45.17c0,0-27.33,67.77-73.9,82.83h153.2L928,528.92L705.89,336.92z"/>
        </svg>
      </motion.div>
      <motion.h1 
        className={`text-5xl md:text-7xl font-sans font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Club Infinity
      </motion.h1>
      <motion.p 
        className={`text-xl md:text-2xl mb-10 font-light ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Elevating Excellence, Inspiring Greatness
      </motion.p>
      
      <motion.div 
        className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg max-w-md w-full mb-10`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <svg className={`w-12 h-12 mx-auto mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Registration Closed</h2>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>For details, contact us on Instagram</p>
        <Link href="https://www.instagram.com/club_.infinity?igsh=eGhpdm9yMWpoaTBy" target="_blank" rel="noopener noreferrer">
        <motion.button 
          className={`bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 justify-center align-center text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out flex items-center mt-4 mx-auto`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Follow Us on Instagram
        </motion.button>
      </Link>
      </motion.div>
      
    </motion.div>
  );
};

export default Hero;