export interface Match {
  id: number;
  home: string;
  away: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  time: string;
  date: string;
}

export interface Bet {
  id: string;
  match: string;
  selection: string;
  odds: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  balance: number;
}