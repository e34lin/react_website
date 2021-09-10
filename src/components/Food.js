import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import food1  from "../pics/food/food1.JPG";
import food2  from "../pics/food/food2.JPG";
import food3  from "../pics/food/food3.JPG";
import food4  from "../pics/food/food4.JPG";
import food5  from "../pics/food/food5.JPG";
import food6  from "../pics/food/food6.JPG";
import food7  from "../pics/food/food7.JPG";
import food8  from "../pics/food/food8.jpg";
import food9  from "../pics/food/food9.JPG";
import food10  from "../pics/food/food10.JPG";
import food11  from "../pics/food/food11.JPG";


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
          <h2 className="strikes">Cooking and Food Blog</h2>
          <h6>You can check out my food instagram <a href="https://www.instagram.com/_lizzy.foodie/" target="_blank" rel="noopener noreferrer">here</a></h6>
        <Slider {...settings}>
          <div>
            <img src={food1} alt="food1" style={{ width: 275 }} />
          </div>

          <div>
            <img src={food2} alt="food2" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food3} alt="food3" style={{ width: 275 }} />
          </div>

          <div>
            <img src={food4} alt="food4" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food5} alt="food5" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food6} alt="food6" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food7} alt="food7" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food8} alt="food8" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food9} alt="food9" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={food10} alt="food10" style={{ width: 275 }}/>
          </div>
          
          <div>
            <img src={food11} alt="food11" style={{ width: 275 }}/>
          </div>
    
        </Slider>
      </div>
    );
  }
}