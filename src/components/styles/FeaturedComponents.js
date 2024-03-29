import styled from 'styled-components';
import iPad from '../../images/ipad.svg';
// import { Header } from './SharedComponents';

export const FeaturedSection = styled.section`
  max-width: 1184px;
  margin: 0 auto;
  padding: 100px 24px;
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
  height: 100%;
  width: 100%;
`;

export const FeaturedImage = styled.div`
  margin: 0 auto;
  opacity: .5;
  width: 100%;
  height: 100%;
  max-width: 944px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center top;
  object-position: center top;
  background-image: linear-gradient(to bottom, transparent, #222222 100%), url(${iPad});
  border-radius: 0% 0% 3% 3%;
`;
