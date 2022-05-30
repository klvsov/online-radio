import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface LinkProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children: ReactNode;
}

const StyledLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  background: #4c5a65;
  border: none;
  outline: none;
  color: #fff;

  &:active {
    background: #607485;
  }
  &:disabled {
    color: #a5a5a5;
    background: #606c76;
    cursor: not-allowed;
  }
`;

const Link: FC<LinkProps> = ({ onClick, disabled, children }) => {
  return (
    <StyledLink disabled={disabled} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

export default Link;
