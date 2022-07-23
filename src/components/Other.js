import React from "react";

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

import placeholder from '../images/placeholder.png';

const Other = () => {
  return (
    <OtherSection>
      <OtherArticle>
        <Header>Other work</Header>
        <OtherColumns>
          <CardDesc>
            <OtherCardImg src={placeholder} />
            <CardHeader>Project Title</CardHeader>
            <Text3>Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.</Text3>
            <TagList>
              <TagBubble><Tag>Mobile App</Tag></TagBubble>
            </TagList>
          </CardDesc>
          <CardDesc>
            <OtherCardImg src={placeholder} />
            <CardHeader>Project Title</CardHeader>
            <Text3>Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.</Text3>
            <TagList>
              <TagBubble><Tag>Mobile App</Tag></TagBubble>
            </TagList>
          </CardDesc>
        </OtherColumns>
      </OtherArticle>
    </OtherSection>
  )
}

export default Other;