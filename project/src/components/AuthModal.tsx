import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'register';
}

export function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (type === 'register' && !name)) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // TODO: Implement actual authentication
    console.log('Form submitted:', { email, password, name });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          {type === 'login' ? 'Entrar' : 'Criar Conta'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Seu nome completo"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 py-2 px-4 rounded-md hover:bg-green-700 transition font-semibold"
          >
            {type === 'login' ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-400">
          {type === 'login' ? (
            <p>
              Não tem uma conta?{' '}
              <button
                onClick={() => {
                  onClose();
                  // Add logic to open register modal
                }}
                className="text-green-500 hover:text-green-400"
              >
                Registre-se
              </button>
            </p>
          ) : (
            <p>
              Já tem uma conta?{' '}
              <button
                onClick={() => {
                  onClose();
                  // Add logic to open login modal
                }}
                className="text-green-500 hover:text-green-400"
              >
                Faça login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}