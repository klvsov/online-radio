import { FC } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element;
}

const StyledContainer = styled.div`
  max-width: 480px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 430px) {
    max-width: 350px;
  }
`;

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
