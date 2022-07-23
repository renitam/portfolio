import styled from "styled-components";

export const IntroSection = styled.section`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 79px 0;
`;

export const IntroAboutArticle = styled.article`
  margin: 0;
  padding: 100px 0 100px 152px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 767px) {
    margin: 100px auto 0;
    padding-bottom: 178px;
    width: fit-content;
    max-width: 369px;
    text-align: center;
  }
`;

export const IntroHeader = styled.h1`
  color: #ffffff;
  font-family: 'SF Pro Display', 'sans-serif';
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  margin: 0;
  cursor: default;

  @media (max-width: 767px) {
    font-size: 48px;
  }
`;

export const IntroActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;