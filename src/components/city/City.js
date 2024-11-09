import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './City.css'
import { SiWappalyzer } from 'react-icons/si';
import { FaExchangeAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function BasicSelect() {
  const [cities, setCities] = useState({
    origin: '',
    destination: ''
  });

  useEffect(() => {
    // این اثر می‌تواند برای تنظیم اولیه شهرهای انتخاب شده استفاده شود
    setCities({ origin: '', destination: '' });
  }, []);

  const handleSelectChange = (cityType) => (event) => {
    setCities(prevState => ({
      ...prevState,
      [cityType]: event.target.value
    }));
  };

  const handleSwap = () => {
    if (cities.origin && cities.destination) {
      setCities(prevState => ({
        origin: prevState.destination,
        destination: prevState.origin
      }));
    }
  };

  return (
    <>
      <div className='real-container flex  w-full h-[80px] justify-center items-center'>
        <div className='right'>
          <Box>
            <FormControl className='box'>
              <InputLabel value={cities.origin} onChange={handleSelectChange('origin')} className='mx-5 mc' style={{fontFamily:'vazir'}} id="demo-simple-select-label">شهر مبدا</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cities.origin}
                label="Origin City"
                onChange={handleSelectChange('origin')}
              >
                <MenuItem style={{fontFamily:'vazir'}} value="">انتخاب کنید</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="تهیه">تهران</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="اصفهان">اصفهان</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="شیراز">شیراز</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="جنوب">جنوب</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="کیش">کیش</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="قشم">قشم</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

          <button className='btc   rounded-full w-[30px] h-[30px] pr-2' onClick={handleSwap} disabled={!cities.origin || !cities.destination}>
            <FaExchangeAlt />
          </button>

        <div className='left'>
          <Box>
            <FormControl className='box'>
              <InputLabel value={cities.destination} onChange={handleSelectChange('destination')} className='mx-5' style={{fontFamily:'vazir'}} id="demo-simple-select-label">شهر مقصد</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cities.destination}
                label="Destination City"
                onChange={handleSelectChange('destination')}
              >
                <MenuItem style={{fontFamily:'vazir'}} value="">انتخاب کنید</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="تهیه">تهران</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="اصفهان">اصفهان</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="شیراز">شیراز</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="جنوب">جنوب</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="کیش">کیش</MenuItem>
                <MenuItem style={{fontFamily:'vazir'}} value="قشم">قشم</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
}
