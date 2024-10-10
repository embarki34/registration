"use client"
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  onFinish: () => void; // Add this prop
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onFinish(); // Call the onFinish prop when countdown ends
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onFinish]);

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Registration Ends In:</h2>
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="text-3xl font-bold text-green-500 dark:text-green-400">{value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;