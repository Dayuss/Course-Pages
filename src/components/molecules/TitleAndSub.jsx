import styled from "styled-components";

import { TextHeader, SubHeader } from "../atoms/text/TextHeader";

export const TitleAndSub = ({title, sub}) => {
  return (
    <Container>
        <TextHeader>{title}</TextHeader>
        <Subs>{sub}</Subs>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Subs = styled(SubHeader)`
  margin-left:25px;
  padding-top: 6px;
`