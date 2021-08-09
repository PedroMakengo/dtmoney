import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {Container} from './styles';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  // Consumindo a minha api
  useEffect(() => {
    api.get('transaction')
      .then(response => setTransactions(response.data));
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
          {transactions.map(transaction => (console.log(transaction))) }
          <tr>
             <td>Desenvolvimento de Website</td>
             <td className="deposit">R$12.00</td>
             <td>Desenvolvimento</td>
             <td>07/08/2021</td>
           </tr>
        </tbody>
      </table>
    </Container>
  )
}