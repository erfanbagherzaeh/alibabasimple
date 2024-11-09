import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './Date.css'

 function BasicDatePicker() {
  return (
    <>
    <div className='real-cont  '>
        <div className='w-[400px] m-auto flex'>
        <div className='right1 '>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer  components={['']}>
                <DatePicker style={{fontFamily:'vazir'}}  label="تاریخ برگشت" />
            </DemoContainer>
        </LocalizationProvider>
        </div>
        <div className='left1'>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DemoContainer   components={['']}>
                <DatePicker style={{fontFamily:'vazir'}}  label="تاریخ رفت" />
            </DemoContainer>
        </LocalizationProvider>
        </div>
        </div>

    </div>
    </>

  );
}
export default BasicDatePicker