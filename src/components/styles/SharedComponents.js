import styled from "styled-components";
import Slider from "react-slick";
import dot from '../../images/navoptions.svg';

// Shared components //

export const Header = styled.h2`
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

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'SF Pro Display', 'sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 120%;
  margin: 0;
  max-width: 469px;
  cursor: default;

  @media (max-width: 767px) {
    font-size: 21px;
  }
`;

export const Text2 = styled.p`
  font-family: 'SF Pro Display', 'sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%; /* or 29px */
  text-align: center;
  letter-spacing: 0.0007em;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
  cursor: default;
`;

export const Text3 = styled.p`
  /* Medium • 17 • M */
  margin: 0;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  /* or 129% */

  letter-spacing: 0.0043em;

  /* Text + Icons/Dark • Medium Emphasis */

  color: rgba(255, 255, 255, 0.7);
  cursor: default;
`;

export const Button = styled.button`
  color: rgba(0, 0, 0, 0.87);
  background-color: #ffffff;
  border-radius: 12px;
  margin: 0;
  font-family: 'SF Pro Text', 'sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  border: none;
  letter-spacing: 0.0043em;
  width: 122px;
  height: 48px;
  opacity: 1;
  transition: linear 0.25s opacity;
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  color: #fffff;
  transition: linear 0.25s opacity;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
  
  &:visited {
    color: #ffffff;
  }
`;

export const CalltoAction = styled.p`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.0043em;
  color: #ffffff;
  width: fit-content;
  margin: 13px 16px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagBubble = styled.div`
  background-color: #333333;
  border-radius: 8px;
  width: fit-content;
  margin: 4px;
`;

export const Tag = styled.p`
  /* Tiny • 12 */
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;  /* identical to box height, or 133% */
  /* Text + Icons/Dark • High Emphasis */
  color: #FFFFFF;
  margin: 6px 12px;
  cursor: default;
`;

export const StyledSlider = styled(Slider)`
  margin: 146px auto;
`;

// Section specific classes //


export const Avatar = styled.img`
  width: 70px;
  height: 68px;
  margin: 0;

  @media (max-width: 767px) {
    margin: 0 0 3px 24px;
    height: 44px;
    width: 44px;
  }
`;


// Intro //
export const IntroSection = styled.section`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 109px 0 0;
`;

export const IntroAboutArticle = styled.article`
  margin: 0 0 0 152px;
  padding: 100px 0;
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

export const IntroActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


// Gradients //

export const Gradient1 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 126px;
  right: 13.402778%;
  margin: 0;
  z-index: -1;
  display: flex;
`;

export const Gradient1A = styled.div`
  background: linear-gradient(180deg, #FF08AB 0%, rgba(112, 97, 163, 0) 100%);
  filter: blur(40px);
  width: 215px;
  height: 201.6px;
  border-radius: 50% 50% 35% 35%;
  margin: 0 auto;
  opacity: 0.7;
`;

export const Gradient1B = styled.div`
  position: absolute;
  width: 369.6px;
  height: 363.2px;
  background: linear-gradient(180deg, #FC50B7 0%, rgba(255, 197, 111, 0.46) 100%);
  filter: blur(40px);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 65% 50% 70% 50%;
  opacity: 0.5;
`;

export const Gradient2 = styled.div`
  position: absolute;
  display: flex;
  width: 380.8px;
  height: 357.6px;
  margin: 0;
  border-radius: 50%;
  z-index: -1;
  margin: 57px auto 0 62px;
`;

export const Gradient2A = styled.div`
  /* Planet */
  justify-self: center;
  margin: 0 auto;
  width: 225.6px;
  height: 217.6px;
  background: linear-gradient(180deg, rgba(0, 194, 255, 1) 0%, #B40463 100%);
  filter: blur(50px);
  opacity: 0.3;
  border-radius: 50%;
`;

export const Gradient2B = styled.div`
  /* Eclipse */
  position: absolute;
  width: 380.8px;
  height: 357.6px;
  background: linear-gradient(180deg, rgba(0, 194, 255, 0.46) 0%, rgba(255, 0, 138, .28) 100%);
  filter: blur(30px);
  opacity: 0.3;
  border-radius: 50%;
`;

export const Gradient3 = styled.div`
  position: absolute;
  width: 293px;
  height: 273px;
  margin: 0;
  border-radius: 50%;
  z-index: -1;
  top: 0;
  right: 0;
`;

export const Gradient3A = styled.div`
  /* Vector */
  width: 155.88px;
  height: 158.34px;
  position: absolute;
  left: 23.4%;
  right: 23.4%;
  top: 5.2%;
  bottom: 36.8%;
  background: linear-gradient(1.35deg, #FB0A3F 10.44%, rgba(249, 166, 65, 0.55) 118.34%);
  filter: blur(100px);
  border-radius: 70% 70% 50% 50%;
`;

export const Gradient3B = styled.div`
  /* Vector */
  position: absolute;
  left: 10.4%;
  right: 10.4%;
  top: 34.2%;
  bottom: -20.6%;
  background: linear-gradient(360deg, rgba(133, 53, 126, 0) 7.18%, #FA0D3F 100.6%);
  filter: blur(70px);
  border-radius: 80% 80% 50% 50%;
`;


export const Gradient4 = styled.div`
  position: absolute;
  width: 211.85px;
  height: 231.32px;
  left: 51.87px;
  bottom: 27.37px;
`;

export const Gradient4A = styled.div`
  /* Vector */
  width: 162.71px;
  height: 135.47px;
  position: absolute;
  left: 20.2%;
  right: 20.2%;
  top: -2.2%;
  bottom: 38.6%;
  background: linear-gradient(180.06deg, rgba(153, 0, 191, 0.28) -18.19%, rgba(0, 78, 228, 0.52) 110.13%);
  filter: blur(50px);
  border-radius: 40% 47% 37% 40%;
`;

export const Gradient4B = styled.div`
  /* Vector */
  width: 211.85px;
  159.12px;
  position: absolute;
  left: 19%;
  right: 3.4%;
  top: 27%;
  bottom: -6.4%;
  background: linear-gradient(180.01deg, rgba(0, 9, 213, 0.65) -8.02%, #64FFB2 85.64%);
  filter: blur(100px);
  border-radius: 50% 50% 70% 50%;
`;
