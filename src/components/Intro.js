import React from 'react';

import {
  Gradient1,
  Gradient1A,
  Gradient1B,
} from './styles/Gradients';

import {
  Text,
  Button,
  Link,
  CalltoAction,
} from './styles/SharedComponents';

import {
  IntroSection,
  IntroAboutArticle,
  IntroHeader,
  IntroActionsWrapper,
} from './styles/IntroComponents';

function Intro() {
  return (
    <IntroSection id="intro">
      <Gradient1>
        <Gradient1A />
        <Gradient1B />
      </Gradient1>
      <IntroAboutArticle>
        <IntroHeader>Hi, I&apos;m Renita</IntroHeader>
        <Text>
          I&apos;m a customer-centric software engineer building tools to help teams win
        </Text>
        <IntroActionsWrapper>
          <Button>Say Hi 👋</Button>
          <Link href="#work">
            <CalltoAction>See my work &#8595;</CalltoAction>
          </Link>
        </IntroActionsWrapper>
      </IntroAboutArticle>
    </IntroSection>
  );
}

export default Intro;
