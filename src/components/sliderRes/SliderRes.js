import React, { useState, useEffect } from 'react';

const SliderComponent = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <div className= "w-[450px] h-[200px]  text-white p-10 mb-5">
        <img className='rounded-lg' src="https://cdn.alibaba.ir/cms/uploads/Dad_Hotel_Cardview_Banner_Desktop_v4_2x_eb3b4d08ed.jpg"/>
    </div>,
    <div className="w-[450px] h-[200px]  text-white p-10 ">
        <img className='rounded-lg' src="https://cdn.alibaba.ir/cms/uploads/Safar_Card_Cardview_Banner_Desktop_02_09_22_a8630524f1.png"/>
    </div>
  ];

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      currentPage < pages.length - 1 ? setCurrentPage(currentPage + 1) : setCurrentPage(0);
    }, 3000); // زمان بین هر حرکت 3 ثانیه

    return () => clearInterval(intervalId);
  }, [currentPage]);

  return (
    <>
    <div>
    <div className="relative w-full h-[200px] overflow-hidden  md:invisible md:h-[0]">
      <div className="absolute inset-0 flex  justify-center  ">
        {pages[currentPage]}
      </div>
    </div>

    <div className='w-3/5 h-[0px]  m-auto mb-10 flex flex-row 
     md:h-[150px] 
    
    '>
      <div className='w-1/2 h-full  ml-1'>
        <img className='w-full h-full rounded-lg' src="https://cdn.alibaba.ir/cms/uploads/Safar_Card_Cardview_Banner_Desktop_02_09_22_a8630524f1.png"/>
      </div>
      <div className='w-1/2 h-full  ml-1'>
        <img className='w-full h-full rounded-lg' src="https://cdn.alibaba.ir/cms/uploads/Dad_Hotel_Cardview_Banner_Desktop_v4_2x_eb3b4d08ed.jpg"/>
      </div>
    </div>

    </div>



    
    </>


  );
};

export default SliderComponent;
