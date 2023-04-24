// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IExternalLinkContainerProps {
  variant?: 'iconLeft';
}

export const ExternalLinkContainer = styled(
  NavLink,
)<IExternalLinkContainerProps>`
  height: 19px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-bottom: 1px solid transparent;

  background: none;

  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['brand-blue']};
  line-height: 19px;

  text-transform: uppercase;

  transition: 0.4s;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }

  ${({ variant }) =>
    variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`;
