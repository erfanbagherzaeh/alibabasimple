import './Card.css'
function Card(props){
    return(
        <>
        <div className="card-border w-[350px] h-[420px]  mx-3 mb-2 mt-10 ">
            <div className="w-full h-[170px] rounded-lg" >
                <img className="w-[100%] h-[100%] rounded-t-lg" src={props.img}/>
            </div>
            <div className="w-full h-auto ">
                <p className="font-color p-4 text-justify rounded-lg leading-6 md:p-5  " style={{fontSize:'13px', fontFamily:'vazir'}}>{props.text}</p>
            </div>
        </div>
        </>
    )
}
export default Card