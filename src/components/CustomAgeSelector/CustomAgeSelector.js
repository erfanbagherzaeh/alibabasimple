import React, { useState } from 'react';
import { Box, Typography, Button, Collapse } from '@mui/material';

const PassengerInfoBox = () => {
  const [expanded, setExpanded] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className="m-auto bg-white p-6 mt-4 w-[400px] h-auto lg:relative lg:bottom-8 lg:w-[300px] ">
      <Button 
        fullWidth 
        variant="contained" 
        color="#ff9800" 
        onClick={toggleExpand}
        style={{fontFamily:'vazir',fontSize:'15px'}}
        className='h-[42px] '
      >
        {expanded ? "تعداد مسافران" : "تعداد مسافران"}
      </Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <p style={{fontFamily:'vazir'}}>بزرگسال</p>
            <Button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</Button>
            <span>{adults}</span>
            <Button onClick={() => setAdults(adults + 1)}>+</Button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p style={{fontFamily:'vazir'}}>کودک</p>
            <Button onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</Button>
            <span>{children}</span>
            <Button onClick={() => setChildren(children + 1)}>+</Button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p style={{fontFamily:'vazir'}}>نوزاد</p>
            <Button onClick={() => setBabies(babies > 0 ? babies - 1 : 0)}>-</Button>
            <span>{babies}</span>
            <Button onClick={() => setBabies(babies + 1)}>+</Button>
          </div>
        </Box>
      </Collapse>
    </Box>
  );
};

export default PassengerInfoBox;
