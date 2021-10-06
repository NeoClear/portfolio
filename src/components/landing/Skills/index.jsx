import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Linker } from './styles';
import * as Resume from 'assets/resume/resume.pdf';

import {
  defaultDescription,
} from 'data/config';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt={defaultDescription} />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About Me</h1>
          <p>
            I'm a student studying computer science at the University of Toronto. Currently I am seeking for fall 2022 internships!
          </p>
          <p>
            Wanna know more about me? Check out this <Linker href={Resume}>resume</ Linker>!
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
