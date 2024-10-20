import './Main.css'
function Main(){
    return(
        <>
        <div className="  w-full h-56 flex flex-row justify-center items-center 
        sm:w-full
        md:w-full
        ">
            <div className="main-border w-[95%] h-[95%] bg-white  rounded-lg flex flex-row justify-between
            sm:w-3/5

            ">
                <div className='w-[50%] h-full md:flex mt-5'>
                    <div className='w-0 h-0 md:w-[150px] md:h-[120px]  mt-2 mr-2'>
                        <img className='w-[70%] h-[90%] mr-1 ' src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-56155e39.png"/>
                    </div>
                    <div className="w-[50%] h-full md:relative md:left-10">
                        <h1 style={{fontSize:'20px',fontFamily:'vazir'}} className=" w-[160px] mt-5 mr-5">اپلیکیشن علی بابا</h1>
                        <p style={{fontSize:'16px',fontFamily:'vazir',color:'gray'}} className='mr-5 w-[200px] mt-2'>همه سفر ها در جیب شماست</p>
                    <button className="bt-main relative right-5 ">راهنما نصب</button>
                </div>
                </div>

                
                <div className="w-[50%] h-full  flex flex-row justify-center items-end
                               ">
                    <img className="w-[95%] h-[100%] 
                    sm:w-[230px] sm:h-[160px] sm:relative sm:right-0
                    md:w-[300px] md:h-[200px]
                    "  src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-e3e3b7dc.webp"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Main