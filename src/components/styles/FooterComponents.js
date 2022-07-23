import styled from "styled-components";
import { CalltoAction } from "./SharedComponents";

export const FooterSection = styled.footer`
  margin: 0 auto;
  display: flex;
  padding: 45px 152px;
  align-items: center;
  max-width: 1184px;
  justify-content: space-between;
`;

export const FooterMenu = styled.div`
  display: flex;
  text-align: center;
  gap: 48px;
`;

export const FooterBack = styled(CalltoAction)`
  margin-right: 0;
`;