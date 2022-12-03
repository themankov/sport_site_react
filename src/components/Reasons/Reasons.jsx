import React from 'react';
import './Reasons.css';
import nike from './../../assets/nike.png';
import newBalance from './../../assets/nb.png';
import adidas from './../../assets/adidas.png';
import img1 from './../../assets/image1.png';
import img2 from './../../assets/image2.png';
import img3 from './../../assets/image3.png';
import img4 from './../../assets/image4.png';
import tick from './../../assets/tick.png';
export const Reasons = ({ innerRef }) => {
  return (
    <div className="reasons" ref={innerRef}>
      <div className="reasons_left">
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
      </div>
      <div className="reasons_right">
        <span>Some Reasons</span>
        <div>
          <span>Why</span> <span>choose us</span>
        </div>
        <ul>
          <li>
            <img src={tick} alt="tick" />
            <span>Over 140+ Expert coaches</span>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <span>Train Smarter and Faster than before</span>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <span>1 free program for new member</span>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <span>Reliable partners</span>
          </li>
        </ul>
        <div className="partners">
          <span>Our Partners</span>
          <div>
            <img src={newBalance} alt="nb" />
            <img src={adidas} alt="nb" />
            <img src={nike} alt="nb" />
          </div>
        </div>
      </div>
    </div>
  );
};
