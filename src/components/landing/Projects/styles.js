import styled from 'styled-components';
import 'typeface-fira-sans';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  h3 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }

  li {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }

  &:visited {
    color: inherit;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }
  }
`;

export const Languages = styled.div`
  font-size: 14px;

  display: flex;
  flex-wrap: wrap;

  div {
    background-color: ${({ theme }) => (theme === 'light' ? '#ccc' : '#333')};
    
    color: ${({ theme }) => (theme === 'light' ? '#444' : '#ddd')};

    border-radius: 12px;
    padding: 8px 12px;
    margin: 4px 4px;

    font-family: "Fira Sans", sans serif;
	  font-weight: 500;
  }
`;
