"use client"
import React, { useState } from 'react';
import Countdown from './Countdown';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  const handleCountdownFinish = () => {
    setIsCountdownFinished(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Club Infinity</h1>
      <p className="text-xl md:text-2xl mb-8">Join us for an unforgettable experience!</p>
      
      {isCountdownFinished ? (
        <div className="text-xl md:text-2xl mb-8">
          <p>Registrations are closed.</p>
          <p>Please contact us on Instagram for more updates:</p>
          <Link href="https://www.instagram.com/club_.infinity?igsh=eGhpdm9yMWpoaTBy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            @club_.infinity
          </Link>
        </div>
      ) : (
        <>
          <Countdown targetDate={new Date('2024-03-15T00:00:00')} onFinish={handleCountdownFinish} />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
            Register Now
          </button>
        </>
      )}
    </div>
  );
};

export default Hero;