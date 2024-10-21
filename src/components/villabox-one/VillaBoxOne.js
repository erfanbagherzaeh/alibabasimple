import './VillaBoxOne.css'
function VillaBoxOne(props){
    return(
        <>
        <div className='my-5 border-box rounded-lg w-[250px] h-[160px] mx-2 md:my-16 cursor-pointer'>
            <div className='w-full h-[75%] '>
                <img className='w-full h-full rounded-t-lg' src={props.img}/>
            </div>
            <div style={{fontSize:'18px',fontFamily:'vazir'}} className='pt-1.5 text-center w-full h-[25%] '>{props.text}</div>
        </div>
        </>
    )
}

export default VillaBoxOne