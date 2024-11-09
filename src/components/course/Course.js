// import './MenuItem.css'
import './Course.css';
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirplanemodeActive } from "react-icons/md";
import { PiTrainFill } from "react-icons/pi";
import { BsBusFront } from "react-icons/bs";
import { BsBackpack4 } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import City from '../city/City'
import Date from '../date/Date'
import ItemCountDropdown from '../age/Age'
import { Link } from 'react-router-dom';


function MenuItem(){
    // <Box sx={{ width: '100%', mb: 10 }}>
    // <Box sx={{
    //   backgroundColor: 'white',
    //   width: '100%',
    //   maxWidth: '1200px',
    //   margin: '0 auto',
    //   position: 'relative',
    //   p: 2,
    // }}>
    return(
        <>

        <div className=' w-full h-auto mb-10 ' >
            <div className='menu-item w-full h-auto  bg-white
            md:w-3/5 md:m-auto  relative  
            '   
   
            
            >

                {/* ********************************
                *     up side of menu item     *
                ******************************** */}
                <div className='up flex flex-row justify-center lg:h-[150px] '>
                    <div className=' right w-[50%] p-5 flex flex-col items-center
                    lg:flex lg:flex-row lg:w-[57%]  lg:justify-end lg:pr-10
                   
                    '>  
                        <Link to='/' className='w-0 h-0 lg:w-[120px] lg:h-[100px]  lg:mx-6 lg:mb-5'>
                        <div className='tab w-0 h-0 lg:w-[120px] lg:h-[100px]  lg:mx-6 md:{10}'>
                            <div className='lg:w-full lg:h-[70%] flex flex-row justify-center items-center'>
                                <GiCommercialAirplane   size={'30px'} />
                            </div>
                            <div className=' lg:w-full lg:h-[30%]  flex flex-row justify-center items-center'>
                                <h1 className='text-white lg:text-slate-600'>برواز داخلی</h1>
                            </div>
                        </div>
                        </Link>

                        <Link to='/ParvazB'>
                        <div className='tab w-[120px] h-[100px]  my-5 lg:mx-6 '>
                            <div className='w-full h-[70%]  flex flex-row justify-center items-center'>
                                <MdAirplanemodeActive    size={'30px'} />
                            </div>
                            <div className='w-full h-[30%]  flex flex-row justify-center items-center'>
                                <p>برواز خارجی</p>
                            </div>
                        </div>
                        </Link>

                        <Link to='/Train'>

                        <div className='tab w-[120px] h-[100px]  my-5 lg:mx-6'>

                            <div className='w-full h-[70%]  flex flex-row justify-center items-center'>
                                <PiTrainFill     size={'30px'} />
                            </div>
                            <div className='w-full h-[30%]  flex flex-row justify-center items-center'>
                                <p>قظار</p>
                            </div>
                        </div>
                        </Link>

                        <Link to='/Bus'>
                        <div className='tab w-[120px] h-[100px]  my-5 lg:mx-6'>

                            <div className='w-full h-[70%]  flex flex-row justify-center items-center'>
                                <BsBusFront     size={'30px'} />
                            </div>
                            <div className='w-full h-[30%]  flex flex-row justify-center items-center'>
                                <p>اتوبوس</p>
                            </div>

                        </div>
                        </Link>
                    </div>


                    <div className='left w-[50%] p-5 flex flex-col items-center
                    lg:flex lg:flex-row lg:w-[40%] lg:justify-start lg:relative lg:left-10
                    
                    '>  
                         <Link to='/Tour'>
                        <div className='tab w-[120px] h-[100px]  my-5 lg:mx-4'>
                       

                            <div className='w-full h-[70%]  flex flex-row justify-center items-center'>
                                <BsBackpack4     size={'30px'} />
                            </div>
                            <div className=' w-full h-[30%]  flex flex-row justify-center items-center'>
                                <p>تور</p>
                            </div>

                        </div>
                        </Link>
                        <Link to='/Hotel'>

                        <div className='tab w-[120px] h-[100px]  my-5 lg:mx-4'>

                            <div className='w-full h-[70%]  flex flex-row justify-center items-center'>
                                <FaHotel      size={'30px'} />
                            </div>
                            <div className='w-full h-[30%]  flex flex-row justify-center items-center'>
                                <p>هتل</p>
                            </div>
                            
                        </div>
                        </Link>
                        <Link to='/Hotel'>
                        <div className='tab w-[120px] h-[100px]  my-5 lg:mx-4'>

                            <div className='w-full h-[70%]  flex flex-row justify-center items-center'>
                                <MdVilla       size={'30px'} />
                            </div>
                            <div className='w-full h-[30%]  flex flex-row justify-center items-center'>
                                <p>ویلا</p>
                            </div>

                        </div>
                        </Link>
                    </div>
                    

                </div>




            {/* ********************************
                *     center side of menu item     *
                ******************************** */}
                <div className='center '>
                    <div className='row w-full h-[80px] flex flex-row justify-start items-center'>
                        <div className='w-[200px] h-[60px]  mr-5'>
                            <form >
                            <label  for="cars"></label>
                                <select className='choose w-[200px] h-[50px] rounded-3xl px-2 border' name="cars" id="cars">
                                    <option value="volvo">یک طرفه</option>
                                    <option value="saab">رفت و برگشت</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>


            {/* ********************************
                *     down side of menu item     *
                ******************************** */}
                <div className='down lg:flex lg:flex-row lg:justify-between 
                md:flex-col'>
                    <div className='two-items lg:w-[50%]  lg:flex lg:flex-row  lg:justify-between md:flex-col'>
                        <div className='firest mr-1'>
                            <City></City>
                        </div>
                        <div className='second mr-2 mt-1 mb-4'>
                            <Date></Date>
                        </div>
                    </div>
                    <div className='two-items lg:w-[50%]  lg:flex lg:flex-row lg:justify-between md:flex-col'>
                        <div className='trhee lg:mr-52'>
                            <ItemCountDropdown></ItemCountDropdown>
                        </div>
                        <div className='for flex flex-row justify-center mr-5 mb-5'>
                            <div className='ser w-[150px] h-[53px]  ml-5 mt-3 rounded-lg'>
                                <h1 style={{fontFamily:'vazir'}} className='text-center pt-3.5' >جستوجو</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default MenuItem