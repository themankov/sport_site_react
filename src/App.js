/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';

import React, { createRef, useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection/HeroSection';
import './App.css';
import { Header } from './components/Header/Header';
import { Programs } from './components/Programs/Programs';
import { Reasons } from './components/Reasons/Reasons';
import { Plans } from './components/Plans/Plans';
import { Testimonials } from './components/testimonials/testimonials';
import { Email } from './components/Email/Email';
import { Footer } from './components/Footer/Footer';
const App = () => {
  const [selectedLink, setSelectedLink] = useState('Home');
  const navigationData = [
    'Home',
    'Programs',
    'Why us',
    'Plans',
    'Testimonials',
    'Email',
  ];
  const refs = navigationData.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});
  useEffect(() => {
    refs[selectedLink].current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [selectedLink]);
  const getInfo = () => {
    refs['Email'].current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="app">
      <Header
        data={navigationData}
        setSelectedLink={setSelectedLink}
        getInfo={getInfo}
      />
      <HeroSection innerRef={refs['Home']} getInfo={getInfo} />
      <Programs innerRef={refs['Programs']} getInfo={getInfo} />
      <Reasons innerRef={refs['Why us']} getInfo={getInfo} />
      <Plans innerRef={refs['Plans']} getInfo={getInfo} />
      <Testimonials innerRef={refs['Testimonials']} />
      <Email innerRef={refs['Email']} />
      <Footer />
    </div>
  );
};

export default App;
