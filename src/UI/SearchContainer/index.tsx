import { FC } from 'react';
import styled from 'styled-components';

interface SearchContainerProps {
  children: JSX.Element;
}

const StyledContainer = styled.div`
  max-width: 480px;
  min-height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 430px) {
    max-width: 350px;
  }
`;

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default SearchContainer;
