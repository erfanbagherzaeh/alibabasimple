import './VillaBoxTwo.css'
function VillaBoxTwo(props){
    return(
        <>
        <div className='border w-[270px] h-[80px]  flex rounded-lg mt-5'>
            <div className='w-[40%] h-full '>
                <img className='w-[85%] h-[85%] mt-2 mr-2 rounded-lg' src={props.img}/>
            </div>
            <div className='w-[40%] h-full '>
                <p className='mt-6 mr-4' style={{fontSize:'12px' ,color:'silver',fontFamily:'vazir'}}>{props.t1}</p>
                <p className='mr-4' style={{fontSize:'17px' ,fontFamily:'vazir'}}>{props.t2}</p>
            </div>
            <div className='w-[20%] h-full '>
            <span style={{color:'silver',fontSize:'18px'}} className="material-symbols-outlined mr-2 mt-9">
            arrow_back_ios
            </span>
            </div>
        </div>
        </>
    )
}

export default VillaBoxTwo