import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full relative">
      <div className="mb-6 flex justify-center">
        <svg
          className="w-32 h-32 text-green-500 dark:text-green-400"
          viewBox="0 0 1080 1080"
          fill="currentColor"
        >
          <path d="M705.89,336.92c0,0-197.29-15.33-211.29,185.35c-0.36,5.13-0.51,10.26-0.55,15.4
          c-0.14,17.54-5.05,93.15-78.03,123l-128-109.17l139.29-128h22.59c0,0,22.59-45.24,77.17-86.62H396.46L152.5,555.27L382.14,743.5
          c0,0,143.31,3.12,189.03-143.7c6.45-20.71,9.64-42.27,10.15-63.95c0.78-33.12,11.03-108.19,86.93-119.86L800,532.68l-143.05,128
          h-45.17c0,0-27.33,67.77-73.9,82.83h153.2L928,528.92L705.89,336.92z"/>
        </svg>
      </div>
      <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">Welcome to Our Community</h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 text-center">Join us and unlock amazing opportunities!</p>
      <ul className="space-y-2 mb-8 text-gray-700 dark:text-gray-300">
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Access to exclusive events
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Networking opportunities
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Professional development resources
        </li>
      </ul>
      <p className="text-sm italic text-gray-600 dark:text-gray-400 text-center">Register now and start your journey with us!</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
        Developed by{' '}
        <a
          href="https://portfolio-omar-embarkis-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500 transition-colors duration-300"
        >
          Embarki Omar
        </a>
      </p>
    </div>
  );
};

export default Hero;