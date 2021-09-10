import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import travel1  from "../pics/travel/travel1.jpg";
import travel2  from "../pics/travel/travel2.jpg";
import travel3  from "../pics/travel/travel3.jpg";
import travel4  from "../pics/travel/travel4.jpg";
import travel5  from "../pics/travel/travel5.jpg";
import travel6  from "../pics/travel/travel6.jpg";
import travel7  from "../pics/travel/travel7.jpg";


export default class Multiple extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint: 1350, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
          }
          }
        ]

    };
    return (
      <div className="images">
          <h2 className="strikes">Vacation</h2>
        <Slider {...settings}>
          <div>
            <img src={travel1} alt="travel1" style={{ width: 275 }} />
          </div>

          <div>
            <img src={travel2} alt="travel2" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={travel3} alt="travel3" style={{ width: 275 }} />
          </div>

          <div>
            <img src={travel4} alt="travel4" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={travel5} alt="travel5" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={travel6} alt="travel6" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={travel7} alt="travel7" style={{ width: 275 }}/>
          </div>
    
        </Slider>
      </div>
    );
  }
}