import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  max-width: 1200px;

  & > * {
    flex: 1;
  }
`;
