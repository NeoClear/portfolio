import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const edges = [
    {
      id: "robinhood",
      name: "Robinhood - Summer 2021",
      role: "Incoming Backend Engineering Intern",
      description: ""
    },
    {
      id: "akuna-return",
      name: "Akuna Capital - Summer 2021",
      role: "Returning Python Development Intern",
      description: ""
    },
    {
      id: "akuna",
      name: "Akuna Capital - Summer 2020",
      role: "Python Development Intern",
      description: "Developed scalable python microservices to ingest and analyze huge volumes of trade data to ensure business critical limits are set."
    },
    {
      id: "tesla",
      name: "Tesla - Fall 2019",
      role: "Software Engineering Intern",
      description: "Rearchitected flow of updates to Tesla navigation data. Created robust and fail-safe multiprocessing python scripts to query for map data and push updates to production navigationd data."
    },
    {
      id: "blackberry",
      name: "Blackberry - Summer 2019",
      role: "Software Engineering Intern",
      description: "Increased test automation coverage by over 50% on QNX networking binaries such as iperf2, iperf3, vlan, and ifconfig."
    },
    {
      id: "rbc",
      name: "The Royal Bank of Canada - Fall 2018",
      role: "DevOps Intern",
      description: "Migrated CICD pipeline to use selenium hub for frontend E2E tests, cutting testing time down from 60 minutes to 12 minutes."
    },
  ]
  return (
    <Wrapper as={Container} id="experience">
      <h2>Work Experience</h2>
      <Grid>
        {edges.map((node) => (
          <Item key={node.id} as="a" href="https://linkedin.com/in/dnelw" target="_blank" rel="noopener noreferrer" theme={theme}>
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
