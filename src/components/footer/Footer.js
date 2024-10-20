import './Footer.css'
function Footer(){
    return(
        <>

        <div className=" bo-up-down w-full h-auto  flex flex-row 
        md:w-3/5 md:m-auto">
            {/* فوتر قسمت راست */}
            <div className="f-right w-[50%] h-full  flex">
                <div className="w-1/3 h-full  flex justify-center">
                    <ul className="mt-3">
                        <li className="mb-3" style={{fontFamily:'vazir' , fontSize:'20px'}}> علی بابا</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>در باره ما</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>تماس با ما</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}> علی بابا پلاس</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>چرا علی بابا</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>بیمه مسافرتی</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>مجله علی بابا</li>
                    </ul>
                </div>

                <div className="w-1/3 h-full ">
                    <ul className="mt-3 mr-2">
                        <li className="mb-3" style={{fontFamily:'vazir' , fontSize:'20px'}}> خدمات مشتریان </li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>مرکز پشتیبانی انلاین</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>راهنمای خرید</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>راهنمای استرداد</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>قوانین و مقررات</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>پرسش پاسخ</li>
                    </ul>
                </div>
                <div className="w-1/3 h-full ">
                    <ul className="mt-3 mr-2">
                        <li className="mb-3" style={{fontFamily:'vazir' , fontSize:'20px'}}>اطلاعات تکمیلی</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>فروش سازمانی</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>همکاری با اژانس ها</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>فرصت ها شغلی</li>
                        <li className='co-t' style={{fontFamily:'vazir' , fontSize:'14px'}}>سنجش رضایتمندی</li>
                    </ul>
                </div>
            </div>

            {/* فوتر قسمت چپ */}
            <div className="f-left w-[50%] h-full  flex flex-col items-end
            sm:w-[50%]
            
            ">
                <div className="w-28 h-12  ">
                    <img className="w-full h-full" src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d6b14ca0.svg" />
                </div>
                <div className="w-56 h-10 ">
                    <p style={{fontSize:'15px' ,fontFamily:'vazir'}} className="pt-3 pr-2">تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰</p>
                </div>
                <div className="w-36 h-20 
                sm:w-60  sm:h-14
                md:w-[240px] md:h-12
                lg:w-[320px] lg:h-12
                ">
                    <p style={{fontFamily:'vazir',fontSize:'12px'}} className="pt-3 pr-3">دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1
                    </p>
                </div>
                
                <div className="w-full h-auto  flex justify-end flex-wrap 
                sm:w-full sm:h-auto sm:flex 
                ">
                    <div className="w-[85px] h-20  mb-2">
                        <img className="w-full h-full  border-2 bg-white rounded-lg p-1" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-35c3c933.jpg"/>
                    </div>

                    <div className="w-[85px] h-20  mr-2">
                        <img className="w-full h-full border-2 bg-white rounded-lg p-1" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png"/>
                    </div>

                    <div className="w-[85px] h-20  mr-2 mb-2">
                        <img className="w-full h-full border bg-white rounded-lg p-1" src="https://trustseal.enamad.ir/logo.aspx?id=8607&Code=MKrh33vhkzb6UNA2VDkk"/>
                    </div>

                    <div className="w-[85px] h-20  mr-2">
                        <img className="w-full h-full border-2 bg-white rounded-lg p-1" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg"/>
                    </div>
                    
                    <div className="w-[85px] h-20  mr-2">
                        <img className="w-full h-full border-2 bg-white rounded-lg p-1" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png"/>
                    </div>
                    <div className="w-[85px] h-20 mr-2">
                        <img className="w-full h-full border-2 bg-white rounded-lg p-1" src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg"/>
                    </div>
                    
                </div>


            </div>

        </div>
        <div className="w-full h-auto  flex  mt-5
        sm:w-3/5 sm:m-auto sm:mt-5
        ">
            <div className="w-[50%] h-full  flex flex-row items-center flex-wrap mt-0.5
            sm:mt-1
            md:mt-2
            ">
                <p style={{fontFamily:'vazir',fontSize:'12px',color:'gray'}}>کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 3.81.0)</p>
            </div>

            <div className="w-[50%] flex flex-row justify-end flex-wrap">
                <div className="w-[35px] h-[25px] bg-white flex flex-row justify-center items-center ml-2 mt-1">
                    <i className="fa fa-youtube-play" style={{fontSize:'20px',color:'gray'}}></i>
                </div>

                <div className="w-[35px] h-[25px] bg-white flex flex-row justify-center items-center ml-2 mt-1">
                    <i className="fa fa-twitter" style={{fontSize:'20px',color:'gray'}}></i>   
                </div>

                <div className="w-[35px] h-[25px] bg-white flex flex-row justify-center items-center ml-2 mt-1">
                    <i className="fa fa-telegram style={{fontSize:'20px'}}" style={{fontSize:'15px',color:'gray'}}></i>
                </div>
                
                <div className="w-[35px] h-[25px] bg-white flex flex-row justify-center items-center ml-2 mt-1">
                    <i class="fa fa-instagram" style={{fontSize:'20px',color:'gray'}}></i>
                </div>

                <div className="w-[35px] h-[25px] bg-white flex flex-row justify-center items-center ml-2 mt-1">
                    <i class="fa fa-linkedin-square" style={{fontSize:'20px',color:'gray'}}></i>
                </div>

            </div>
        </div>

        </>
    )
}

export default Footer