import styled from "styled-components";
import { Text3, CalltoAction } from "./SharedComponents";

export const FooterSection = styled.footer`
  margin: 0 auto;
  display: flex;
  padding: 45px 24px;
  align-items: center;
  max-width: 1184px;
  justify-content: space-between;
`;

export const FooterMenu = styled.div`
  display: flex;
  text-align: center;
  gap: 48px;
`;

export const FooterText = styled(Text3)`
  cursor: pointer;
;`

export const FooterBack = styled(CalltoAction)`
  margin-right: 0;
`;