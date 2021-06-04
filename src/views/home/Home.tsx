import React from 'react';
import Hero from './Hero';
import FunFact from './FunFact';
import SubFooter from './SubFooter';
import Page from 'src/components/Page';

const Home = () => {
  return (
    <Page title='Homepage'>
      <Hero />
      <FunFact />
      <SubFooter />
    </Page>
  );
};

export default Home;
