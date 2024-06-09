import React from 'react';

import {
  Header,
  Text3,
  Link,
  CalltoAction,
  Tag,
  TagBubble,
  TagList,
} from './styles/SharedComponents';

import {
  OtherArticle,
  OtherCardImg,
  OtherColumns,
  OtherSection,
  CardDesc,
  CardHeader,
} from './styles/OtherComponents';

import { template } from '../constants/constants';
import elearning from '../images/image-hero-mobile.png';
import placeholder from '../images/placeholder.png';

function Other() {
  return (
    <OtherSection id="other">
      <OtherArticle>
        <Header>Other work</Header>
        <OtherColumns>
          <CardDesc>
            <OtherCardImg src={elearning} />
            <CardHeader>Skilled E-Learning Page</CardHeader>
            <Text3>A static React app</Text3>
            <Link href="https://renitam.github.io/skilled-elearning-page" target="_blank" rel="noreferrer">
              <CalltoAction>Show me more &#8594;</CalltoAction>
            </Link>
            <TagList>
              <TagBubble><Tag>React</Tag></TagBubble>
              <TagBubble><Tag>CSS Grid</Tag></TagBubble>
            </TagList>
          </CardDesc>
          <CardDesc>
            <OtherCardImg src={placeholder} />
            <CardHeader>{template.name}</CardHeader>
            <Text3>{template.desc}</Text3>
            <Link href={template.link} target="_blank" rel="noreferrer">
              <CalltoAction>Show me more &#8594;</CalltoAction>
            </Link>
            <TagList>
              <TagBubble><Tag>{template.tag}</Tag></TagBubble>
            </TagList>
          </CardDesc>
        </OtherColumns>
      </OtherArticle>
    </OtherSection>
  );
}

export default Other;
