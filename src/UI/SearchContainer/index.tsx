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
`;

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default SearchContainer;
