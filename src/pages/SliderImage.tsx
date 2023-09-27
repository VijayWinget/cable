

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderImage: React.FC = () => {
    const settings = {
      dots: true, // Show pagination dots
      infinite: true, // Infinite loop
      speed: 500, // Transition speed (milliseconds)
      slidesToShow: 1, // Number of slides to show at a time
      slidesToScroll: 1, // Number of slides to scroll at a time
    };
  
    return (<>
    <div className="carousel-container">
        <Slider {...settings}>
        <div>
          <img src="assets/image/image1.jpg" alt="Image 1"  ></img>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/image/image2.png" alt="Image 2" height="50" width="50" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/image/image3.png" alt="Image 3" height="50" width="50" />
          <p className="legend">Legend 3</p>
        </div>
        </Slider>
      </div>
    </>
    );
  };


  export default SliderImage;