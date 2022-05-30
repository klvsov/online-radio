import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  children: ReactNode;
}

interface StyledErrorMessageProps {
  isChildren: boolean;
}

const StyledErrorMessage = styled.span<StyledErrorMessageProps>`
  display: block;
  height: 16px;
  padding: 5px;
  border-radius: 5px;
  margin-top: 5px;
  background: ${({ children }) => (children ? '#fbd9df' : 'transparent')};
  color: #c71436;
`;

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => (
  <StyledErrorMessage isChildren={!!children}>{children}</StyledErrorMessage>
);

export default ErrorMessage;
