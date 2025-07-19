import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 9px;
  background-color: var(--color-brand-blue);
  cursor: pointer;
  transition: all 0.3s;

  ${({ variation }) =>
    variation === "primary" &&
    css`
      background-color: var(--color-brand-blue);
      color: #fff;
      &:hover {
        background-color: var(--color-brand-blue-hover);
      }
    `}

  ${({ variation }) =>
    variation === "secondary" &&
    css`
      background-color: var(--color-light-bg-elevated);
      color: #000;

      &:hover {
        background-color: var(--color-light-bg-active);
      }
    `}


     ${({ variation }) =>
    variation === "disable" &&
    css`
      background-color: #d3d3d3;
      color: #000;

      &:hover {
        background-color: #d3d3d3;
      }
    `}
 ${({ size }) =>
    size === "small" &&
    css`
      font-size: var(--font-size-base);
      padding: 0.5rem 3rem !important;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: var(--font-size-lg);
      padding: 0.4rem 2rem !important;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: var(--font-size-xl);
      padding: 0.8rem 3rem !important;
    `}
`;
