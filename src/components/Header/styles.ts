import styled from 'styled-components';

import backgroundHeader from '../../assets/background_header.png';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background: url(${backgroundHeader}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`;
