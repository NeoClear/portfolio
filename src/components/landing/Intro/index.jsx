import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

import {
  defaultDescription,
} from 'data/config';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi!</h1>
          <h4>{defaultDescription}</h4>
          <Button as={AnchorLink} draggable="false" href="#contact">
            Contact me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt={defaultDescription} />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
