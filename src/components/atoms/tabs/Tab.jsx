import styled ,  { css } from "styled-components";

 export const Tabs = styled.ol`
  border-bottom: 1px solid #DFE5EE;
  padding-left: 0;
  width:100%;
`;

export const TabItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  ${props=>props.active && css`
    color: #6F32D2;
    background-color: white;
    border-bottom: 1px solid #6F32D2;
  `}
`