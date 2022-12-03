import React from 'react';
import './testimonials.css';
import leftArrow from './../../assets/leftArrow.png';
import rightArrow from './../../assets/rightArrow.png';
import { testimonialsData } from '../../data/TestimonialsData';
import { useState } from 'react';
export const Testimonials = ({ innerRef }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  let length = testimonialsData.length;
  const goBack = () => {
    return selectedItem === 0
      ? setSelectedItem(length - 1)
      : setSelectedItem((prevItem) => {
          return prevItem - 1;
        });
  };

  const goForward = () => {
    return selectedItem === length - 1
      ? setSelectedItem(0)
      : setSelectedItem((item) => {
          return item + 1;
        });
  };

  return (
    <div className="testimonials" ref={innerRef}>
      <div className="testimonials-left">
        <span>testimonials</span>
        <span>What they</span>
        <span>Say About us</span>
        <span>{testimonialsData[selectedItem].review}</span>
        <div>
          <span className="testimonials-name">
            {testimonialsData[selectedItem].name} -
          </span>
          <span className="testimonials-profession">
            {testimonialsData[selectedItem].status}
          </span>
        </div>
      </div>
      <div className="testimonials_right">
        <div></div>
        <div></div>
        <div className="btn_arrows">
          <img src={leftArrow} alt="leftArrow" onClick={goBack} />
          <img src={rightArrow} alt="rightArrow" onClick={goForward} />
        </div>
        <img src={testimonialsData[selectedItem].image} alt="profile" />
      </div>
    </div>
  );
};
