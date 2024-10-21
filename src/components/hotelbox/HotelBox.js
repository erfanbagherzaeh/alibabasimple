import './HotelBox.css'
function HotelBox(props){
    return(
        <>

        <div className="hotel-border w-[350px] h-[60px] flex mt-2 cursor-pointer">
            <div className='w-[80%] h-[100%] flex '>
                <img className='w-[55px] h-[30px] mt-3 mr-1 ml-1' src={props.img}/>
                <p className='mt-4' style={{fontSize:'15px',fontFamily:'vazir'}} >{props.text}</p>
            </div>
            <div className='w-[20%] h-[100%]  flex flex-row justify-end items-center'>
            <span style={{fontSize:'15px',color:'silver'}} className="ml-5 material-symbols-outlined ">
                arrow_back_ios
                </span>
            </div>
        </div>
        </>
    )
}

export default HotelBox