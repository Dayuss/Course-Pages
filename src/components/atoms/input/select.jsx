import styled from "styled-components";

export const Selects = styled.select`
  width:100%;
  border:2px solid #aaa;
  background: white;
  border-radius:4px;
  margin:8px 0;
  padding:10px 8px;
  font-size: 14px;
  outline:none;
  box-sizing:border-box;
  transition:.3s;  
  option {
    color: black;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding:10px 8px;
    font-size: 14px;
  }
`;