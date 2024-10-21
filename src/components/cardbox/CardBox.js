function CardBox(props){
    return(
        <>
            <div className="w-[180px] h-[85px] border rounded-lg mx-1">
                <div className="w-full h-[60%]  flex flex-row justify-center">
                    <img className="w-[40px] mt-1" src={props.img}></img>
                </div>
                <div className="w-full h-[40%]  flex flex-row justify-center items-center">
                    <h1 style={{fontFamily:'yekan'}}>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default CardBox