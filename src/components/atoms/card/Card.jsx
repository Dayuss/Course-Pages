import styled, { css } from "styled-components";

export const Card = styled.div`
  border: 1px solid #DFE5EE;
  border-radius: 8px;
  padding: 10px;
  ${props=>props.alert && css`
    padding: 16px;
  `}
  line-height: 24px;
  font-size: 13px;
`;
