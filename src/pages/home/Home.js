import Navbar from '../../components/navbar/Navbar'
import Course from '../../components/course/Course'
import Feature from '../../components/Feature/Feature'
import SliderRes from '../../components/sliderRes/SliderRes'
import Main from '../../components/main/Main'
import Accordion from '../../components/Accordion/Accordion'
import Intro from '../../components/intro/Intro'
import Footer from '../../components/footer/Footer'

import { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleItem from '../../components/articleItem/ArticleItem'


function Home(){
    const [articles , setAtricles] = useState([])

    useEffect( ()=>{
        axios.get('http://localhost:3000/articles')
        .then( response => setAtricles(response.data))
    } , [])
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
        <SliderRes></SliderRes>
        <Main></Main>
        <Accordion></Accordion>

        <div className='w-full h-a  m-2 flex flex-row flex-wrap 
        md:w-3/5 md:m-auto '>
            {articles.map(article => (
                <ArticleItem {...article}></ArticleItem>
            ))}
        </div>
        <div className="w-full h-auto  mb-5 
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto
        ">
            <div className=" md:flex ">
                <div className='md:w-[50%] md:mt-14'>
                <h1 className="font-bold mb-5 mt-7" style={{fontFamily:'vazir',fontSize:'30px'}}>بلیط هواپیما</h1>
                <p style={{
                    fontFamily:'vazir',
                    fontSize:'15px',
                    padding:'5px',
                    textAlign:'justify',
                    lineHeight:'40px'
                }}>علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.</p>
                </div>
                <div className="w-0 h-0 co-t
                sm:w-0 sm:h-0
                md:w-[50%] md:h-auto md:flex md:flex-row md:justify-center md:items-center md:mt-10
                ">
                    <img className="w-[90%] h-[90%]" src="https://cdn.alibaba.ir/h2/desktop/assets/images/baggage/baggage@3x-bda919ec.webp"/>
                </div>
            </div>
        </div>

        <div className="w-full h-auto  mb-5
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto
        ">
            <div className="">
                <h1 className="font-bold mb-5 mt-5" style={{fontFamily:'vazir',fontSize:'30px'}}>مزایای خرید بلیط هواپیما از علی‌بابا</h1>
                <p style={{
                    fontFamily:'vazir',
                    fontSize:'15px',
                    padding:'5px',
                    textAlign:'justify',
                    lineHeight:'40px'
                }}>شما با خرید بلیط هواپیما از علی‌بابا با سامانه مطمئن و معتبری روبه‌رو هستید که تمام نیازهایتان را پاسخ می‌دهد. برای خرید آنلاین بلیط هواپیما در علی‌بابا کافیست مبدا، مقصد و تاریخ پرواز خود را انتخاب کنید. پس از کلیک روی جستجو، لیست قیمت بلیط هواپیما به مقصد مورد نظر شما ظاهر می‌شود. در این لیست، انتخابهای متعددی پیش روی شماست. برای اینکه گزینه‌ ها را برای خرید بلیط هواپیما محدودتر کنید، علی‌بابا ابزارهای مختلفی در اختیار شما می‌گذارد.

                یکی از ابزارهای بسیار مفید و کاربردی برای خرید اینترنتی بلیط هواپیما، تقویم قیمتی است. با استفاده از تقویم قیمتی شما می‌توانید کمترین و بیشترین قیمت بلیط پرواز را در روزهای قبل و بعد از آن تاریخ مشاهده کنید. در صورتی که اصرار به خرید بلیط هواپیما در یک روز خاص نداشته باشید، این امکان به شما کمک می‌کند تا مبلغ بلیط هواپیما برایتان با مبلغ به صرفه تری تمام شود.
                
                علاوه بر این، با استفاده از فیلترهای کنار صفحه می‌توانید ایرلاین مورد نظرتان را انتخاب کنید. ضمنا می‌توانید، بلیط چارتر هواپیما یا سیستمی را فعال کنید تا فقط یکی از این دو نوع بلیط را مشاهده کنید. بلیط هواپیما خارجی ،کلاس پروازی و زمان پرواز هم از دیگر گزینه‌هایی است که با انتخاب آنها، تعداد بلیط ها محدودتر و رزرو بلیط هواپیما برای شما آسانتر می‌شود.
                
                برای پرداخت هزینه می‌توانید از کارت شتاب استفاده کنید. پس از پرداخت، خرید اینترنتی بلیط هواپیما با موفقیت انجام میشود و بلیط به ایمیل شما ارسال میشود. همچنین در همه این مراحل، پشتیبانی علی‌بابا در کنار شماست تا هر زمانی که سوال یا مشکلی داشتید، 24 ساعته پاسخگوی شما باشد.</p>
            </div>
        </div>

        <div className="w-full h-auto  mb-5
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto
        ">
            <div className="">
                <h1 className="font-bold mb-5 mt-5" style={{fontFamily:'vazir',fontSize:'30px'}}>امکان استرداد بلیط هواپیما</h1>
                <p style={{
                    fontFamily:'vazir',
                    fontSize:'15px',
                    padding:'5px',
                    textAlign:'justify',
                    lineHeight:'40px'
                }}>یکی دیگر از امکانات علی‌بابا استرداد آنلاین بلیط هواپیما (کنسلی بلیط) است. در صورتی که پس از رزرو بلیط هواپیما برنامه سفرتان تغییر کرده، به راحتی می‌توانید طبق قوانین کنسلی پرواز داخلی، بلیط هواپیمای خود را کنسل کنید. پس از استرداد، پول شما در کمترین زمان ممکن به حسابتان برگردانده می‌شود. شما برای خرید اینترنتی بلیط هواپیما از علی‌بابا می‌توانید از تلفن همراه، رایانه شخصی یا تبلت استفاده کنید. علی‌بابا در همه این ابزارها کاربرپسند است و شما خریدی آسان را تجربه خواهید کرد. همچنین امکان نصب و استفاده از اپلیکیشن علی‌بابا برای گوشی های اندروید و آیفون وجود دارد.</p>
            </div>
        </div>

        <div className="w-full h-auto  mb-5
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto
        ">
            <div className="">
                <h1 className="font-bold mb-5 mt-5" style={{fontFamily:'vazir',fontSize:'30px'}}>رزرو بلیط هواپیما از معتبرترین ایرلاین‌ها</h1>
                <p style={{
                    fontFamily:'vazir', 
                    fontSize:'15px',
                    padding:'5px',
                    textAlign:'justify',
                    lineHeight:'40px'
                }}>شما برای خرید بلیط هواپیما از بین ایرلاینهای مختلف حق انتخاب دارید و می‌توانید از ایرلاینهای ماهان، زاگرس، کیش ایر، قشم ایر، آسمان، کاسپین، تابان، وارش یا معراج، بلیط پرواز داخلی خود را خریداری کنید.

                هر یک از این ایرلاین ها ویژگیها و مشخصات خود را دارند. برخی امکانات و خدمات رفاهی بیشتر دارند و برخی دیگر بلیط هواپیما را با قیمت به صرفه تری ارائه می‌دهند. زمانی که در علی‌بابا لیست بلیط تمام این ایرلاین ها را مشاهده می‌کنید، می‌توانید از بین آنها انتخاب کنید.</p>
            </div>
        </div>

        <div className="w-full h-auto  mb-5
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto
        ">
            <div className="">
                <h1 className="font-bold mb-5 mt-5" style={{fontFamily:'vazir',fontSize:'25px'}}>علی‌بابا: رتبه یک خرید اینترنتی بلیط سفر</h1>
                <p style={{
                    fontFamily:'vazir',
                    fontSize:'15px',
                    padding:'5px',
                    textAlign:'justify',
                    lineHeight:'40px'
                }}>علی‌بابا طی این سالها، اعتبار زیادی نزد مشتریان خود کسب کرده است. طبق نظرسنجی، 97.2 درصد از مشتریان علی‌بابا از خدمات این سامانه راضی بوده‌اند و استفاده از آن را به دوستان و آشنایان خود پیشنهاد داده‌اند. سرعت سادگی خرید اینترنتی بلیط هواپیما، اعتبار و خوشنامی، امکان استرداد آنلاین بلیط هواپیما و پشتیبانی 24 ساعته در تمام روزهای هفته، رتبه یک فروش بلیط را از آنِ علی‌بابا کرده است.

                شما با رزرو بلیط هواپیما در علی‌بابا، از سفری راحت و بی‌دردسر مطمئن خواهید بود.</p>
            </div>
        </div>
        <Intro></Intro>
        <Footer></Footer>

        
        
        </>
    )
}

export default Home