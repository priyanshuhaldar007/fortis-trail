import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product from "./Product";
import "../Assets/sass/Carousel.scss";
import "../Assets/sass/style.scss";

export default function LandingCarousel(props) {
  const products = props.data;
  return (
    <div
      style={{ backgroundColor: "#f8d77d", maxWidth: "98vw" }}
      className="glow-card Carousel-section"
    >
      <Carousel
        // interval={1000}
        centerMode={true}
        showArrows={true}
        centerSlidePercentage={20}
        // infiniteLoop={true} 
        // selectedItem={4}
      >
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}
