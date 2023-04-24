import { ReactNode } from 'react';

import { LinkProps } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { ExternalLinkContainer } from './styles';

interface IExternalLinkProps extends LinkProps {
  text: string;
  icon?: ReactNode;
  variant?: 'iconLeft';
}

/**
 * Outra maneira de pegar as propriedades do componente
 * declarado no styled-components e passar para a tipagem
 * do elemento
 *
 * NÂO TÁ PEGANDO ASSIM
 */
// type IExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
//   text: string;
//   icon?: ReactNode;
// };

const ExternalLink = ({ text, icon, variant, ...rest }: IExternalLinkProps) => {
  return (
    <ExternalLinkContainer variant={variant} {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
};

export { ExternalLink };
