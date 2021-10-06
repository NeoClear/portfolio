import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages, SubHead } from './styles';
import { socialLinks } from 'data/config';
import * as edges from 'data/experience';

export const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="experience">
      <h2>Work Experience</h2>
      <Grid>
        {edges.map((node) => (
          <Item key={node.id} draggable="false" as="a" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h3>{node.name}</h3>
                <SubHead>
                  <p className="role">
                    {node.role}
                  </p>
                  <div>
                    {node.duration}
                  </div>
                </SubHead>
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
