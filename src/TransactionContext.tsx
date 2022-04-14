import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// O transaction input vai herdar todos os campos da minha interface
// TransactionProps menos o id e a createdAt

type TransactionInput = Omit<TransactionProps, "id" | "createdAt">;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  // Lhe dar com a parte do meu formulário

  async function createTransaction(transaction: TransactionInput) {
    await api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
