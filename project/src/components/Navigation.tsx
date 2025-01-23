import React from 'react';
import { Percent as Soccer, ShoppingBasket as Basketball, Cast as Casino } from 'lucide-react';

interface NavigationProps {
  selectedSport: string;
  onSelectSport: (sport: string) => void;
}

export function Navigation({ selectedSport, onSelectSport }: NavigationProps) {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex space-x-6">
          <button 
            className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
              selectedSport === 'futebol' ? 'bg-green-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => onSelectSport('futebol')}
          >
            <Soccer className="h-5 w-5" />
            <span>Futebol</span>
          </button>
          <button 
            className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
              selectedSport === 'basquete' ? 'bg-green-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => onSelectSport('basquete')}
          >
            <Basketball className="h-5 w-5" />
            <span>Basquete</span>
          </button>
          <button 
            className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
              selectedSport === 'casino' ? 'bg-green-600' : 'hover:bg-gray-700'
            }`}
            onClick={() => onSelectSport('casino')}
          >
            <Casino className="h-5 w-5" />
            <span>Casino</span>
          </button>
        </div>
      </div>
    </nav>
  );
}