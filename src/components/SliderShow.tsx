import React, { useState } from 'react';
import './SliderShow.css';
import { Slide } from '../types';
import sliderImage1 from '../images/西方三圣(1).png';
import sliderImage2 from '../images/西方三圣(2).png';
import sliderImage3 from '../images/西方三圣.png';
import sliderImage4 from '../images/XiFang.jpg';

const slides: Slide[] = [
  { id: 1, imageUrl: sliderImage1, caption: '西方三圣接引图' },
  { id: 2, imageUrl: sliderImage2, caption: '西方三圣接引图' },
  { id: 3, imageUrl: sliderImage3, caption: '西方三圣接引图' },
  { id: 4, imageUrl: sliderImage4, caption: '西方三圣接引图' }
];

const SliderShow = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const render = (): JSX.Element => (
    <div className="slider-show">
      <div className="slider">
        <img src={slides[currentSlide].imageUrl} alt={`Slide ${currentSlide + 1}`} />
        <div className="caption">{slides[currentSlide].caption}</div>
      </div>
      <div className="controls">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );

  return render();
};

export default SliderShow;
