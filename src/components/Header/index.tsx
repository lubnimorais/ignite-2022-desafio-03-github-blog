import { HeaderContainer } from './styles';

import logoImg from '../../assets/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  );
};

export { Header };
