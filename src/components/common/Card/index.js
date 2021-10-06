import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: calc(100% - 2rem);

  transition-duration: 0.06s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => (theme === 'light' ? '#f1f1f1' : '#151515')};

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#ddd' : '#0a0a0a')};
  }

  &:active {
    background-color: ${({ theme }) => (theme === 'light' ? '#ccc' : '#000')};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
