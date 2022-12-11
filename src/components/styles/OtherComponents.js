import styled from 'styled-components';

export const OtherSection = styled.section`
  margin: 0 auto;
  padding: 100px 24px 50px;
  max-width: 1184px;
`;

export const OtherArticle = styled.article`
`;

export const OtherColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  max-width: 1184px;
  margin: 0;
  gap: 64px;
`;

export const OtherCard = styled.div`
  display: flex;
  gap: 32px;
  margin: 24px;
  justify-content: flex-start;
`;

export const OtherCardImg = styled.img`
  max-height: 352px;
  object-fit: cover;
  width: 100%;
  margin: 24px 0;
  border-radius: 32px;
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  width: 100%;
`;

export const CardHeader = styled.h3`
  width: 100%;
  height: 29px;
  margin: 0;

  /* Large • 24 */
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */
  letter-spacing: 0.0007em;

  /* Text + Icons/Dark • High Emphasis */
  color: #FFFFFF;
`;
