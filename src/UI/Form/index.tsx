import { FC } from 'react';
import styled from 'styled-components';

interface FormGroupProps {
  children: JSX.Element;
}

const Form = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

const FormGroup: FC<FormGroupProps> = ({ children }) => <Form>{children}</Form>;

export default FormGroup;
