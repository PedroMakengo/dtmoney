import { useState } from 'react';

import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export default function App() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] = useState(false);

  function handleOpenNewTransictionModal() {
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransictionModal() {
    setIsNewTransictionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransictionModal={handleOpenNewTransictionModal} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={ isNewTransictionModalOpen } 
        onRequestClose={ handleCloseNewTransictionModal }
      />

      <GlobalStyle />
    </TransactionsProvider>
   );
}
