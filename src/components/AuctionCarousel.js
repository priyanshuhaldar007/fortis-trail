import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselCard from "./CarouselCard";
import Product from "./Product";
import "../Assets/sass/style.scss";

export default function AuctionCarousel(props) {
  const products = props.data.filter((data) => data.AuctionEndTime);
  return (
    <div className="liveauction-secrion" style={{ maxWidth: "96vw" }}>
      <Carousel
        width="100%"
        interval={1000}
        centerMode={true}
        transitionTime={500}
        showArrows={true}
        centerSlidePercentage={20}
        infiniteLoop={true}
        selectedItem={2}
      >
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}
