import React, { useState } from 'react';
import './Age.css'
import { FaTimes } from 'react-icons/fa';

const PassengerSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passengerCounts, setPassengerCounts] = useState({
    adults: 0,
    children: 0,
    babies: 0
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const updatePassengerCount = (type, value) => {
    setPassengerCounts(prevState => ({
      ...prevState,
      adults: Math.max(0, prevState.adults + (type === 'adults' ? value : 0)),
      children: Math.max(0, prevState.children + (type === 'children' ? value : 0)),
      babies: Math.max(0, prevState.babies + (type === 'babies' ? value : 0))
    }));
  };

  const items = [
    { label: 'بزرگسال', value: 'adults' },
    { label: 'کودک', value: 'children' },
    { label: 'نوزاد', value: 'babies' },
  ];

  // Create a full passenger count string
  const fullPassengerCount = `${passengerCounts.adults} بزرگسال${passengerCounts.children > 0 ? `, ${passengerCounts.children}` : ''}${passengerCounts.babies > 0 ? `, ${passengerCounts.babies}` : ''}`;

  return (
    <div className="flex space-x-4">
      {/* دکمه DropDown */}
      <button
        onClick={toggleDropdown}
        className="st font-bold py-2 px-4 rounded  m-auto h-[53px] lg:mr-9 mt-3"
      >
        {isOpen ? fullPassengerCount : 'تعداد مسافران'}
      </button>

      {/* محتوا در حالت باز */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden mx-5">
          <div className="flex justify-between items-center p-4 border-b">
            <span>{fullPassengerCount}</span>
            <FaTimes onClick={toggleDropdown} className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 flex items-center justify-between">
                <span>{item.label}</span>
                <div className="flex">
                  <button onClick={() => updatePassengerCount(item.value, -1)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded ">
                    -
                  </button>
                  <span className="py-2 text-sm px-5">{passengerCounts[item.value]}</span>
                  <button onClick={() => updatePassengerCount(item.value, 1)} className="bg-white hover:bg-gray-100 text-black font-bold py-1 px-2 rounded border border-gray-300">
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
