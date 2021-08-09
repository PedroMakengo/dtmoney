import { useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container ,TransictionTypeContainer, RadioBox } from './styles';

interface NewTransictionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransictionModal({ isOpen, onRequestClose }: NewTransictionModalProps) {
  const [type, setType] = useState('deposit');
  return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
        />

        <input 
          type="number"
          placeholder="Valor"
        />

        <TransictionTypeContainer>
          <RadioBox
           type="button"
           onClick={() => setType('deposit')}
           isActive={type === 'deposit'}
           activeColor="green"
           >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>
              Saída
            </span>
          </RadioBox>
        </TransictionTypeContainer>

        <input 
          type="text"
          placeholder="Categória"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}