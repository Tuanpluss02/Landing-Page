import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles, { layout } from "../../style";


import { portfolio } from '../../constants';

const SimpleSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <Slider {...settings}>
      {
        portfolio.map((data) => (
          <div
            style={{
              background: "var(--black-gradient)",
              borderRadius: "20px",
              margin: "10px 10px",
              padding: "15px",
            }}
          >
            <div key={data.id} className="flex flex-col px-4 items-center">
              {/* Image */}
              <img
                key={data.id}
                src={data.image}
                alt={data.name}
                className="w-[100px] h-[100px] rounded-[50%] mb-4 cursor-pointer object-contained"
                onClick={() => window.open(data.link)}
              />
              {/* Name */}
              <h4 className="
              font-poppins font-medium
              text-[18px] leading-[27px]
              text-white text-center">
                {data.name}
              </h4>
              {/* Role, Justify Center*/}
              <h4
                className="
              font-poppins font-medium
              text-[18px] leading-[27px]
              text-white text-center
              opacity-50"
                style={{ fontStyle: "italic" }}
              >
                {data.role}
              </h4>
              {/* Social and Responsive */}
              <div className="flex flex-row">
                <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
                  <a href={data.github}>
                    <i class="fa-brands fa-github"></i>
                  </a>
                </dic>
                <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
                  <a href={data.linkedin}>
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </dic>
                <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
                  <a href={data.web}>
                    <i class="fa-solid fa-image-portrait"></i>
                  </a>
                </dic>
              </div>
            </div>
          </div>
        ))
      }
    </Slider>
  );
};

export default SimpleSlider;
