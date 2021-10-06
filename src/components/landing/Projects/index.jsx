import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import * as edges from 'data/project';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(node => (
          <Item key={node.id} as="a" draggable="false" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h3>{node.name}</h3>
                <ul>
                  {
                    node.descriptions.map(e => (
                      <li>{e}</li>
                    ))
                  }
                </ul>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <Languages theme={theme}>
                    {
                      node.technologies.map(({ id, name }) => (
                        <div key={id}>
                          {name}
                        </div>
                      ))
                    }
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
