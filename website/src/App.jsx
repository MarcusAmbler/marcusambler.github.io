import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import aceSpadesImage from './assets/as.png';
import threeSpadesImage from './assets/3s.png';
import twoSpadesImage from './assets/2s.png';
import fourSpadesImage from './assets/4s.png';
import fiveSpadesImage from './assets/5s.png';
import twoClubsImage from './assets/2c.png';
import kingHeartsImage from './assets/kh.png';

function App() {
  const aceCardRef = useRef(null);
  const threeCardRef = useRef(null);

  return (
    <div className="min-w-screen min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">
        Hello
      </h1>
      <div className="flex flex-row h-1/4">
        <div ref={aceCardRef} className="pixel-card three-card-start-position">
          <img src={aceSpadesImage} alt="Ace Card" className="h-64" style={{ imageRendering: 'pixelated' }}/>
        </div>
        <div ref={threeCardRef} className="pixel-card three-card-start-position">
          <img src={threeSpadesImage} alt="three Card" className="" style={{ imageRendering: 'pixelated' }}/>
        </div>
      </div>
      <button className="mt-2 px-4 py-2 bg-indigo-500 font-medium text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
        bet
      </button>
    </div>
  )
}

export default App
