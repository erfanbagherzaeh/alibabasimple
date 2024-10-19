import React, { useState } from 'react';

const CitySelectorComponent = () => {
  const cities = [
    ' تهران',
    'شیراز ',
    'اصفهان',
    'کیش',
    'جنوب'
  ];

  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');

  return (
    <div className="w-full h-14 border flex flex-row justify-between rounded-md mt-5 mr-2
    sm:w-full sm:h-14 sm:flex sm:flex-row sm:justify-between
    md:w-[250px] md:h-[35px]
    lg:w-[340px] lg:h-[45px] lg:mt-1
    ">
      <div className="w-1/2 pt-5 pl-2 flex flex-row justify-center items-center
      sm:w-1/2 sm:pt-5 sm:pl-2 sm:flex sm:flex-row sm:justify-center sm:items-center
      md:w-1/2 
      ">
        <select
        style={{fontFamily:'vazir',fontSize:'14px'}}
          value={originCity}
          onChange={(e) => setOriginCity(e.target.value)}
          className="h-full w-full bg-white  mb-5 mr-2 rounded-r-lg border
          md:h-[35px] md:w-[100px] md:mr-0
          lg:w-[150px] lg:h-[45px]
          "
        >
          <option value="">شهر مبدا</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
      <button
        onClick={() => {
          const tempCity = originCity;
          setOriginCity(destinationCity);
          setDestinationCity(tempCity);
        }}
        className="w-8 h-4 bg-slate-100 rounded-full mt-5
        md:mt-2.5 md:ml-2 md:pb-5
        "
      >
        <span style={{fontSize:'15px',color:'black'}} className="material-symbols-outlined ">
        cached
        </span>
      </button>
      </div>

      <div className="w-1/2 pb-0 pl-2 flex flex-row justify-center items-center
        sm:w-1/2 sm:pl-2 sm:pb-0 sm:flex sm:flex-row sm:justify-center sm:items-center
        md:w-1/2 
      ">
        <select
            style={{fontFamily:'vazir',fontSize:'14px'}}
          value={destinationCity}
          onChange={(e) => setDestinationCity(e.target.value)}
          className="h-[36px] w-full bg-white  mr-2 rounded-l-lg border
          md:h-[35px] md:w-[105px] md:mr-0
          lg:w-[150px] lg:h-[45px]
          "
        >
          <option  value="">شهر مقصد</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CitySelectorComponent;
