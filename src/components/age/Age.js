import React, { useState } from 'react';
import './Age.css'

const PassengerSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState({
    adults: 0,
    children: 0,
    babies: 0
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const updatePassengerCount = (type, value) => {
    setPassengerCount(prevState => ({
      ...prevState,
      [type]: Math.max(0, prevState[type] + value)
    }));
  };

  const items = [
    { label: 'بزرگسال', value: 'adult' },
    { label: 'کودک', value: 'child' },
    { label: 'نوزاد', value: 'baby' },
  ];

  // Create a full passenger count string
  const fullPassengerCount = `${passengerCount.adults} بزرگسال${passengerCount.children > 0 ? `, ${passengerCount.children}` : ''}${passengerCount.babies > 0 ? `, ${passengerCount.babies}` : ''}`;

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
        <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
          <ul>
            {items.map((item, index) => (
              <li key={index} className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-2 flex items-center justify-between">
                <span>{item.label}</span>
                <div className="flex space-x-2">
                  <button onClick={() => updatePassengerCount(item.value, -1)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    -
                  </button>
                  <span className="text-sm">{passengerCount[item.value]}</span>
                  <button onClick={() => updatePassengerCount(item.value, 1)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
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
