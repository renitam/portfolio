import React from 'react';

import {
  Header,
  Text3,
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

import placeholder from '../images/placeholder.png';

function Other() {
  return (
    <OtherSection id="other">
      <OtherArticle>
        <Header>Other work</Header>
        <OtherColumns>
          <CardDesc>
            <OtherCardImg src={placeholder} />
            <CardHeader>{template.name}</CardHeader>
            <Text3>{template.desc}</Text3>
            <TagList>
              <TagBubble><Tag>{template.tag}</Tag></TagBubble>
            </TagList>
          </CardDesc>
          <CardDesc>
            <OtherCardImg src={placeholder} />
            <CardHeader>{template.name}</CardHeader>
            <Text3>{template.desc}</Text3>
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
