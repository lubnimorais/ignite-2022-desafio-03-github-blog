import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;

  background: ${({ theme }) => theme.colors['base-profile']};

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;

  margin-top: -5.5rem;
`;

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;

  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
      color: ${({ theme }) => theme.colors['base-title']};
      line-height: 1.3;
    }
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;

        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`;
