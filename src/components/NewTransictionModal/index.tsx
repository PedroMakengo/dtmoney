import Modal from 'react-modal';
import { Container } from './styles';

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