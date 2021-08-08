import { Summary } from '../Summary/indext';
import { TransictionsTable } from '../TransictionsTable';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransictionsTable />
    </Container>
  );
}