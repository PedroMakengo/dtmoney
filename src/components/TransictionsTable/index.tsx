import { useEffect } from 'react';
import { api } from '../../service/api';
import {Container} from './styles';

export function TransictionsTable() {
  // Consumindo a minha api
  useEffect(() => {
    api.get('transictions')
      .then(response => console.log(response.data));
  }, []);
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
          <tr>
              <td>Desenvolvimento de Website</td>
              <td className="deposit">R$12.00</td>
              <td>Desenvolvimento</td>
              <td>07/08/2021</td>
          </tr>
          <tr>
              <td>Aluguer</td>
              <td className="withdraw">- R$1.100</td>
              <td>Casa</td>
              <td>07/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}