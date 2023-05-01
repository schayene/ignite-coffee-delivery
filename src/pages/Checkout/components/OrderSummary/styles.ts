import styled from "styled-components";
import { BaseCard } from "../../styles";

export const OrderSummaryContainer = styled(BaseCard)`
  border-radius: 6px 44px;

  table {
    width: 100%;
    margin-block: 1.5rem;

    tr {
      td {
        font-size: 0.875rem;

        &:last-child {
          text-align: right;
        }
      }
    }

    tr + tr td,
    tfoot tr td {
      padding-top: 0.75rem;
    }

    tfoot tr td {
      font-weight: 700;
      font-size: 1.25rem;

      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const ConfirmOrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.875rem;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;

  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: background 0.1s;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
