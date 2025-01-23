import React from 'react';
import { Match } from '../types';

interface MatchListProps {
  matches: Match[];
  bets: any[];
  selectedSport: string;
  onAddBet: (matchId: number, selection: 'home' | 'draw' | 'away', odds: number) => void;
}

export function MatchList({ matches, bets, selectedSport, onAddBet }: MatchListProps) {
  const getTitle = () => {
    switch (selectedSport) {
      case 'futebol':
        return 'Jogos de Futebol';
      case 'basquete':
        return 'Jogos de Basquete';
      case 'casino':
        return 'Jogos de Casino';
      default:
        return 'Jogos de Hoje';
    }
  };

  const showDrawOption = selectedSport !== 'casino' || matches.some(match => match.odds.draw > 0);

  return (
    <div className="md:col-span-2">
      <h2 className="text-xl font-semibold mb-4">{getTitle()}</h2>
      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">{match.time}</span>
              <span className="text-gray-400">{match.date}</span>
            </div>
            <div className={`grid ${showDrawOption ? 'grid-cols-3' : 'grid-cols-2'} gap-4`}>
              <div className="text-center">
                <button 
                  className={`w-full rounded-md p-2 transition ${
                    bets.some(bet => bet.id === `${match.id}-home`)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => onAddBet(match.id, 'home', match.odds.home)}
                >
                  <div className="font-semibold">{match.home}</div>
                  <div className="text-green-500">{match.odds.home}</div>
                </button>
              </div>
              {showDrawOption && (
                <div className="text-center">
                  <button 
                    className={`w-full rounded-md p-2 transition ${
                      bets.some(bet => bet.id === `${match.id}-draw`)
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => onAddBet(match.id, 'draw', match.odds.draw)}
                    disabled={match.odds.draw === 0}
                  >
                    <div className="font-semibold">Empate</div>
                    <div className="text-green-500">{match.odds.draw || '-'}</div>
                  </button>
                </div>
              )}
              <div className="text-center">
                <button 
                  className={`w-full rounded-md p-2 transition ${
                    bets.some(bet => bet.id === `${match.id}-away`)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => onAddBet(match.id, 'away', match.odds.away)}
                >
                  <div className="font-semibold">{match.away}</div>
                  <div className="text-green-500">{match.odds.away}</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}