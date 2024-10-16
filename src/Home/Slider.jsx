import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Optional: for custom icons

// Custom Previous Arrow
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    ></div>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    ></div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul
          style={{ margin: "12px", display: "flex", justifyContent: "center" }}
          className="-ml-10"
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75"
          alt="Error"
        />
      </div>

      <div>
        <img
          src="https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75"
          alt="Error"
        />
      </div>

      <div>
        <img
          src="https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75"
          alt="Error"
        />
      </div>

      <div>
        <img
          src="https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75"
          alt="Error"
        />
      </div>

      <div>
        <img
          src="https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75"
          alt="Error"
        />
      </div>

      <div>
        <img
          src="https://img-prd-pim.poorvika.com/pageimg/12-Instant-Discount-Web-banner-11zon.webp?width=1900&height=400&quality=75"
          alt="Error"
        />
      </div>
      {/* Repeat for other slides */}
    </Slider>
  );
}
