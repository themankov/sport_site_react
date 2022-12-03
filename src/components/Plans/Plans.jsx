import React from 'react';
import './Plans.css';
import whiteTick from './../../assets/whiteTick.png';
import rightArr from './../../assets/rightArrow.png';
import { plansData } from '../../data/PlansData';
export const Plans = ({ innerRef, getInfo }) => {
  const cards = plansData.map((item) => {
    return (
      <div className="plans_card" ref={innerRef}>
        {item.icon}
        <span className="card_title">{item.name}</span>
        <span className="card_price">$ {item.price}</span>
        <ul>
          <li>
            <img src={whiteTick} alt="white tick" />
            <span>{item.features[0]}</span>
          </li>
          <li>
            <img src={whiteTick} alt="white tick" />
            <span>{item.features[1]}</span>
          </li>
          <li>
            <img src={whiteTick} alt="white tick" />
            <span>{item.features[2]}</span>
          </li>
        </ul>
        <div className="card_link" onClick={getInfo}>
          <span>See more benefits</span>
          <img src={rightArr} alt="right arrow" />
        </div>
        <div className="card_btn" onClick={getInfo}>
          Join now
        </div>
      </div>
    );
  });
  return (
    <div className="plans">
      <div className="blur blur-plans-1"></div>
      <div className="blur blur-plans-2"></div>
      <div className="plans_heading">
        <span>Ready to start</span>
        <span>your journey</span>
        <span>now with us</span>
      </div>
      <div className="plans_cards">{cards}</div>
    </div>
  );
};
