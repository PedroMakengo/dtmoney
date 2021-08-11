import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { TransactionsContext } from '../../TransactionsContext';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container ,TransictionTypeContainer, RadioBox } from './styles';

interface NewTransictionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransictionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amout, setAmout] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateTransiction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      type,
      amout,
      category
    });

    setTitle('');
    setAmout(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

      <Container onSubmit={handleCreateTransiction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value) }
        />

        <input 
          type="number"
          placeholder="Valor"
          value={amout}
          onChange={(event) => setAmout(Number(event.target.value))}
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
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}