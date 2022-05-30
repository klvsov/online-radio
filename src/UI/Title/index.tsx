import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: ReactNode;
}

const StyledTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin: 10px 0;
  padding: 10px 0;
  color: #11998e;
`;

const Title: FC<TitleProps> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);

export default Title;
