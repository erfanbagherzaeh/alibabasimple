import Navbar from '../../components/navbar/Navbar'
import Course from '../../components/course/Course'
import Feature from '../../components/Feature/Feature'
import VillaBoxOne from '../../components/villabox-one/VillaBoxOne'
import VillaBoxTwo from '../../components/villabox-two/VillaBoxTwo'
import CardBox from '../../components/cardbox/CardBox'
import Main from '../../components/main/Main'
import Accordion from '../../components/Accordion/Accordion'
import Text from '../../components/Text/Text'
import Intro from '../../components/intro/Intro'
import Footer from '../../components/footer/Footer'
function Villa(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" w-full  mb-5 sm:h-56 sm:w-4/5 sm:m-auto">
            <img className="z-0 rounded-3xl w-full " src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-a654492c.webp"/>
        </div>
        <Course></Course>
        <Feature></Feature>
        <div className='w-full flex flex-row flex-wrap justify-center md:w-3/5 md:m-auto md:flex-row'>
            <VillaBoxOne
            img="https://cdn.alibaba.ir/cms/uploads/Villa_ba1479844d.png"
            text="اجاره ویلا"
            ></VillaBoxOne>

            <VillaBoxOne
            img='https://cdn.alibaba.ir/cms/uploads/Boom_Gardi_8e48d9e15f.png'
            text='رزرو بوم گردی'
            ></VillaBoxOne>

            <VillaBoxOne
            img='https://cdn.alibaba.ir/cms/uploads/Kolbe_4e1a976a77.png'
            text='اجاره کلبه'
            ></VillaBoxOne>

            <VillaBoxOne
            img='https://cdn.alibaba.ir/cms/uploads/Apartment_15a93f6fe7.png'
            text='اجاره اپارتمان مبله'
            ></VillaBoxOne>
        </div>
        <div className='w-full h-20  md:w-3/5 md:m-auto '>
            <h1 style={{fontSize:'30px',fontFamily:'vazir'}} className='py-3'>مقصدهای محبوب سفر</h1>
            <p  style={{fontSize:'18px',fontFamily:'vazir'}}>شهرهای محبوب در بین مانان</p>
        </div>
        <div className='w-full h-auto flex flex-row flex-wrap md:w-3/5 md:m-auto'>
            <div className='w-1/4 flex-wrap'>
            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/shomal_430ea129c8.jpg"
            t1="اجاره ویلا"
            t2="شمال
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/Tehran_de314d8375.png"
            t1="اجاره سوییت در"
            t2="تهران
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/masal_acc_4e0e2b067f.jpg"
            t1="اجاره ویلا"
            t2="ماسال
            "></VillaBoxTwo>
            </div>

            {/*  */}
            <div className='w-1/4 flex-wrap'>
            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/kordan_9d13050a93.jpg"
            t1="اجاره ویلا"
            t2="کردان
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/Kish_f159ce1dd4.png"
            t1="اجاره سوییت در"
            t2=" کیش
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/olesbelangah_acc_4b9fcd080e.jpg"
            t1="اجاره کلبه در"
            t2="اوسبلانگا
            "></VillaBoxTwo>
            </div>

            {/*  */}
            
            <div className='w-1/4 flex-wrap'>
            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/Ramsar_d313a71069.png"
            t1="اجاره ویلا "
            t2="رامسر
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/Rasht_c222c29f75.jpg"
            t1="اجاره ویلا"
            t2="رشت
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/tehran_apartments_e9c27bb8bd.jpeg"
            t1="اجاره اپارتمان مبله"
            t2="تهران
            "></VillaBoxTwo>
            </div>

            {/*  */}

            <div className='w-1/4 flex-wrap'>
            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/Mashhad_df4911171e.jpg"
            t1="اجاره سوییت"
            t2="مشهد
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/Qeshm_efd9c29cf7.png"
            t1="رزرو بوم گردی"
            t2="قشم
            "></VillaBoxTwo>

            <VillaBoxTwo
            img="https://cdn.alibaba.ir/cms/uploads/filband_acc_80697d7358.jpg"
            t1="اجاره ویلا در"
            t2="فیلبند
            "></VillaBoxTwo>
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

        <div className='w-full h-10  md:w-3/5 md:m-auto'>
            <h1 style={{fontSize:'25px',fontFamily:'vazir'}} className='py-1'>به دنبال چه نوع اقامتگاهی هستید؟</h1>
        </div>
        <div className='w-full h-auto  flex flex-wrap my-10'>
            <div className='m-auto w-3/5 h-auto  flex flex-wrap md:flex md:flex-row md:m-auto 
            '>
            <CardBox
            img="https://img.icons8.com/external-goofy-line-kerismaker/96/external-Villa-real-estate-goofy-line-kerismaker.png"
            title='کلبه سویسی'>
            </CardBox>

            <CardBox
            img='https://img.icons8.com/wired/64/umbrella.png'
            title='ساحل شمالی'>
            </CardBox>

            <CardBox
            img='https://img.icons8.com/ios/50/swimming-pool.png'
            title='استخردار'>
            </CardBox>

            <CardBox
            img='https://img.icons8.com/ios/50/poplar.png'
            title='جنگل شمالی'>
            </CardBox>

            <CardBox
            img='https://img.icons8.com/ios/50/bed.png'
            title='سوییت مبله'>
            </CardBox>

            <CardBox
            img='https://img.icons8.com/ios/50/hostel.png'
            title='هاستل'>
            </CardBox>
            </div>
        </div>
        <Main></Main>
        <Accordion></Accordion>
        <Text
        title='رزرو اقامتگاه'
        description='اگر راهی سفر هستید و می‌خواهید برای آن برنامه‌ریزی کنید، احتمالا یکی از اولین اقداماتی که انجام می‌دهید جستجوی اقامتگاه است. شاید به‌دنبال یک اقامتگاه کوچک هستید که مناسب اسکان یک نفر باشد یا شاید هم می‌خواهید گروهی سفر کنید و به‌دنبال یک اقامتگاه بسیار بزرگ هستید؛ اقامتگاهی که تمام امکانات رفاهی را برای تجربه لوکس مسافرانش فراهم کرده باشد.

جدا از متراژ، فاکتورهای دیگری هم در رزرو اقامتگاه مطرح است؛ به‌عنوان مثال بعضی از مسافران ترجیح می‌دهند اقامتگاهی را انتخاب کنند که دسترسی خوبی به مراکز مهم شهر دارد. با این حساب اگر نیاز به خرید چیزی داشته باشند یا بخواهند خدمات درمانی فوری دریافت کنند به مشکل نخواهند خورد.

برای بعضی دیگر از مسافران موضوع کاملا متفاوت است. آن‌ها ترجیح می‌دهند اقامتگاهی را رزرو کنند که کاملا با شهر فاصله دارد؛ یک اقامتگاه آرام و دنج، دور از شلوغی، آلودگی و سروصدا. لیست تمام‌وکمال اقامتگاه‌های علی‌بابا هر انتظاری که از یک اقامتگاه دارید را برآورده خواهد کرد. تنها کاری که لازم است انجام بدهید این است که در همین صفحه، مقصد یا نوع اقامتگاه مدنظرتان را جستجو کنید تا لیست بلند اقامتگاه‌ها را ببینید. حالا دیگر تنها کاری که لازم است انجام بدهید بررسی، مقایسه و انتخاب است.

از آنجایی که لیست اقامتگاه‌های علی‌بابا بسیار زیاد است، شما می‌توانید با کمک فیلترهای وب‌سایت انتخاب‌هایتان را هدفمندتر کنید. دنبال کلبه هستید یا ویلا؟ اقامتگاه‌های بوم‌گردی را بیشتر می‌پسندید یا ترجیح می‌دهید سوئیت رزرو کنید؟ شاید هم با خانه‌های سنتی موافق‌تر هستید یا اصلا می‌خواهید یک آپارتمان برای اقامتتان انتخاب کنید. ممکن است هیچکدام از این گزینه‌ها برایتان جذاب نباشد و بخواهید مجتمع‌های اقامتی یا حتی مسافرخانه رزرو کنید. انتخابتان هر کدام که باشد، فقط کافیست آن را در فیلترهای وب‌سایت علی‌بابا علامت بزنید تا لیست نمایش محدودتر و هدفمندتر شود. علاوه بر این، فیلترهای پرکاربرد دیگری هم هستند که می‌توانند شما را در انتخاب اقامتگاه مدنظرتان راهنمایی کنند؛ مثلا اگر برای شما امکان برگزاری مراسم و مهمانی یا ورود حیوانات خانگی مسئله است، پس حتما تیک آن را فعال کنید تا فقط همان اقامتگاه‌ها را ببینید. جنگلی، روستایی، کوهستانی، شهری یا ساحلی؟ فرقی ندارد؛ لیست کامل اقامتگاه‌های علی‌بابا منتظر میزبانی از شماست.'
        ></Text>
        <Intro></Intro>
        <Footer></Footer>
        </>
    )
}
export default Villa