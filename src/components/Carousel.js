import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

import { Link } from './styles/SharedComponents';

import {
  CarouselHeader,
  StyledSlider,
  CarouselSection,
  CarouselProject,
  CarouselTextWrapper,
  CarouselImage,
  CarouselText,
  CarouselTag,
  CarouselTagBubble,
  CarouselTagList,
  CarouselCalltoAction,
} from './styles/CarouselComponents';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// .filter(project => project.name !== featuredProject.name )

const renderSlides = (featuredProject) => {
  return projects.filter((project) => project.name !== featuredProject.name).map((project) =>
    <div key={project.key}>
      <CarouselProject>
        <CarouselTextWrapper>
          <CarouselHeader>{project.name}</CarouselHeader>
          <CarouselTagList>
            {project.tags.map((tag, i) =>
              <CarouselTagBubble key={i}>
                <CarouselTag>{tag}</CarouselTag>
              </CarouselTagBubble>)}
          </CarouselTagList>
          <CarouselText>{project.desc}</CarouselText>
          <Link href={project.link} target="_blank" rel="noreferrer">
            <CarouselCalltoAction>Show me more &#8594;</CarouselCalltoAction>
          </Link>
        </CarouselTextWrapper>
        <CarouselImage src={project.img === '#' ? placeholder : project.img} alt={project.img === '#' ? 'a tent on grass with one pine tree' : project.alt} />
      </CarouselProject>
    </div>);
};

function Carousel({ featuredProject }) {
  return (
    <CarouselSection id="work">
      <Gradient3>
        <Gradient3A />
        <Gradient3B />
      </Gradient3>
      <Gradient4>
        <Gradient4A />
        <Gradient4B />
      </Gradient4>
      <StyledSlider {...carouselSettings}>
        {renderSlides(featuredProject)}
      </StyledSlider>
    </CarouselSection>
  );
}

export default Carousel;
