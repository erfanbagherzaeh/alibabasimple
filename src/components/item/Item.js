import './Item.css'
function Item(props){
    return(
        <>

        <div className="item-border w-[250px] h-[180px]  rounded-lg cursor-pointer mx-2 my-2">
            <div className="w-[100%] h-[75%] ">
                <img className="w-[100%] h-[100%] rounded-t-lg pb-2"  src={props.img}/>
            </div>
            <div className="w-full h-[25%] flex flex-row justify-between ">
                <div style={{fontSize:'14px',fontFamily:'vazir'}} className="w-[80%] h-[100%]  pt-2 pr-2">
                    {props.title}
                </div>
                
                <div className="w-[20%] h-[100%] ">
                    <span style={{fontSize:'13px',color:'gray'}} className="material-symbols-outlined mt-3 mr-4">
                    arrow_back_ios
                    </span>
                </div>
            </div>
        </div>

        </>
    )
}
export default Item