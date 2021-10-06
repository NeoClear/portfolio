import React from 'react';
import { Layout } from 'components/common';
import { Intro, Experience, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <Intro />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
);
