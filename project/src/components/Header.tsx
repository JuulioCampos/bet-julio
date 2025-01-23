import React from 'react';
import { Menu, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  onOpenAuth: (type: 'login' | 'register') => void;
  user: User | null;
}

export function Header({ onOpenAuth, user }: HeaderProps) {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Menu className="h-6 w-6" />
            <h1 className="text-xl font-bold text-green-500">Julio Bet</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-green-500">R$ {user.balance.toFixed(2)}</span>
                <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-md">
                  <UserIcon className="h-5 w-5" />
                  <span>{user.name}</span>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Registrar
                </button>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
                >
                  Entrar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}