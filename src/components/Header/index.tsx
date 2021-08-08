import logoImg  from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransictionModal: () => void;
}

export function Header({ onOpenNewTransictionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="dt money" />
        <button onClick={onOpenNewTransictionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}