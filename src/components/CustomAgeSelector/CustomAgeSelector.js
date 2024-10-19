import React, { useState } from 'react';

const CustomAgeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleIncrease = (type) => {
    switch(type) {
      case 'adult':
        setAdultCount(prev => prev + 1);
        break;
      case 'child':
        setChildCount(prev => prev + 1);
        break;
      case 'infant':
        setInfantCount(prev => prev + 1);
        break;
    }
  };

  const handleDecrease = (type) => {
    switch(type) {
      case 'adult':
        setAdultCount(prev => Math.max(0, prev - 1));
        break;
      case 'child':
        setChildCount(prev => Math.max(0, prev - 1));
        break;
      case 'infant':
        setInfantCount(prev => Math.max(0, prev - 1));
        break;
    }
  };

  return (
    <>
    <div className='w-[98%] h-[50px] mt-6  mr-1 border rounded-lg cursor-pointer 
     md:w-[120px] md:h-[36px] md:mt-5 md:mr-3
     lg:w-[250px] lg:h-[45px] lg:mt-1
    
    '>
    <div className=" travel text-center ">
      <span className=' relative top-3 md:relative md:top-1' style={{fontFamily:'vazir',fontSize:'16px'}}  onClick={togglePopup}>انتخاب تعداد مسافران</span>
      {/* <span  style={{fontFamily:'lalezar',fontSize:'15px'}}  onClick={togglePopup}>تعداد</span> */}
      {isOpen && (
        <div className=" w-[256px] absolute top-full left-0 right-0 z-10  p-4   transition-all duration-300 ease-in-out transform origin-top">
          <form onSubmit={(e) => e.preventDefault()} className=" form1 flex flex-col  md:w-[250px] md:mr-96 md:bg-white">
            <div className="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">

            <label style={{fontFamily:'lalezar'}} htmlFor="adults" className="w-32">بزرگسال</label>
              <button
                type="button"
                onClick={() => handleIncrease('adult')}
                className="bt bg-blue-500 text-white px-2 py-1 rounded-l border border-blue-600 hover:bg-blue-700"
              >
                +
              </button>
              <input
                type="number"
                id="adults"
                value={adultCount}
                onChange={(e) => setAdultCount(Number(e.target.value))}
                className="w-10   px-0 pr-4 py-1 rounded"
              />
              <button
                type="button"
                onClick={() => handleDecrease('adult')}
                className="bt bg-white text-black px-2 py-1 rounded-r border border-gray-300 hover:bg-gray-100"
              >
                -
              </button>
            </div>
            <div className="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
              <label style={{fontFamily:'lalezar'}} htmlFor="children" className="w-32">کودک</label>

              <button
                type="button"
                onClick={() => handleIncrease('child')}
                className="bt bg-blue-500 text-white px-2 py-1 rounded-l border border-blue-600 hover:bg-blue-700"
              >
                +
              </button>
              <input
                type="number"
                id="children"
                value={childCount}
                onChange={(e) => setChildCount(Number(e.target.value))}
                className=" border-gray-300 px-0 pr-4 py-1 rounded w-10"
              />
              <button
                type="button"
                onClick={() => handleDecrease('child')}
                className="bt bg-white text-black px-2 py-1 rounded-r border border-gray-300 hover:bg-gray-100"
              >
                -
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <label style={{fontFamily:'lalezar'}} htmlFor="infants" className="w-32">نوزاد</label>

              <button
                type="button"
                onClick={() => handleIncrease('infant')}
                className="bt bg-blue-500 text-white px-2 py-1 rounded-l border border-blue-600 hover:bg-blue-700"
              >
                +
              </button>
              <input
                type="number"
                id="infants"
                value={infantCount}
                onChange={(e) => setInfantCount(Number(e.target.value))}
                className=" border-gray-300 px-0 pr-4 py-1 rounded w-10"
              />
              <button
                type="button"
                onClick={() => handleDecrease('infant')}
                className="bt bg-white text-black px-2 py-1 rounded-r border border-gray-300 hover:bg-gray-100"
              >
                -
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
    </>
    
  );
};

export default CustomAgeSelector;