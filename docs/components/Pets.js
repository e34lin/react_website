import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import pet1  from "../pics/dogs/pet1.JPG";
import pet2  from "../pics/dogs/pet2.JPG";
import pet3  from "../pics/dogs/pet3.JPG";
import pet4  from "../pics/dogs/pet4.JPG";
import pet5  from "../pics/dogs/pet5.JPG";
import pet6  from "../pics/dogs/pet6.JPG";


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
          <h2 className="strikes">Furry Friends</h2>
        <Slider {...settings}>
          <div>
            <img src={pet1} alt="pet1" style={{ width: 275 }} />
          </div>

          <div>
            <img src={pet2} alt="pet2" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={pet3} alt="pet3" style={{ width: 275 }} />
          </div>

          <div>
            <img src={pet4} alt="pet4" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={pet5} alt="pet5" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={pet6} alt="pet6" style={{ width: 275 }}/>
          </div>
    
        </Slider>
      </div>
    );
  }
}