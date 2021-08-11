import { createContext , useState, useEffect, ReactNode } from 'react';
import { api } from './service/api';

interface Transaction {
  id: number;
  title: string;
  amout: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // Consumindo a minha api
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  )
}