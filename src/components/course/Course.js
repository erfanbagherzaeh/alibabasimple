import City from '../city/City.js';
import Date from '../date/Date.js';
import CustomAgeSelector from '../CustomAgeSelector/CustomAgeSelector.js'
import { Link } from 'react-router-dom';
import './Course.css'
function Course(){
    return(
        <>
        <div className='lg:h-[300px] bg-white co-po w-full h-auto mt-16  sm:w-3/5 sm:m-auto  md:w-4/5 md:m-auto md:h-48 border rounded-lg lg:w-3/5 lg:m-auto
        lg:mt-24
        '>
            <div className='co-border w-full h-auto'>
            <div className=' w-[100%] h-[200px]  flex md:w-[85%] my-5
            md:m-auto md:h-[73px]
            lg:h-[100px] lg:w-[80%]
            '>
                <div className=' co-raght w-[50%] h-[140px] md:w-[60%]  md:flex md:flex-row md:h-[55px] '>
                    <div className=' hidden mt-2 mr-2 ml-2 tt w-full h-1/3  flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg 
                    md:h-[60px]  md:w-[400px]
                    lg:h-[80px] lg:w-[200px]  lg:mx-1
                    '>
                    <Link to='/'>
                        <img className='font-color w-[45px] h-[40px] mb-1 mr-4' src="https://img.icons8.com/carbon-copy/100/airplane-landing.png" alt="airplane-landing"/>
                        <h1 className='font-color mt-0' style={{fontSize:'16px',fontFamily:'vazir'}}>پرواز داخلی</h1>
                    </Link>
                    </div>
                    
                    <div className='pb-5 font-color mt-2 mr-2 ml-2 tt w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg  
                     md:w-[400px] md:h-[60px]
                     lg:h-[80px] lg:w-[200px]  lg:mx-1
                     '>
                    <Link to='/ParvazB'>
                        <img className='lg:text-2xl lg:mr-5 lg:w-[45px] lg:h-[40px] w-[28px] h-[28px] mb-1 mr-3' src="https://img.icons8.com/dotty/80/airplane-take-off--v2.png" alt="airplane-take-off--v2"/>  
                        <h1 className='mt-0 ' style={{fontSize:'16px',fontFamily:'vazir'}}>پرواز خارجی</h1>
                    </Link>
                        
                    </div>
                    <div className=' pt-5 pb-5 it-bo font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg 
                    md:h-[60px]  md:w-[400px]
                    lg:h-[80px] lg:w-[200px]  lg:mx-1
                    '>
                    <Link to='/Train'>
                        <img className='lg:text-2xl lg:mr-3 lg:w-[45px] lg:h-[40px] w-[28px] h-[28px] mb-1.5' src="https://img.icons8.com/dotty/80/train.png" alt="train"/>
                        <h1 className='mt-0 mr-2 lg:mr-5' style={{fontSize:'16px',fontFamily:'vazir'}}>قطار</h1>
                    </Link>
                        
                    </div>
                    <div className='pt-5 pb-5 it-bo font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg 
                    md:h-[60px]  md:w-[400px]
                    lg:h-[80px] lg:w-[200px]  lg:mx-1
                    '>
                    <Link to='/Bus'>
                        <img className='lg:text-2xl lg:mr-2 lg:w-[50px] lg:h-[45px] w-[30px] h-[30px] mb-0.5' src="https://img.icons8.com/carbon-copy/100/bus--v1.png" alt="bus--v1"/>  
                        <h1 className='mt-0 lg:mr-2' style={{fontSize:'16px',fontFamily:'vazir'}}>اتوبوس</h1>
                    </Link> 
                    </div>
                </div>
                <div className=' co-left w-[50%] h-[140px]  md:flex md:w-[40%] md:flex-row md:h-[55px]'>
                    <div className='it-bo font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg 
                    md:h-[60px]  md:w-[400px]
                    lg:h-[80px] lg:w-[200px]  lg:mx-1
                    '>
                    <Link to='/Tour'>
                        <img className='lg:text-2xl lg:mr-2 lg:w-[45px] lg:h-[40px] w-[25px] h-[25px] mb-0.5 mt-1' src="https://img.icons8.com/wired/64/backpack.png" alt="backpack"/>
                        <h1 className='mt-0 mr-2 lg:mr-5' style={{fontSize:'16px',fontFamily:'vazir'}}>تور</h1>
                    </Link>
                    </div>
                    <div className=' font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col
                     md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]
                     lg:h-[80px] lg:w-[200px]  lg:mx-1
                     '>
                    <Link to='/Hotel'>
                        <img className='lg:text-2xl lg:mr-2 lg:w-[45px] lg:h-[40px] font-color w-[25px] h-[25px] mb-0.5 mt-1' src="https://img.icons8.com/ios/50/3-star-hotel.png" alt="3-star-hotel"/>
                        <h1 className='mt-0 mr-2 md:mr-0 lg:mr-3' style={{fontSize:'16px',fontFamily:'vazir'}}>هتل</h1>
                    </Link>
                    </div>
                    <div className=' font-color mt-2 mr-1 ml-1 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col
                     md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]
                     lg:h-[80px] lg:w-[200px]  lg:mx-1
                     '>
                    <Link to='/Villa'>
                        <img className='lg:text-2xl lg:mr-6 lg:w-[45px] lg:h-[40px] w-[25px] h-[25px] mb-1.5 mt-1 ' src="https://img.icons8.com/dotty/80/camping-tent.png" alt="camping-tent"/>
                        <h1 className='mt-0' style={{fontSize:'16px',fontFamily:'vazir'}}>ویلا و اقامتگاه</h1>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-full h-16  pt-2 flex flex-row justify-center items-center border-spacing-1
            md:flex md:flex-row md:justify-start md:items-center md:pr-2 pb-2
            '>
                <div className='bt-ch w-32 bg-zinc-100 rounded-lg lg:mr-5'>
                        <form>
                            <select style={{fontFamily:'vazir',fontSize:'16px'}} className='w-36 h-[40px] rounded-lg '>
                                <option>یک طرفه</option>
                                <option > رفت و برگشت</option>
                            </select>
                        </form>
                </div>
            </div>

            <div className='w-full h-[100px]  
            md:h-36 md:flex md:mb-0  mt-5 
            lg:h-auto lg:flex lg:flex-row lg:justify-around 
            
            '>
                {/* مبدا و مقصد */}
                <div>
                    <City></City>
                </div>
                {/* انتهای مبدا و مقصد */}

                {/* تاریخ و رفت و برگشت */}
                <div>
                <Date></Date>
                </div>
                {/* انتهای تاریخ رفت و برگشت */}

                {/* تعداد مسافر */}
                <div>
                    <CustomAgeSelector></CustomAgeSelector>
                </div>
                {/* انتهای تعداد مسافر */}

                {/* جستوجو */}

                <div className='w-[98%] h-11 search mt-2 mr-2 rounded-lg
                md:mt-5 md:w-[120px] md:h-[35px] md-mr-3
                lg:w-[180px] lg:h-[45px] lg:mt-1
                '>
                    <h1 className='text-center cursor-pointer mt-4 md:mt-2 lg:mt-3' style={{fontSize:'16px',fontFamily:'lalezar'}} >جستوجو</h1>
                </div>
                
                {/* انتهای جستجو */}
            </div>

        </div>
        </>
    )
}

export default Course