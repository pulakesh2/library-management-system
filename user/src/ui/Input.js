import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  background-color: var(--color-light-text-inverse);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: var(--color-light-border-focus);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
`;

const InputLabel = ({ children, error }) => {
  return (
    <>
      {children}
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default InputLabel;
