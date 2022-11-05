import styled from "styled-components";

import { Tabs, TabItem } from "../atoms/tabs/Tab";

export const TabComponent = ({item}) => {
  return (
    <Container>
      <Tabs>
        <TabItem active>
          {item}
        </TabItem>
      </Tabs>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;