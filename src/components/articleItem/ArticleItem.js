import './ArticleItem.css'
import { TiArrowLeftThick } from "react-icons/ti";
function ArticleItem(Props){
    return(
        <>
            <div className='ar-card w-[320px] h-[400px]  m-5 flex flex-col border rounded-lg bg-white mr-10'>
                <div className='up w-full h-[55%] m-0 '>
                    <img className='w-[100%] h-[100%]' src={Props.image}/>
                </div>
                <div className='down w-[95%] h-[45%]   m-2'>
                    <p className='p-1' style={{'fontFamily':'vazir',fontSize:'25px'}}>{Props.title}</p>
                    <p className='p-1 text-justify' style={{'fontFamily':'vazir',fontSize:'11px'}}>{Props.desc}</p>
                    <div className='flex pt-2 pr-2 cursor-pointer hover:text-orange-500'>
                        <p style={{'fontFamily':'vazir'}}>ادامه مقالات</p>
                        <TiArrowLeftThick size={'25px'}/>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ArticleItem