import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  & > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mediaMedium}) {
    gap: 0;
  }
`;
