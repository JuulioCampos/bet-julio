import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MatchList } from './components/MatchList';
import { BetSlip } from './components/BetSlip';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Bet, User } from './types';
import { footballMatches, basketballMatches, casinoGames } from './mocks/matches';

function App() {
  const [selectedSport, setSelectedSport] = useState('futebol');
  const [bets, setBets] = useState<Bet[]>([]);
  const [stake, setStake] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'register' }>({
    isOpen: false,
    type: 'login'
  });

  const getMatchesBySport = () => {
    switch (selectedSport) {
      case 'futebol':
        return footballMatches;
      case 'basquete':
        return basketballMatches;
      case 'casino':
        return casinoGames;
      default:
        return footballMatches;
    }
  };

  const addBet = (matchId: number, selection: 'home' | 'draw' | 'away', odds: number) => {
    if (!user && false) {
      setAuthModal({ isOpen: true, type: 'login' });
      return;
    }

    const match = getMatchesBySport().find(m => m.id === matchId);
    if (!match) return;

    const selectionText = selection === 'home' ? match.home : selection === 'away' ? match.away : 'Empate';
    const betId = `${matchId}-${selection}`;

    // Remove existing bet for this match if it exists
    const filteredBets = bets.filter(bet => bet.id.split('-')[0] !== String(matchId));

    setBets([
      ...filteredBets,
      {
        id: betId,
        match: `${match.home} x ${match.away}`,
        selection: selectionText,
        odds: odds
      }
    ]);
  };

  const removeBet = (betId: string) => {
    setBets(bets.filter(bet => bet.id !== betId));
  };

  const handleOpenAuth = (type: 'login' | 'register') => {
    setAuthModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onOpenAuth={handleOpenAuth} user={user} />
      <Navigation selectedSport={selectedSport} onSelectSport={setSelectedSport} />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MatchList 
            matches={getMatchesBySport()}
            bets={bets}
            onAddBet={addBet}
            selectedSport={selectedSport}
          />
          <BetSlip
            bets={bets}
            stake={stake}
            onRemoveBet={removeBet}
            onStakeChange={setStake}
          />
        </div>
      </main>
      <Footer />
      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </div>
  );
}

export default App;
