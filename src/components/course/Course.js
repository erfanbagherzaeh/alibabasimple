import City from '../city/City.js';
import Date from '../date/Date.js';
import CustomAgeSelector from '../CustomAgeSelector/CustomAgeSelector.js'
import { Link } from 'react-router-dom';
import './Course.css'
function Course(){
    return(
        <>
        <div className='bg-white co-po w-full h-[480px] mt-16  sm:w-3/5 sm:m-auto  md:w-4/5 md:m-auto md:h-48 border rounded-lg lg:w-3/5 lg:m-auto

        '>
            <div className='co-border w-full h-auto'>
            <div className=' w-[100%] h-[160px]  flex md:w-[85%] 
            md:m-auto md:h-[73px]
            '>
                <div className=' co-raght w-[50%] h-[140px] md:w-[60%]  md:flex md:flex-row md:h-[55px] '>
                    <div className=' hidden mt-2 mr-2 ml-2 tt w-full h-1/3  flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]'>
                    <Link to='/'>
                        <img className='font-color w-[28px] h-[28px] mb-1 mr-2' src="https://img.icons8.com/carbon-copy/100/airplane-landing.png" alt="airplane-landing"/>
                        <h1 className='font-color mt-0' style={{fontSize:'12px',fontFamily:'esb'}}>پرواز داخلی</h1>
                    </Link>
                    </div>
                    
                    <div className=' font-color mt-2 mr-2 ml-2 tt w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg   md:w-[400px] md:h-[60px]'>
                    <Link to='/ParvazB'>
                        <img className='w-[28px] h-[28px] mb-1 mr-3' src="https://img.icons8.com/dotty/80/airplane-take-off--v2.png" alt="airplane-take-off--v2"/>  
                        <h1 className='mt-0' style={{fontSize:'12px',fontFamily:'esb'}}>پرواز خارجی</h1>
                    </Link>
                        
                    </div>
                    <div className=' it-bo font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]'>
                    <Link to='/Train'>
                        <img className='w-[28px] h-[28px] mb-1.5' src="https://img.icons8.com/dotty/80/train.png" alt="train"/>
                        <h1 className='mt-0 mr-2' style={{fontSize:'12px',fontFamily:'esb'}}>قطار</h1>
                    </Link>
                        
                    </div>
                    <div className=' it-bo font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]'>
                    <Link to='/Bus'>
                        <img className='w-[30px] h-[30px] mb-1.5' src="https://img.icons8.com/carbon-copy/100/bus--v1.png" alt="bus--v1"/>  
                        <h1 className='mt-0' style={{fontSize:'12px',fontFamily:'esb'}}>اتوبوس</h1>
                    </Link> 
                    </div>
                </div>
                <div className=' co-left w-[50%] h-[140px]  md:flex md:w-[40%] md:flex-row md:h-[55px]'>
                    <div className='it-bo font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]'>
                    <Link to='/Tour'>
                        <img className='w-[25px] h-[25px] mb-1.5 mt-1' src="https://img.icons8.com/wired/64/backpack.png" alt="backpack"/>
                        <h1 className='mt-0 mr-2' style={{fontSize:'12px',fontFamily:'esb'}}>تور</h1>
                    </Link>
                    </div>
                    <div className=' font-color mt-2 mr-2 ml-2 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]'>
                    <Link to='/Hotel'>
                        <img className='font-color w-[25px] h-[25px] mb-1.5 mt-1' src="https://img.icons8.com/ios/50/3-star-hotel.png" alt="3-star-hotel"/>
                        <h1 className='mt-0 mr-2 md:mr-0' style={{fontSize:'12px',fontFamily:'esb'}}>هتل</h1>
                    </Link>
                    </div>
                    <div className=' font-color mt-2 mr-1 ml-1 w-full h-1/3  flex flex-row items-center cursor-pointer md:flex md:flex-col md:pt-2  md:rounded-lg md:h-[60px]  md:w-[400px]'>
                    <Link to='/Villa'>
                        <img className='w-[25px] h-[25px] mb-1.5 mt-1 mr-6' src="https://img.icons8.com/dotty/80/camping-tent.png" alt="camping-tent"/>
                        <h1 className='mt-0 mr-2' style={{fontSize:'12px',fontFamily:'esb'}}>ویلا و اقامتگاه</h1>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-full h-10  pt-2 flex flex-row justify-center items-center border-spacing-1
            md:flex md:flex-row md:justify-start md:items-center md:pr-2 pb-2
            '>
                <div className='bt-ch w-32 bg-zinc-100 rounded-lg '>
                        <form>
                            <select style={{fontFamily:'esb',fontSize:'12px'}} className='w-28 h-auto rounded-lg'>
                                <option>یک طرفه</option>
                                <option > رفت و برگشت</option>
                            </select>
                        </form>
                </div>
            </div>

            <div className='w-full h-[200px]  mt-1 
            md:h-28 md:flex md:mb-0
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
                md:mt-5 md:w-[120px] md:h-[35px] md-mr-3'>
                    <h1 className='text-center cursor-pointer mt-4 md:mt-2' style={{fontSize:'12px',fontFamily:'lalezar'}} >جستوجو</h1>
                </div>
                
                {/* انتهای جستجو */}
            </div>

        </div>
        </>
    )
}

export default Course