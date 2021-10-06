import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import { socialLinks } from 'data/config';

export const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const edges = [
    {
      id: "ta",
      name: "University of Toronto - Fall 2020 to present",
      role: "Teaching Assistant",
      description: "Guide students in weekly labs about various CS practical knowledge. Improved student engagement by demonstrating critical CS skills"
    },
    {
      id: "intel",
      name: "Intel Canada Corporation - Summer 2021 to present",
      role: "SWE Intern",
      description: "Decreased area by 21% and latency by 17% of target FPGA hardware by designing compiler optimization passes using LLVM and C++"
    },
  ]
  return (
    <Wrapper as={Container} id="experience">
      <h2>Work Experience</h2>
      <Grid>
        {edges.map((node) => (
          <Item key={node.id} as="a" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p className="role">
                  {node.role}
                </p>
                <p>{node.description}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
