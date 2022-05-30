import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const StyledButton = styled.button`
  margin-top: 10px;
  background: #e1e1e1;
  border-radius: 6px;
  border: none;
  outline: none;
  box-sizing: border-box;
  color: #000;
  display: block;
  width: 480px;
  height: 50px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  z-index: 2;
  cursor: pointer;

  &:disabled {
    user-select: none;
    cursor: not-allowed;
  }

  &:hover {
    background: #ffffff;
  }
`;

const Button: FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
