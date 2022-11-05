import styled ,  { css } from "styled-components";

 export const Button = styled.button`
  ${props => props.small ? css`
    padding: 5px 9px;
  `:css`
    padding: 10px 16px;
  `}
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius:7px;
  ${props => props.primary ? css`
    background-color: #7800EF;
    border: none;
    color: white;
  `:css`
    background-color: #ffffff;
    border-color: #7800EF;
    border-width: thin;
    color: #7800EF;
  `}
`;

