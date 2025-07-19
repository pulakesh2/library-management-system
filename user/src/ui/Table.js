import styled, { css } from "styled-components";

export const TContainer = styled.div`
  height: 50dvh;
  overflow-y: auto; /* 👈 scroll only vertically */
  scroll-behavior: smooth;
  margin-top: 2rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  ${({ variation }) =>
    variation === "request" &&
    css`
      height: 75dvh;
    `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: scroll;
  scroll-behavior: smooth;

  & th {
    /* background: #f8fafc; */
    background: var(--color-light-bg-tertiary);
    padding: 16px;
    text-align: left;
    font-weight: 600;
    font-size: 13px;
    color: #374151;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #e5e7eb;
  }

  & td {
    padding: 16px;
    border-bottom: 1px solid #f3f4f6;
    font-size: 14px;
  }

  & tr:hover {
    background: var(--color-light-bg-hover);
  }
`;
