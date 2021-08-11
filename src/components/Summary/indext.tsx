import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary() {
  const data = useContext(TransactionsContext);
  console.log(data);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={ outcomeImg } alt="Saída" />
        </header>
        <strong>- R$500</strong>
      </div>
      <div className="higlight-background">
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Total" />
        </header>
        <strong>- R$500</strong>
      </div>
    </Container>
  );
}