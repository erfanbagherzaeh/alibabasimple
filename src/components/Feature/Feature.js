import './Feature.css'
function Feature(){
    return(
        <>
        <div className='w-full  
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto 
        mt-24 sm:mt24

        
        '>
            <div className='mr-6 
            
            '>
                <h1 style={{fontFamily:'vazir' , fontSize:'25px'}} className="
                sm:-ml-12  sm:mt-0 sm:mb-5
                md:mt-0 md:mb-5 md:mr-0
                :
                ">سایر خدمات علی بابا</h1>
            </div>
            <div className="fe-bo feature-row flex mt-2 flex-row justify-around 
            sm:w-full sm:flex sm:flex-row sm:justify-around sm:border sm:items-center sm:h-[80px] sm:rounded-lg
            md:h-[45px]
            lg:h-[70px]
            ">
                <div className="flex ">
                    <div className="ml-5 mr-4 md:flex md:flex-row md:justify-between">  
                        <img className="w-[40px] h-[40px]  rounded-lg
                         md:w-[35px] md:h-[30px] md:mt-1.5
                         lg:w-[50px] lg:h-[45px]
                         "  src="https://cdn.alibaba.ir/h2/desktop/assets/images/safarcard-3dc2c4c4.svg"/>
                        <p style={{fontFamily:'vazir',fontSize:'15px'}} className="color-f md:mt-3 md:mr-3 lg:mt-5">سفرکارت</p>
                    </div>
                    <div className="md:w-[1px] md:h-7 md:bg-slate-300 md:mt-2 md:mr-8"></div>
                </div>

                <div className="flex ">
                    <div className="ml-5 md:flex md:flex-row md:justify-between">
                        <img className="w-[35px] h-[35px] mt-1 rounded-lg 
                        md:w-[35px] md:h-[30px] md:mt-1.5
                        lg:w-[50px] lg:h-[45px]
                        "   src="https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-bb51c425.svg"/>
                        <p style={{fontFamily:'vazir',fontSize:'15px'}} className="color-f md:mt-3 md:mr-3 lg:mt-4">بیمه مسافرتی</p>
                    </div>
                    <div className="md:w-[1px] md:h-7 md:bg-slate-300 md:mt-2 md:mr-8"></div>
                </div>

                <div className="flex">
                    <div className="ml-5 md:flex md:flex-row md:justify-between">
                        <img className="w-[35px] h-[35px] mt-1 rounded-lg 
                        md:w-[35px] md:h-[30px] md:mt-1.5
                        lg:w-[50px] lg:h-[45px]
                        "   src="https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-d8507c8e.svg"/>
                        <p style={{fontFamily:'vazir',fontSize:'15px'}}className="color-f w-[80px] md:mt-3 md:mr-3 lg:mt-4">ویزا مسافرتی</p>
                    </div>
                    <div className="md:w-[1px] md:h-7 md:bg-slate-300 md:mt-2 md:mr-11"></div>
                </div>

                <div className='flex  '>
                    <div className="ml-5 md:flex md:flex-row md:justify-between">
                        <img className="w-[35px] h-[35px]  rounded-lg 
                        md:w-[35px] md:h-[30px] md:mt-1.5
                        lg:w-[50px] lg:h-[45px]
                        "   src="https://cdn.alibaba.ir/h2/desktop/assets/images/gtour-icon-5e641f1b.svg"/>
                        <p style={{fontFamily:'vazir',fontSize:'15px'}}className="color-f md:mt-3 md:mr-3 lg:mt-4">تور گروهی</p>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default Feature