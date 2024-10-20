import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomImageSlider = () => {
  const customImages = [
    "https://cdn.alibaba.ir/cms/uploads/Rexan_Cardview_Banner_Desktop_2x_6cef354481.png",
    "https://cdn.alibaba.ir/cms/uploads/AL_Digitalmarketing_On_going_Cardview_Banner_Desktop_03_02_12_e593c243ab.jpg",
    "https://cdn.alibaba.ir/cms/uploads/Safar_Card_Cardview_Banner_Desktop_02_09_22_89ce30438d.png",
    "https://cdn.alibaba.ir/cms/uploads/Product_Marketing_Internet_Call_Cardview_Banner_Desktop_02_08_29_6970292467.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    variableWidth: false,
    swipeToSlide: true,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-[80%] mx-auto  h-56 mt-10 mb-20">
      <Slider {...settings}>
        {customImages.map((image, index) => (
          <div key={index} className="flex items-center justify-center mt-5">
            <div className="flex space-x-0.5 px-28 ">
              <img 
                src={image} 
                alt={`Custom Image ${index * 2 + 1}`}
                className="w-[0] h-[0] 
                md:w-[580px] md:1/2 md:h-full object-cover rounded-lg p-1"
              />
              <img 
                src={customImages[index + 1] || image} 
                alt={`Custom Image ${index * 2 + 2}`}
                className="w-[0] h-[0] 
                md:w-[580px] md:1/2 md:h-full object-cover  rounded-lg p-1"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomImageSlider;
