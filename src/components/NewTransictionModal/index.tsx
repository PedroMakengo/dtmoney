import Modal from 'react-modal';

interface NewTransictionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransictionModal({ isOpen, onRequestClose }: NewTransictionModalProps) {
  return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}>
      <h1>Cadastrar transação</h1>
    </Modal>
  )
}