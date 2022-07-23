import styled from "styled-components";
import iPad from '../../images/ipad.svg';

import { Header } from "./SharedComponents";

export const FeaturedSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 104px 0 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const FeaturedProjectArticle = styled.article`
  max-width: 654px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  align-items: center;
`;

export const FeaturedImageWrapper = styled.div`
  margin: 0 auto;
  height: 400px;
  width: 944px;
`;

export const FeaturedImage = styled.div`
  margin: 0;
  opacity: .5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  background-image: linear-gradient(to bottom, transparent, #222222 100%), url(${iPad});
  border-radius: 0% 0% 3% 3%;
`;