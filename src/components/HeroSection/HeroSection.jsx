/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './heroSection.css';
import hero from './../../assets/hero_image.png';
import hero_bg from './../../assets/hero_image_back.png';
import heart from './../../assets/heart.png';
import calories from './../../assets/calories.png';
import { useEffect } from 'react';
export const HeroSection = ({ innerRef, getInfo }) => {
  const [coachesNum, setCoachesNum] = useState(0);
  const [membersNum, setMembersNum] = useState(450);
  const [fitness, setFitnessNum] = useState(0);
  useEffect(() => {
    let t1 = Math.round(2000 / (140 / 1));
    let t2 = Math.round(2000 / (978 / 3));
    let t3 = Math.round(2000 / (50 / 1));
    let interval2 = setInterval(() => {
      setMembersNum((state) => {
        if (state >= 977) {
          clearInterval(interval2);
        }
        return (state += 3);
      });
    }, t2);
    let interval1 = setInterval(() => {
      setCoachesNum((state) => {
        if (state === 139) {
          clearInterval(interval1);
        }
        return (state += 1);
      });
    }, t1);
    let interval3 = setInterval(() => {
      setFitnessNum((state) => {
        if (state === 49) {
          clearInterval(interval3);
        }
        return (state += 1);
      });
    }, t3);
  }, []);
  console.log('a');
  return (
    <div className="heroSection" ref={innerRef}>
      {/*Fitness Club*/}
      <div className="blur blur-hero"></div>
      <div className="heroSection_content">
        <div className="heroSection_left">
          <div className="fitness_ad">
            <div></div>
            <div>
              <span>The best Fitness Club in the town</span>
            </div>
          </div>
          {/* text */}
          <div className="fitness_ad_text">
            <div>
              <span>Shape </span> <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
          {/* detailes */}
          <div className="detailes">
            <div>
              <span>+{coachesNum}</span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+{membersNum}</span>
              <span>Members Joined</span>
            </div>
            <div>
              <span>+{fitness}</span>
              <span>Fitness Programs</span>
            </div>
          </div>
          {/* buttons */}
          <div className="buttons">
            <div className="btn" onClick={getInfo}>
              Get Started
            </div>
            <div className="btn" onClick={getInfo}>
              Learn More
            </div>
          </div>
        </div>
        <div className="heroSection_right">
          {/* Images */}
          <img src={hero} alt="heroSection" className="heroSection_img" />
          <img src={hero_bg} alt="heroSection" />
          {/* Heart Rate */}
          <div className="heart_rate">
            <div>
              <img src={heart} alt="heart" className="heart_rate_img" />
            </div>

            <div>Heart Rate</div>
            <div>116 bpm</div>
          </div>
          {/* Calories */}
          <div className="calories">
            <div>
              <img src={calories} alt="calories" />
            </div>
            <div>
              <div>Calories burned</div>
              <div>220 kcal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
