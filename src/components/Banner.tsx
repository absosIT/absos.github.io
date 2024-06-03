import React from 'react';
import './Banner.css';
import bannerImage from '../images/logo7.png';

const Banner = (): JSX.Element => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="absos" />
    </div>
  );
}

export default Banner;
