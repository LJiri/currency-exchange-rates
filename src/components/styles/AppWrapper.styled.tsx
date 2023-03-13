import styled from "styled-components";

export const AppWrapper = styled.div`
  padding: 20px 60px;

  @media (max-width: ${({ theme }) => theme.mediaMedium}) {
    padding: 0;
  }
`;
