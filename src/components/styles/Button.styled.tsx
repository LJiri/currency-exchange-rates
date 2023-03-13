import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: var(--form-element-height);
  border: none;
  border-radius: var(--border-radius);
  background: var(--color-primary);
  cursor: pointer;
  color: var(--color-white);

  &:hover {
    background: var(--color-primary-hover);
  }
`;
