import React, { useState } from 'react';
import logo from './../../assets/logo.png';
import './Header.css';
import bars from './../../assets/bars.png';

export const Header = ({ data, setSelectedLink, getInfo }) => {
  const [showBar, setShowBar] = useState(false);
  const showNavBar = () => {
    setShowBar((state) => {
      return !state;
    });
  };
  const dataLi = data.map((item, index, arr) => {
    if (arr.length - 1 === index) {
      return null;
    }
    return (
      <li
        className="navigation__item"
        onClick={() => {
          setSelectedLink(item);
        }}
      >
        {item}
      </li>
    );
  });
  return (
    <div className="header">
      <input type="checkbox" id="check" class="navigation-input" hidden />
      <label for="check">
        <div class="hamburger-menu">
          <img src={bars} alt="bars" className="bars" />
        </div>
      </label>
      <div className="header-left">
        <div className="header-left-img">
          <img src={logo} alt="logo" />
        </div>

        <nav className="navigation">
          <ul className="navigation-list">{dataLi}</ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="btn" onClick={getInfo}>
          Join Now
        </div>
      </div>
    </div>
  );
};
