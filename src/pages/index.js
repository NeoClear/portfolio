import React from 'react';
import { Layout, Seo } from 'components/common';
import { Intro, Experience, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <Seo />
    <Intro />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
);
