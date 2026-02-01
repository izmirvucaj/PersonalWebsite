import React from 'react';
import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature';
import { Banner } from '../components/home/banner';
import AppContact from '../components/home/contact';


function AppHome() {
  return (
    <div className="main">
      <Banner></Banner>
      <AppFeature></AppFeature>
      <AppHero/>
      <AppContact></AppContact>
      
    </div>
  );
}

export default AppHome;