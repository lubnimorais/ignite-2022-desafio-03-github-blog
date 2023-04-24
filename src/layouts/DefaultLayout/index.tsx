import { Outlet } from 'react-router-dom';

import { DefaultLayoutsContainer, DefaultLayoutsContent } from './styles';
import { Header } from '../../components/Header';

const DefaultLayout = () => {
  return (
    <DefaultLayoutsContainer>
      <Header />

      <DefaultLayoutsContent>
        <Outlet />
      </DefaultLayoutsContent>
    </DefaultLayoutsContainer>
  );
};

export { DefaultLayout };
