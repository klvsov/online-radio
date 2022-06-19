import { FC } from 'react';
import styled from 'styled-components';

interface BoxProps {
  isColumn: boolean;
  children: JSX.Element;
}

interface StyledBoxProps {
  isColumn: boolean;
}

const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.isColumn ? 'column' : 'row')};
  margin-bottom: 10px;
  width: 480px;
  @media (max-width: 430px) {
    width: 350px;
  }
`;

const Box: FC<BoxProps> = ({ isColumn, children }) => (
  <StyledBox isColumn={isColumn}>{children}</StyledBox>
);

export default Box;
