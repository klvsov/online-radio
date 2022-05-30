import { FC } from 'react';
import styled from 'styled-components';
import { isValidUrl } from 'helpers/helpFunctions';

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  isRequired: boolean;
  isError: boolean;
  isUrl: boolean;
  register: any;
}

interface FormFieldProps {
  error: boolean;
}

const FormField = styled.input<FormFieldProps>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: ${({ error }) =>
    error ? '2px solid #c71436' : '2px solid #fff'};
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  color: #fff;

  &::placeholder {
    color: ${({ error }) => (error ? '#c71436' : '#fff')};
  }

  &::placeholder ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-bottom: ${({ error }) =>
      error ? '3px solid #c71436' : '3px solid #fff'};
    border-image-slice: 1;

    &::placeholder {
      color: transparent;
    }

    ~ label {
      position: absolute;
      top: 0;
      display: block;
      font-size: 1rem;
      color: ${({ error }) => (error ? '#c71436' : '#fff')};
      font-weight: 700;
    }
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const FormLabel = styled.label`
  color: transparent;
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
`;

const Input: FC<InputProps> = ({
  name,
  placeholder,
  label,
  isRequired,
  isError,
  register,
  isUrl,
}) => {
  return (
    <>
      <FormField
        type="text"
        name={name}
        id={name}
        error={isError}
        ref={register}
        placeholder={`${placeholder}${isRequired ? '*' : ''}` || ''}
        {...register(name, {
          required: {
            value: !isUrl,
            message: 'Required field',
          },
          validate: {
            isValid: (value: string) => {
              if ((isUrl && !value) || !isUrl) return true;
              return isValidUrl(value) || 'Not valid URL';
            },
          },
        })}
      />
      <FormLabel htmlFor={name}>
        {label}
        {isRequired && '*'}
      </FormLabel>
    </>
  );
};

export default Input;
