import styled from "styled-components";

import { ButtonIcon } from "../molecules/ButtonWithIcon";
import { TitleAndSub } from "../molecules/TitleAndSub";
import {  toast } from 'react-toastify';

export const PageHeader = () => {
  const handlePreview = () => {
    toast("Preview!");
  }
  return (
    <Container>
      <TitleAndSub 
        title="Belajar dan praktek cinematic videography"
        sub="Last edited 18 October 2021 | 13:23"
      />
      <ButtonIcon icon="preview" onClick={handlePreview}>Preview</ButtonIcon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;