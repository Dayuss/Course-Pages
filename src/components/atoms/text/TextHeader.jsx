import styled, {css} from "styled-components";

export const TextHeader = styled.h2`
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #252A3C;
`;

export const SubHeader = styled.h4`
  font-weight: 500;
  font-size: 12px;
  color: #8189A2;
  line-height: 140%;
`;

export const Text = styled.p`
  font-size: 16px;
  ${props=>props.clickable && css`cursor:pointer;`}
  ${props=>props.primary?css`
    color: #7800EF;
  `:(props.muted?css`
    color: #8189A2;
  `:css`
    color: #252A3C;
  `)}
`;
