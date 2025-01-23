import React from 'react';
import { X } from 'lucide-react';
import { Bet } from '../types';

interface BetSlipProps {
  bets: Bet[];
  stake: string;
  onRemoveBet: (betId: string) => void;
  onStakeChange: (value: string) => void;
}

export function BetSlip({ bets, stake, onRemoveBet, onStakeChange }: BetSlipProps) {
  const calculateTotalOdds = () => {
    return bets.reduce((acc, bet) => acc * bet.odds, 1);
  };

  const calculatePotentialReturn = () => {
    const stakeNum = parseFloat(stake);
    if (isNaN(stakeNum) || stakeNum <= 0) return 0;
    return (stakeNum * calculateTotalOdds()).toFixed(2);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Bilhete de Apostas</h2>
      {bets.length === 0 ? (
        <div className="text-center text-gray-400 py-8">
          Selecione suas apostas para começar
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {bets.map((bet) => (
              <div key={bet.id} className="bg-gray-700 rounded-md p-3 relative">
                <button
                  onClick={() => onRemoveBet(bet.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="text-sm text-gray-300">{bet.match}</div>
                <div className="flex justify-between items-center mt-1">
                  <div className="font-semibold">{bet.selection}</div>
                  <div className="text-green-500">{bet.odds}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-3">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Valor da Aposta (R$)</label>
              <input
                type="number"
                value={stake}
                onChange={(e) => onStakeChange(e.target.value)}
                className="w-full bg-gray-700 rounded-md p-2 text-white"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            <div className="pt-3 border-t border-gray-700 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Odds Totais:</span>
                <span>{calculateTotalOdds().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Retorno Potencial:</span>
                <span className="text-green-500">R$ {calculatePotentialReturn()}</span>
              </div>
            </div>
            <button className="w-full bg-green-600 py-2 rounded-md hover:bg-green-700 transition font-semibold">
              Fazer Aposta
            </button>
          </div>
        </>
      )}
    </div>
  );
}