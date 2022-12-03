import React from 'react';
import './Footer.css';
import linkedin from './../../assets/linkedin.png';
import github from './../../assets/github.png';
import instagram from './../../assets/instagram.png';
import logo from './../../assets/logo.png';
export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <ul>
        <li>
          <a href="https://github.com/">
            <img src={github} alt="social_icons" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/">
            <img src={linkedin} alt="social_icons" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="social_icons" />
          </a>
        </li>
      </ul>
      <img src={logo} alt="logo" />
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-2"></div>
    </div>
  );
};
