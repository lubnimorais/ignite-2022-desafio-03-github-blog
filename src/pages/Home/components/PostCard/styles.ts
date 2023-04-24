import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostCardContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;

  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors['base-post']};

  padding: 2rem;

  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }

  header {
    display: flex;
    gap: 1rem;

    margin-bottom: 1.25rem;

    strong {
      flex: 1;

      font-size: ${({ theme }) => theme.textSizes['text-text-m']};
      color: ${({ theme }) => theme.colors['base-title']};

      overflow: hidden;

      text-overflow: ellipsis;

      display: -webkit-box;

      -webkit-box-orient: vertical;

      /* Quantas linhas que o texto tenha (apareça) */
      -webkit-line-clamp: 2;
    }

    span {
      /* 
      Estamos dizendo que ele vai ficar máximo que ele precisar
      */
      width: max-content;

      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  p {
    overflow: hidden;

    text-overflow: ellipsis;

    display: -webkit-box;

    -webkit-box-orient: vertical;

    /* Quantas linhas que o texto tenha (apareça) */
    -webkit-line-clamp: 4;
  }
`;
