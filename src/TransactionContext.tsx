import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const TransactionsContext = createContext<TransactionProps[]>([]);

export function TransactionsProvider() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider
      value={transactions}
    ></TransactionsContext.Provider>
  );
}
