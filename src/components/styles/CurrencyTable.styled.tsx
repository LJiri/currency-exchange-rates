import styled from "styled-components";

export const CurrencyTable = styled.div`
  table {
    border: 1px solid var(--color-primary);
    border-spacing: 0;
    border-radius: var(--border-radius);
    font-size: 16px;
  }

  tr {
    border-radius: var(--border-radius);

    &:nth-child(even) {
      background: var(--color-white);
    }

    thead & {
      background: var(--color-primary);
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);

      th:first-child {
        border-top-left-radius: var(--border-radius);
      }

      th:last-child {
        border-top-right-radius: var(--border-radius);
      }
    }

    &:last-child {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);

      td:first-child {
        border-bottom-left-radius: var(--border-radius);
      }

      td:last-child {
        border-bottom-right-radius: var(--border-radius);
      }
    }
  }

  th {
    background: var(--color-primary);
    color: var(--color-white);
    padding: 4px 6px;
  }

  td {
    padding: 4px 6px;
  }

  div {
    font-size: 14px;
    margin-top: 5px;
    margin-right: 5px;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mediaSmall}) {
    table {
      font-size: 14px;
    }
  }
`;
