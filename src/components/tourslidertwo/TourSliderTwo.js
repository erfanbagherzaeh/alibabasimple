import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TabsAndCarouselTwo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: false,
    swipeToSlide: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          items: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          items: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1
        }
      }
    ]
  };

  const images = [
    'https://cdn.jabama.com/image/350x350/jabama-images/image_569054b9-ab0d-4909-9bab-630009d2a6a5.jpg?w=300',
    'https://cdn.jabama.com/image/350x350/jabama-images/image_600729ea-f70b-41b4-9d98-57f24a53ef1c.jpg?w=300',
    'https://cdn.alibaba.ir/inh/domestic-hotel/image_f35b1b6c-d857-4c18-8337-a0e97154a51f.jpg',
    'https://cdn.alibaba.ir/inh/domestic-hotel/image_e8fda203-3aae-4e28-b53d-e1f1bb2e14f5.jpg',
    'https://cdn.alibaba.ir/inh/domestic-hotel/image_99f2d671-2a6e-475c-9496-71a010e92cfe.jpg',
    'https://cdn.jabama.com/image/350x350/jabama-images/image_d3161261-539a-427b-b431-54d9e90425d2.jpg?w=300'
  ];



  const imageDescriptions = [

    { title: "هتل داریوش کیش", description: "2 ستاره 1 شب و 2 روز" },
    { title: "هتل پانوراما کیش", description: "2 ستاره 1 شب و 2 روز" },
    { title: "هتل افتاب شرق کیش", description:  "2 ستاره 1 شب و 2 روز" },
    { title: "هتل میراژ کیش", description:  "2 ستاره 1 شب و 2 روز" },
    { title: "هتل پارسیان کیش", description:  "2 ستاره 1 شب و 2 روز" },
    { title: "هتل گراند کیش", description: "تاره 1 شب و 2 روز2" },
    { title: "هتل شباویز کیش", description: "تاره 1 شب و 2 روز" },
    { title: "هتل شایگان کیش", description: "اره 1 شب و 2 روز2" }

  ];

  const carouselItems = images.map((image, index) => (
    <div key={index} className="carousel-item px-2 mb-2">
      <div className=" rounded-lg shadow-md w-[320px] h-[220px] flex flex-col justify-center items-center">
        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[120px] object-cover mb-2 rounded-lg" />
        <h3 style={{fontSize:'15px',fontFamily:'vazir'}} className="text-xl font-semibold text-right mb-2
        md:relative md:left-16 md:bottom-1
        ">{imageDescriptions[index].title}</h3>
        <p style={{fontSize:'12px'}} className="text-gray-600 text-center mb-4
        md:relative md:top-3 md:left-10
        ">{imageDescriptions[index].description}</p>
        <button style={{fontSize:'12px',fontFamily:'vazir',color:'white'}} className='rounded-lg w-[85px] h-[65px] bg-blue-600
        md:relative md:right-16 md:bottom-4
        '>جزِیات و خرید</button>
      </div>
    </div>
  ));

  return (
    <div className="container m-auto px-4 py-8  md:w-3/5">
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselItems}
        </Slider>
      </div>
    </div>
  );
};

export default TabsAndCarouselTwo;
