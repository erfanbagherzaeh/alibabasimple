import Navbar from '../../components/navbar/Navbar'
import Course from '../../components/course/Course'
function Home(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" w-full  mb-5 sm:h-56 sm:w-4/5 sm:m-auto">
            <img className="z-0 rounded-3xl w-full " src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp"/>
        </div>
        <Course></Course>
        </>
    )
}

export default Home