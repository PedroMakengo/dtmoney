import { useState } from 'react';
import Modal from 'react-modal';
import logoImg  from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] = useState(false);

  function handleOpenNewTransictionModal() {
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransictionModal() {
    setIsNewTransictionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="dt money" />
        <button>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}