import styled from "styled-components";
import { Line } from "../atoms/separate/Separate";

export default ({title}) => {
  return (
    <Container>
      <Arrow />
      <Separator header />
      <Title>
        {title}
      </Title>
    </Container>
  );
};

const Container = styled.header`
  padding: 7px 70px;
  background: #FFFFFF;
  box-shadow: 3px 3px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
`;

const Separator = styled(Line)`
  margin-left:20px;
`

const Title = styled.h3`
  margin-left:20px;
`;

const Arrow = ()=>{
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 10.5L1 6M1 6L5.5 1.5M1 6L17 6" stroke="#262F56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}