import React, { useState } from 'react';


const DateFormatter = ({ date }) => {
  if (!date) return null;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}/${month}/${year}`;
};

const ReadableDateFormatter = ({ date }) => {
  if (!date) return null;
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Intl.DateTimeFormat('fa-IR', options).format(date);
};

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(new Date(date));
  };

  const handleEndDateChange = (date) => {
    setEndDate(new Date(date));
  };

  return (
    <div className="m-auto mt-2 rounded-lg flex w-[98%] h-[40px] border md:w-[170px] md:mt-5 md:mr-3 md:h-[36px] 
    lg:w-[250px] lg:h-[45px] lg:mt-1
    ">
      <div className="w-[95%] flex">
        <div className="w-[50%] flex  md:flex 
        ">
          <div className='md:relative md:bottom-1.5'>
            <input
            type="date"
            id="start-date"
            value={ReadableDateFormatter(startDate)}
            onChange={(e) => handleStartDateChange(e.target.value)}
            className="mr-2 w-[30px] h-[30px] pr-2   
            md:w-[30px] md:pl-1 md:mr-0.5 md:h-[25px]
            lg:relative lg:top-4"
            
            />
          </div>

          <div className='lg:relative lg:top-3 lg:right-2 mt-2 mr-5 md:mt-0 md:mr-0' style={{fontFamily:'vazir',fontSize:'14px'}} > رفت</div>
        </div>
        <div className="flex w-[50%] ml-2 md:border-r-2 mt-3
        md:flex md:mt-0.5
        ">
          <div className=''>
          <input
            type="date"
            id="end-date"
            value={ReadableDateFormatter(endDate)}
            onChange={(e) => handleEndDateChange(e.target.value)}
            className="mr-10 w-[36px] h-[30px] pl-2 pr-2  relative bottom-2
            md:w-[30px] md:pl-1 md:mr-0.5 md:h-[25px] md:mt-1
            lg:relative lg:top-1
            "/>
          </div>
          <div className='lg:relative lg:top-0.5 lg:right-2 relative bottom-1 md:mt-2 md:w-[60px]' style={{fontFamily:'vazir',fontSize:'14px'}} > برگشت </div>
        </div>
      </div>
      <div className="mt-4 space-x-2">
        <span className="sr-only">تاریخ انتخاب شده</span>
      </div>
    </div>
  );
};

export default DateRangePicker;
