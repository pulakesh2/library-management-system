import styled from "styled-components";
import { Headings } from "./Headings";
import { Button } from "./Button";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/6;
  background-color: var(--color-light-bg-secondary);
  padding: 1rem 2rem 3rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  & label {
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;

export const StyledStudentAccount = styled.form`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1rem auto auto;
  align-items: center;
  column-gap: 5rem;
  row-gap: 4rem;
`;

export const AccountImage = styled.div`
  background-color: var(--color-light-bg-secondary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 2rem;
  grid-column: 6/11;
  overflow: hidden;
`;

export const BookAcquire = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: var(--color-light-bg-secondary);
  border-radius: 12px;
  grid-column: 1/-1;
  padding: 2rem;
  & span {
    display: block;
    margin-top: 0.8rem;
  }
`;
export const StyledButton = styled(Button)`
  grid-column: 5/6;
  padding: 0.8rem 3rem;
`;

export const StyledHeadings = styled(Headings)`
  grid-column: 1/-1;
`;

export const StyledSelect = styled.select`
  appearance: none;
  background-color: var(--color-light-bg-secondary);
  border: 1px solid var(--color-light-border-tertiary);
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-light-text-secondary);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
`;
