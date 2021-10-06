import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        <Item as="a" href={"asdadasdasdas"} target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>Starport</h4>
              <p>SB</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span>
                    Javascript
                  </span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
