import './IntroBox.css'
function IntroBox(props){
    return(
        <>
        <div className="box-border w-[280px] h-[50px] flex mt-2 cursor-pointer">
            <div className='w-[50%] h-[100%] '>
                <p className='mt-2 mr-5' style={{fontSize:'15px',fontFamily:'vazir'}} >{props.text}</p>
            </div>
            <div className='w-[50%] h-[100%]  flex flex-row justify-end items-center'>
            <span style={{fontSize:'15px',color:'silver'}} className="ml-5 material-symbols-outlined ">
                arrow_back_ios
                </span>
            </div>
        </div>

        </>
    )
}

export default IntroBox