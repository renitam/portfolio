import styled from 'styled-components';
import Slider from 'react-slick';
import {
  Tag,
  Text,
  TagList,
  CalltoAction,
  Header,
  TagBubble,
} from './SharedComponents';
import arrow from '../../images/arrow.svg';

export const StyledSlider = styled(Slider)`
  margin: 0 auto;
  max-width: 1032px;
  width: 100%;

  .slick-dots li.slick-active button:before {
    color: #ffffff;
  }

  .slick-arrow {
    background-image: url(${arrow});
    background-color: #333333;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    margin: 0;
    height: 56px;
    width: 56px;
    opacity: 1;
    transition: linear 0.25s opacity;
    border: none;

    &:hover {
      opacity: 0.75;
    }
  }

  @media screen and (max-width: 1100px) {
      .slick-arrow {
        height: 40px;
        width: 40px;
      }

      .slick-prev {
        left: 0px;
      }

      .slick-next {
        right: 0px;
      }
    }

  .slick-prev {
    position: absolute;
    left: -60px;

    &:before {
      content: '';
    }
  }

  .slick-next {
    position: absolute;
    right: -60px;
    transform: rotate(180deg);

    &:before {
      content: '';
    }
  }
`;

export const CarouselSection = styled.section`
  max-width: 1184px;
  margin: 0 auto;
  display: flex;
  padding: 50px 24px;

  @media (max-width: 1100px) {
    align-items: center;
    padding: 0 100px;
  }

  @media (max-width: 375px) {
    padding: 0 56px;
  }
`;

export const CarouselProject = styled.article`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  max-width: 1184px;
  cursor: pointer;
  padding: 0;
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    max-width: 412px;
    width: 100%;
    height: auto;
    margin: auto;
  }
`;

export const CarouselTextWrapper = styled.div`
  margin: 0 auto;
  max-width: 412px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  text-align: center;
`;

export const CarouselHeader = styled(Header)`
  letter-spacing: 0.0022em;
  cursor: pointer;

  @media and screen (max-width: 375px) {
    font-size: 24px;
  }
`;

export const CarouselTagList = styled(TagList)`
  margin: 22px 0 10px;
  justify-content: center;
`;

export const CarouselTagBubble = styled(TagBubble)`
  &:first-of-type {
    margin-left: 0;
  }
`;

export const CarouselTag = styled(Tag)`
  cursor: pointer;
`;

export const CarouselText = styled(Text)`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  /* or 29px */
  letter-spacing: 0.0007em;
  /* Text + Icons/Dark • Medium Emphasis */
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

export const CarouselCalltoAction = styled(CalltoAction)`
  margin: 29px auto 0;
`;

export const CarouselImage = styled.img`
  max-width: 412px;
  max-height: 379px;
  width: 100%;
  height: 100%;
  margin: 24px auto;
  object-fit: fill;
  background-repeat: no-repeat;
  border-radius: 32px;
`;
