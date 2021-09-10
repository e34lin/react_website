import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import gudetama  from "../pics/art/pic1.JPG";
import sunset  from "../pics/art/pic2.JPG";
import night  from "../pics/art/pic3.jpg";
import shooky from "../pics/art/pic4.jpg";
import hello  from "../pics/art/gif1.gif";
import donut from "../pics/art/gif2.gif";


export default class Fade extends Component {
  
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
        <h2 className="strikes">Artwork: Illustrations and GIFs</h2>
        <Slider {...settings}>
          <div>
            <img src={gudetama} alt="gudetama" style={{ width: 275 }} />
          </div>

          <div>
            <img src={sunset} alt="sunset" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={night} alt="night" style={{ width: 275 }} />
          </div>

          <div>
            <img src={hello} alt="hello" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={donut} alt="donut" style={{ width: 275 }}/>
          </div>

          <div>
            <img src={shooky} alt="shooky" style={{ width: 275 }} />
          </div>
    
        </Slider>
      </div>
    );
  }
}