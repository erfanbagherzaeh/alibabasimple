import Navbar from '../../components/navbar/Navbar'
import Course from '../../components/course/Course'
import TabsAndCarousel from '../../components/toureslider/TourSlider'
import SliderRes from '../../components/sliderRes/SliderRes'
import Main from '../../components/main/Main'
import Text from '../../components/Text/Text'
import TabsAndCarouselTwo from '../../components/tourslidertwo/TourSliderTwo'
import IntroBox from '../../components/introbox/IntroBox'
import Intro from '../../components/intro/Intro'
import Footer from '../../components/footer/Footer'

function Tour(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" w-full  mb-5 sm:h-56 sm:w-4/5 sm:m-auto">
            <img className="z-0 rounded-3xl w-full " src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-f039b6c5.webp"/>
        </div>
        <Course></Course>
        <TabsAndCarousel></TabsAndCarousel>
        <div className="w-full h-12  relative bottom-10 flex flex-row justify-center items-center cursor-pointer mt-5
        md:w-3/5 md:m-auto md:relative md:bottom-20">
            <div className="w-[230px] h-[55px] border border-cyan-700 rounded-lg">
                <h1 className="text-center p-3" style={{fontSize:'16px',fontFamily:'vazir',color:'darkblue'}}>مشاهده همه تور های گروهی</h1>
            </div>
        </div>
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
        <SliderRes></SliderRes>
        <Main></Main>
        <div className="w-full h-auto 
        md:w-3/5 md:m-auto 
        ">
            <Text
            title="خدمات ویژه تور"
            description="سفر به کیش همیشه یکی از گزینه‌های روی میز است. جزیره‌ای آرام و زیبا در خلیج فارس که به خاطر داشتن امکانات رفاهی و تفریحی فراوانش، گردشگران را به وسوسه می‌اندازد که نه یک بار که چند بار، سفر به این جزیره را تجربه کنند. حالا اگر بخواهید تور کیش را از علی بابا رزرو کنید، علاوه بر آنکه خیالتان از رزرو تور با بهترین قیمت بازار راحت است، می‌توانید از هدیه ویژه علی بابا هم استفاده کنید. این هدیه ویژه کسانی است که از امکان خرید تور با بهترین قیمت استفاده کرده‌اند."
            ></Text>
        </div>
        <TabsAndCarouselTwo></TabsAndCarouselTwo>
        <Text
        title="سایر تورهای علی‌بابا"
        description="برای افرادی که به تازگی پا به عرصه ی گردشگری گذاشته‌اند، سفر با تور بهترین گزینه است. چرا که راهنمایان تور به خاطر تجربه‌های زیادی که دارند، اطلاعات خیلی دقیقی از مقصد گردشگری دارند و استفاده از دانش آن‌ها می تواند ناشناخته‌هایی از مقصد رویایی‌تان را به شما نشان دهد و صد در صد دانستن برخی اطلاعات بهتر از این است که شما فقط آن منطقه را ببینید. تور خارجی و داخلی علی‌بابا خاطره یک سفر رویایی را برای شما به ارمغان خواهند آورد.
        "></Text>

        <div className="w-full h-auto  flex flex-col 
        md:flex md:flex-row md:w-3/5 md:m-auto
        " >
            <div className="w-full h-auto  flex flex-col items-center md:w-1/3 md:flex">
                <IntroBox text="تور کیش"></IntroBox>
                <IntroBox text="تور کیش از شیراز"></IntroBox>
                <IntroBox text="تور کیش از مشهد"></IntroBox>
            </div>
            <div className="w-full h-auto  flex flex-col items-center md:w-1/3 ">
                <IntroBox text="تور استانبول"></IntroBox>
                <IntroBox text="نور کیش از اسفهان"></IntroBox>
                <IntroBox text="تور کیش از اهواز"></IntroBox>
            </div>
            <div className="w-full h-auto  flex flex-col items-center md:w-1/3">
                <IntroBox text="تور کیش از کرمان"></IntroBox>
                <IntroBox text="تور کیش از تبریز"></IntroBox>
            </div>
        </div>
        <Intro></Intro>
        <Footer></Footer>
        </>
    )
}
export default Tour