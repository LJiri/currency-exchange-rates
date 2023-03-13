import styled from "styled-components";

export const Section = styled.section`
  padding: 40px;
  padding-bottom: 20px;
  background: rgba(237, 232, 229, 1);
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mediaMedium}) {
    padding: 10px;
  }
`;
