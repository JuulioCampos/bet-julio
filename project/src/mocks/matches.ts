import { Match } from '../types';

export const footballMatches: Match[] = [
  {
    id: 1,
    home: 'Flamengo',
    away: 'Palmeiras',
    odds: { home: 2.10, draw: 3.20, away: 3.50 },
    time: '19:30',
    date: '2024-03-20',
  },
  {
    id: 2,
    home: 'São Paulo',
    away: 'Corinthians',
    odds: { home: 2.30, draw: 3.10, away: 3.20 },
    time: '21:00',
    date: '2024-03-20',
  },
  {
    id: 3,
    home: 'Santos',
    away: 'Grêmio',
    odds: { home: 2.50, draw: 3.30, away: 2.80 },
    time: '16:00',
    date: '2024-03-21',
  },
  {
    id: 4,
    home: 'Fluminense',
    away: 'Vasco',
    odds: { home: 1.95, draw: 3.40, away: 3.80 },
    time: '20:00',
    date: '2024-03-21',
  }
];

export const basketballMatches: Match[] = [
  {
    id: 101,
    home: 'Flamengo Basquete',
    away: 'Minas',
    odds: { home: 1.65, draw: 15.00, away: 2.20 },
    time: '18:00',
    date: '2024-03-20',
  },
  {
    id: 102,
    home: 'São Paulo Basquete',
    away: 'Paulistano',
    odds: { home: 1.85, draw: 15.00, away: 1.95 },
    time: '20:30',
    date: '2024-03-20',
  },
  {
    id: 103,
    home: 'Bauru',
    away: 'Franca',
    odds: { home: 2.10, draw: 15.00, away: 1.75 },
    time: '19:00',
    date: '2024-03-21',
  }
];

export const casinoGames: Match[] = [
  {
    id: 201,
    home: 'Blackjack',
    away: 'Mesa 1',
    odds: { home: 1.95, draw: 0, away: 1.95 },
    time: '24h',
    date: 'Ao vivo',
  },
  {
    id: 202,
    home: 'Roleta',
    away: 'Europeia',
    odds: { home: 2.00, draw: 0, away: 1.90 },
    time: '24h',
    date: 'Ao vivo',
  },
  {
    id: 203,
    home: 'Poker',
    away: 'Texas Hold\'em',
    odds: { home: 1.98, draw: 0, away: 1.92 },
    time: '24h',
    date: 'Ao vivo',
  },
  {
    id: 204,
    home: 'Baccarat',
    away: 'VIP',
    odds: { home: 1.95, draw: 8.50, away: 1.95 },
    time: '24h',
    date: 'Ao vivo',
  }
];