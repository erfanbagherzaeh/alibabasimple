import Navbar from '../../components/navbar/Navbar'
import Course from '../../components/course/Course'
import Feature from '../../components/Feature/Feature'

function Home(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" w-full  mb-5 sm:h-56 sm:w-4/5 sm:m-auto">
            <img className="z-0 rounded-3xl w-full " src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp"/>
        </div>
        <Course></Course>
        <Feature></Feature>
        <div className="w-full h-auto  mt-5 mb-5 flex flex-row justify-center 
        sm:w-full
        md:w-full
        md:flex
        md:flex-row
        md:justify-center
">
            <img className="w-auto h-[180px] rounded-lg
            sm:w-3/5
            " src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"/>
        </div>

        </>
    )
}

export default Home