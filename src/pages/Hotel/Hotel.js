import Feature from '../../components/Feature/Feature'
import Course from '../../components/course/Course'
import Navbar from '../../components/navbar/Navbar'
import SliderRes from '../../components/sliderRes/SliderRes'
import Main from '../../components/main/Main'
import HotelBox from '../../components/hotelbox/HotelBox'
import Accordion from '../../components/Accordion/Accordion'
import Text from '../../components/Text/Text'
import Intro from '../../components/intro/Intro'
import Footer from '../../components/footer/Footer'
function Hotel(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" w-full  mb-5 sm:h-56 sm:w-4/5 sm:m-auto">
            <img className="z-0 rounded-3xl w-full " src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-8e1d56d8.webp"/>
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
        <div className='w-full h-auto  flex flex-col md:relative md:top-5 
        md:w-3/5 md:flex md:flex-row md:m-auto
        '>
            <div className='flex flex-col w-full h-auto items-center md:w-1/3'>
                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/antalya-25a374ed.svg'
                text='هتل های انتالیا'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/dubai-a62a33c3.svg'
                text='هتل های دبی'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/amsterdam-d9bf7123.svg'
                text='هتل های امستردام'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/berlin-b831a84d.svg'
                text='هتل های برلین'
                ></HotelBox>
            </div>
            <div className='flex flex-col w-full h-auto items-center md:w-1/3'>
                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/turkey-389ce7c7.svg'
                text='هتل های استانبول'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/paris-5ea3c8bc.svg'
                text='هتل های پاریس'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/baku-8540bc5c.svg'
                text='هتل های باکو'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/milan-c2e18d36.svg'
                text='هتل های میلان'
                ></HotelBox>
            </div>
            <div className='flex flex-col w-full h-auto items-center  md:w-1/3'>
            <   HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/van-9eee0b71.svg'
                text='هتل های وان'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/yerevan-d15e89f7.svg'
                text='هتل های ایروان'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/rome-1b18d679.svg'
                text='هتل های رم'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/moscow-226dafbe.svg'
                text='هتل های مسکو'
                ></HotelBox>
            </div>
        </div>

        {/*  */}
        <div className='w-full h-auto  flex flex-col md:relative md:top-16
        md:w-3/5 md:flex md:flex-row md:m-auto
        '>
            <div className='flex flex-col w-full h-auto items-center md:w-1/3'>
                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/mashhad-a0012cea.svg'
                text='هتل های مشهد '
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/tabriz-8426cacb.svg'
                text='هتل های تبریز'
                ></HotelBox>
            </div>
            <div className='flex flex-col w-full h-auto items-center md:w-1/3'>
                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/tehran-10864b90.svg'
                text='هتل های تهران'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/isfahan-6e454c58.svg'
                text='هتل های اصفهان'
                ></HotelBox>
            </div>
            <div className='flex flex-col w-full h-auto items-center  md:w-1/3'>
            <   HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/kish-0b69a801.svg'
                text='هتل های کیش'
                ></HotelBox>

                <HotelBox
                img='https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/shiraz-4fbe8527.svg'
                text='هتل های شیراز'
                ></HotelBox>
            </div>
        </div>
        <div className='w-full h-auto md:relative md:top-20'>
            <Accordion></Accordion>
        </div>
        <div className='w-full h-auto md:relative md:top-20'>
            <Text
            title='رزرو هتل از علی بابا، همسفر هر سفر'
            description="سال 1393، در طلایی‌ترین روزهایی که ایران تغییرات دیجیتال را در آغوش می‌کشید، وب‌سایتی متولد شد که کارش را از فروش بلیط آغاز کرده بود.
علی بابا به عنوان یکی از اولین بسترهای آنلاین خرید بلیط آنقدر در کار خود استمرار نشان داد که توانست به سرعت، تمام آنچه که برای سفر مورد نیاز است را در بستری آنلاین به متقاضیان سفر عرضه کند. رزرو آنلاین هتل و سایر محصولات گردشگری برای علی بابا راهی برای رسیدن به مفهوم تازه‌ای از سفر بود.
علی بابا امروز فقط یک وب‌سایت و اپلیکیشن فروش محصولات گردشگری نیست؛ علی بابا خودِ سفر است؛ مجموعه‌ای که لذت تجربه سفر را برای مسافران معنا می‌کند.
علی بابا در تمام این چند سال، چمدانی از اعتبار و تجربه برای خود جمع کرده تا همسفری لایق برای همه سفرهای شما باشد و با حمایت شما در رتبه یک گردشگری کشور بایستد."
            ></Text>

            <Text
            title="رزرو آنلاین هتل در علی بابا، به سادگی آب خوردن"
            description="رزرو هتل در گذشته و پیش از امکان رزرو اینترنتی هتل را به خاطر بیاورید. اول باید دل به راه می‌زدیم، به مقصد می‌رسیدیم و بعد هم از این هتل به آن هتل به دنبال اتاقی تمیز، مطمئن و با قیمتی مناسب می‌گشتیم. اگر خیلی هم دقیق بودیم، یک دستمان به تلفن بود تا شماره هتلی آشنا در مقصد را بگیریم و پیش از سفر اتاقی مناسب رزرو کنیم.
با ظهور اینترنت، راه آسان‌تری برای رزرو هتل پیشِ روی مسافران قرار گرفت. رزرو آنلاین هتل راهی سریع، مطمئن و آسان بود که می‌توانست خیال مسافران را از بابت برنامه‌ریزی دقیق سفر راحت کند.
علی بابا به عنوان رتبه یک سفر و بستری مطمئن برای خرید همه ملزومات سفر، امکان رزرو اینترنتی هتل را هم فراهم کرد تا در کنار سایر محصولات، در واقع بهترین سایت رزرو هتل هم باشد.
برای رزرو هتل در علی بابا کافی است به صفحه هتل بیایید، مقصد و بازه زمانی اقامت خود را تعیین کنید و سپس جستجو را بزنید. محبوب‌ترین هتل‌ها به ترتیب خودشان را به شما نشان می‌دهند.
در همین صفحه نتایج جستجو می‌توانید مشخصات هر هتل را ببینید و نتیجه جستجو را بر اساس ستاره‌های هتل، امکانات رفاهی، محبوبیت هتل بر اساس امتیاز کاربران و سایر معیارهای مفید محدود کنید.
با کلیک روی هر هتل، سایر امکانات هتل با تصاویر و جزئیات کامل مثل جانمایی هتل روی نقشه و فاصله تا جاذبه‌های گردشگری به شما نمایش داده می‌شود تا رزرواسیون هتل را به مطمئن‌ترین شکل ممکن انجام دهید."
            ></Text>

            <Text
            title="رزرو هتل ارزان، پیشنهاد علی بابا به شما"
            description="راهکار علی بابا برای اطمینان از اینکه کمترین هزینه را برای رزرو اینترنتی هتل پرداخت می‌کنید، تضمین بهترین قیمت بازار است.
برخی هتل‌ها در صفحه نتایج جستجو با علامتی خاص از بقیه جدا شده‌اند. اگر این هتل‌ها را رزرو کنید و با قیمتی پایین‌تر دقیقا با همین شرایط در جایی دیگر آن‌ها را پیدا کنید، به علی بابا اطلاع می‌دهید تا با دو برابر این اختلاف قیمت، کد تخفیفی برای رزرو هتل به شما تقدیم کند.
همچنین با استفاده از فیلتر نتیجه جستجو، مرتب کردن هتل‌ها از ارزان‌ترین به گران‌ترین، کاهش ستاره‌های هتل‌ها و در نهایت کمی تغییر در برنامه سفر می‌توانید ارزان‌ترین هتل‌ها را برای رزرو پیدا کنید.
ضمنا اگر برای سفرتان عجله ندارید، می‌توانید گزینه اطلاع از کاهش قیمت را در اپلیکیشن علی بابا فعال کنید تا کاهش قیمت‌ها از طریق ایمیل یا پیامک به شما خبر داده شود."
            ></Text>

            <Text
            title="رزرو هتل خارجی با کارت شتاب ریالی"
            description="یکی از دغدغه‌های مهم مسافران کشورهای خارجی، رزرو هتل خارجی با پرداخت هزینه ریالی است. این امکان در علی بابا فراهم است تا تنها با داشتن کارت شتاب و دسترسی به رمز پوزا، هتل خارجی مدنظرتان را هم با پرداخت ریالی، رزرو کنید."
            ></Text>
        </div>
        <div className='w-full h-auto md:relative md:top-28'>
            <Intro></Intro>
        </div>
        <div className='w-full h-auto md:relative md:top-24'>
            <Footer></Footer>
        </div>
        </>
    )
}
export default Hotel