import styled, { css } from "styled-components";

export const Dot = ()=>{
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 12C15 13.6568 13.6569 15 12 15C10.3431 15 9 13.6568 9 12C9 10.3431 10.3431 8.99999 12 8.99999C13.6569 8.99999 15 10.3431 15 12Z" fill="#BCC0D0"/>
    </svg>

  )
}

export const Line = styled.div`
  ${props=>props.header? css`
    height:20px;
  `:css`
    height:30px;
  `}
  width:0px;
  border: 1px solid #BCC0D0;
`;