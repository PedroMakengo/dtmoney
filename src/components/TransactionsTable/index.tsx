import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {Container} from './styles';

interface Transaction {
  id: number;
  title: string;
  amout: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // Consumindo a minha api
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [transactions]);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Catégoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
              <tr>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amout)}
                </td>
                <td>{transaction.category}</td>
                <td>{
                  new Intl.DateTimeFormat('pt-BR')
                    .format(new Date(transaction.createdAt))
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}