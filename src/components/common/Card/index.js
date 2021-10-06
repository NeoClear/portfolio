import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  height: calc(100% - 2rem);

  transition-duration: 0.14s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-left: 3px solid ${({ theme }) => (theme === 'light' ? "grey" : '#aaa')};
  // background-color: ;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#f1f1f1' : '#151515')};
  }

  &:active {
    background-color: ${({ theme }) => (theme === 'light' ? '#ddd' : '#0a0a0a')};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
