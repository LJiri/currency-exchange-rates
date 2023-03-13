import styled from "styled-components";

export const Select = styled.div`
  width: 100%;
  height: calc(var(--form-element-height) + 20px);

  select {
    height: var(--form-element-height);
    width: 100%;
    border-radius: var(--border-radius);
    border: 1px solid rgba(102, 97, 102, 0.2);
    outline: none;
    font-size: 16px;
    padding: 0 10px;
  }
`;
