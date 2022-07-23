import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholder from '../images/placeholder.png';
import { projects } from '../constants/constants';

import {
  Gradient3,
  Gradient3A,
  Gradient3B,
  Gradient4,
  Gradient4A,
  Gradient4B,
} from './styles/Gradients';

import {
  Link,
  TagBubble,
} from './styles/SharedComponents';

import {
  CarouselHeader,
  StyledSlider,
  CarouselSection,
  CarouselProject,
  CarouselTextWrapper,
  CarouselImage,
  CarouselText,
  CarouselTag,
  CarouselTagList,
  CarouselCalltoAction,
} from './styles/CarouselComponents';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderSlides = () => {
  return projects.map(project =>
    <div key={project.key}>
      <CarouselProject>
        <CarouselTextWrapper>
          <CarouselHeader>{project.name}</CarouselHeader>
          <CarouselTagList>
            {project.tags.map((tag, i) =>
              <TagBubble key={i}>
                <CarouselTag>{tag}</CarouselTag>
              </TagBubble>
            )}
          </CarouselTagList>
          <CarouselText>{project.desc}</CarouselText>
          <Link href={project.link} target='_blank' rel='noreferrer'>
            <CarouselCalltoAction>Tell me more &#8594;</CarouselCalltoAction>
          </Link>
        </CarouselTextWrapper>
        <CarouselImage src={placeholder} alt="a tent on grass with one pine tree" />
      </CarouselProject>
    </div>
  )
}

const Carousel = () => {
  return (
    <CarouselSection id='work'>
      <Gradient3>
        <Gradient3A />
        <Gradient3B />
      </Gradient3>
      <Gradient4>
        <Gradient4A />
        <Gradient4B />
      </Gradient4>
      {/* <CarouselButtonL /> */}
      <StyledSlider {...carouselSettings}>
        {renderSlides()}
        {/* <div>
         <h1>Hello world</h1>
        </div>
        <div>
          <h1>Goodbye world</h1>
        </div> */}
      </StyledSlider>
      {/* <CarouselButtonR /> */}
    </CarouselSection>

    // <Slider {...carouselSettings}>
    //   {/* {renderSlides()} */}
    //   <h1>Hello world</h1>
    //   <h1>Goodbye world</h1>
    // </Slider>
  )
};

export default Carousel;