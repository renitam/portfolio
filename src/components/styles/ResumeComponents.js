import styled from "styled-components";
import { Tag, TagBubble } from "./SharedComponents";

export const WorkExperience = styled.section`
  padding: 88px 344px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const DateBubble = styled(TagBubble)`
  background: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(100px);
`;

export const Dates = styled(Tag)`
  color: rgba(0, 0, 0, 0.87);
`;

export const ResumePdf = styled.iframe`
  
`;