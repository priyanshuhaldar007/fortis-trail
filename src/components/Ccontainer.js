import React from 'react';
import Slider from "react-slick";
import image1 from '../Assets/imgs/1.jpg';
import image2 from '../Assets/imgs/1.jpg';
import image3 from '../Assets/imgs/1.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Ccontainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
return (
  <div className="slider-wrapper recom-body">
    <div>
      <Slider {...settings}>
        <div>
          <img  
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </div>
        <div>
        <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </div>
      </Slider>
    </div>
  </div>
  )
}

export default Ccontainer;