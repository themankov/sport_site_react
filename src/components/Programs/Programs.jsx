import React from 'react';
import rightArrow from './../../assets/rightArrow.png';
import { programsData } from '../../data/ProgramsData';

import './Program.css';
export const Programs = ({ innerRef, getInfo }) => {
  const data = programsData.map((item) => {
    return (
      <div className="card">
        {item.image}
        <div className="heading">{item.heading}</div>
        <div>{item.details}</div>
        <div className="card_button" onClick={getInfo}>
          <span>Join Now</span>
          <img src={rightArrow} alt="arrow" srcset="" />
        </div>
      </div>
    );
  });
  return (
    <div className="programs" ref={innerRef}>
      <div className="programs_heading">
        <span>Explore our</span>
        <span>Programs</span>
        <span>To shape you</span>
      </div>
      <div className="programs_card">{data}</div>
    </div>
  );
};
