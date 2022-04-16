import React from 'react';
import { Layout, Seo } from 'components/common';
import { Intro, Experience, Skills, Contact, Projects } from 'components/landing';
import { Intel } from 'components/landing/Intel';

export default () => (
  <Layout>
    <Seo />
    <Intro />
    <Skills />
    <Experience />
    <Projects />
    <Intel />
    <Contact />
  </Layout>
);
