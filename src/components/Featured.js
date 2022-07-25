import React from 'react';
import iPad from "../images/ipad.svg";

import {
  Gradient2,
  Gradient2A,
  Gradient2B,
} from './styles/Gradients';

import {
  FeaturedSection,
  FeaturedProjectArticle,
  FeaturedImageWrapper,
  FeaturedImage,
} from './styles/FeaturedComponents';

import {
  Header,
  Text2,
  Link,
  CalltoAction,
  TagList,
  TagBubble,
  Tag
} from './styles/SharedComponents';

const Featured = ({ featuredProject }) => {
  return (
    <FeaturedSection id='featured'>
      <Gradient2>
        <Gradient2A />
        <Gradient2B />
      </Gradient2>
      <FeaturedProjectArticle>
        <TagList>
          {featuredProject.tags.map( (tag, i) => 
            <TagBubble key={i}><Tag>{tag}</Tag></TagBubble>
          )}
        </TagList>
        <Header>{featuredProject.name}</Header>
        <Text2>{featuredProject.desc}</Text2>
        <Link href={featuredProject.link}>
          <CalltoAction>Tell me more &#8594;</CalltoAction>
        </Link>
      </FeaturedProjectArticle>
      <FeaturedImageWrapper>
        <FeaturedImage src={iPad} alt='iPad frame'/>
      </FeaturedImageWrapper>
    </FeaturedSection>
  )
}

export default Featured;