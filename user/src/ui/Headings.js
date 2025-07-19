import styled, { css } from "styled-components";

export const Headings = styled.h1`
  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
      letter-spacing: 0.5rem;
    `};

  ${({ as }) =>
    as === "h2" &&
    css`
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.3rem;
    `};

  ${({ as }) =>
    as === "h3" &&
    css`
      font-size: 1.2rem;
      font-weight: 400;
      /* color: var(--color-light-text-secondary); */
      color: var(--color-light-text-tertiary);
    `};
  z-index: 1;
`;
