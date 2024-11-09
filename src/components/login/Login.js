import './Login.css'
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
        <div className='w-full h-[100vh] bg-white flex justify-center items-center'>
            <div className='log w-[500px] h-[500px] bg-white rounded-lg'>
                <div className='w-full h-[20px]  mt-1 flex flex-row justify-end'>
                    <Link to='/'>
                    <div className='w-[20px] h-[20px] mx-2'>
                    <MdClose size={'25px'}/>
                    </div>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <h1 className='my-3' style={{fontFamily:'vazir',fontSize:'25px'}} >وورد یا ثبت نام</h1>
                    <p style={{fontFamily:'vazir',fontSize:'15px'}}>برای ادامه شماره موبایل خود را وارد کند</p>
                </div>
                <div className='number-box m-auto flex w-[280px] bg-white h-[35px] flex-row items-center rounded-md my-5 justify-between'>
                    <div>
                        <input className='nmb w-[240px] ltr' type="number" />
                    </div>
                    <div className='nmb border-r-2 px-1'>98+</div>
                </div>
                <div className='w-[280px] flex flex-row m-auto'>
                    <p style={{fontFamily:'vazir',fontSize:'12px'}}>استفاده از علی بابا به معنی پذیرش قوانین و مقررات این سرویس است</p>
                </div>
                <div className='flex flex-row justify-center items-center my-5'>
                    <div className='cursor-pointer w-[250px] h-[40px] bg-blue-500 rounded-lg flex flex-row items-center justify-center'>
                        <h1 className='' style={{fontFamily:'vazir',fontSize:'15px',color:'white'}}>تایید و دریافت کد</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center my-5'>
                    <h1 className='text-blue-500 cursor-pointer' style={{fontFamily:'vazir',fontSize:'13px'}}>وورود با کلمه عبور</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login