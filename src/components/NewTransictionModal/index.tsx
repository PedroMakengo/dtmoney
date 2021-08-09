import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container ,TransictionTypeContainer } from './styles';

interface NewTransictionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransictionModal({ isOpen, onRequestClose }: NewTransictionModalProps) {
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
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          
          <button>
            <img src={outcomeImg} alt="Saída" />
            <span>
              Saída
            </span>
          </button>
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