import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TabsAndCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "همه", items: ["همه 1", "همه 2", "همه 3"] },
    { id: 1, title: "تورخارجی", items: ["تورخارجی 1", "تورخارجی 2", "تورخارجی 3"] },
    { id: 2, title: "همسایه گردی", items: ["همسایه گردی 1", "همسایه گردی 2", "همسایه گردی 3"] },
    { id: 3, title: "جنوب گردی", items: ["جنوبگردی 1", "جنوبگردی 2", "جنوبگردی 3"] },
    { id: 4, title: "فستیوال", items: ["فستیوال 1", "فستیوال 2", "فستیوال 3"] }
  ];

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
    'https://cdn.alibaba.ir/cms/uploads/photo_2023_07_09_21_54_28_copy_eec98ab4f1.jpg',
    'https://cdn.alibaba.ir/cms/uploads/Whats_App_Image_2024_10_01_at_12_48_18_1_dac192695c.jpeg',
    'https://cdn.alibaba.ir/cms/uploads/shutterstock_2134950145_copy_19f8039a51.jpg',
    'https://cdn.alibaba.ir/cms/uploads/msqt_1_771cb038a9.jpg',
    'https://cdn.alibaba.ir/cms/uploads/Jalaluddin_Rumi_Grave_Konya_Turkey_fly_tour_package_03_7e0673d3fa.jpg',
    'https://cdn.alibaba.ir/cms/uploads/varadero_beach_3017844e93.jpg',
    'https://cdn.alibaba.ir/cms/uploads/Whats_App_Image_2024_07_28_at_13_00_58_c01b5705b9.jpeg',
    'https://cdn.alibaba.ir/cms/uploads/ids_21_027_047_2a650bea50.jpg',
    'https://cdn.alibaba.ir/cms/uploads/adyannews2_163170_4073689852.jpg',
    'https://cdn.alibaba.ir/cms/uploads/tswyr_asly_98d55482e7.jpg',
    'https://cdn.alibaba.ir/cms/uploads/a0a66660_084b_4282_a75f_4469c92441dd_47147e13a8.jpeg',
    'https://cdn.alibaba.ir/cms/uploads/image_asset_76bc9a7741.jpeg',
    'https://cdn.alibaba.ir/cms/uploads/b5f8848f_49a1_48ff_87fd_76c4e2251fd5_6e2034df61.webp',
    'https://cdn.alibaba.ir/cms/uploads/tom_paisley_v2z_Eizi_Fb44_unsplash_bd44ce404f.jpg',
    'https://cdn.alibaba.ir/cms/uploads/restaurantsin_Madridstreet_5c90d4d246e0fb000155590a_011d57b0f8.jpg',
    'https://cdn.alibaba.ir/cms/uploads/tunisia_2_2_0220339524.jpg',
    'https://cdn.alibaba.ir/cms/uploads/shutterstock_233737981_copy_c1d213b147.jpg',
    'https://cdn.alibaba.ir/cms/uploads/16_ca2c39b87f.jpg',
    'https://cdn.alibaba.ir/cms/uploads/msqt_1_771cb038a9.jpg',
    'https://cdn.alibaba.ir/cms/uploads/a0a66660_084b_4282_a75f_4469c92441dd_47147e13a8.jpeg'
  ];

  const imageDescriptions = [
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "  شروع قیمت از 70,000,000 تومان" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000 تومان"},
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000 تومان" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000"},
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000" },
    { title: "نمایشگاه گردشگری WTM انگلیس", description: "شروع قیمت از 50,000,000 تومان" },
    { title: "تور 11روزه ویتنام", description: "شروع قیمت از 70,000,000" }

  ];

  const carouselItems = images.map((image, index) => (
    <div key={index} className="carousel-item">
      <div className="mx-14 bg-gray-100 rounded-lg shadow-md w-[280px] h-[220px] flex flex-col justify-center items-center">
        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[140px] object-cover mb-4 rounded-lg" />
        <h3 style={{fontFamily:'vazir',fontSize:'14px'}} className=" font-semibold text-right mb-2">{imageDescriptions[index].title}</h3>
        <div className='w-full h-[1px] bg-gray-300'></div>
        <p style={{fontFamily:'vazir',fontSize:'10px'}} className="text-gray-600 text-right mb-4 relative left-11 top-4">{imageDescriptions[index].description}</p>
      </div>
    </div>
  ));
  

  return (
    <div className=" container m-auto  py-8  md:w-3/5 md:relative md:bottom-14">
      <h2 style={{fontFamily:"vazir"}} className="text-2xl font-bold mb-2">آغاز ماجراجویی اینجاست</h2>
      <p style={{fontFamily:"vazir"}} className='mb-5'>تورهای گروهی علی‌بابا، تجربه‌ای ناب از سفر  (ورق بزنید) </p>
      <div className="tabs-container mb-8">
        <div className="flex mb-4">
          {tabs.map(tab => (
            <button
              style={{fontSize:'15px',fontFamily:'vazir'}}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` px-4 py-2 border-b-2 border-black${
                activeTab === tab.id ? 'border-blue-500' : ''
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <Slider {...settings}>
          {carouselItems}
        </Slider>
      </div>
    </div>
  );
};

export default TabsAndCarousel;
