import React, { useState } from 'react';
import './Accordion.css';
const Accordion = () => {
  const menuItems = [
    { title : "چند روز قبل از پرواز، بلیط هواپیما را بخریم؟", content: "امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید." },
    { title: "در هر پرواز، میزان بار مجاز چقدر است؟", content: "میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید." },
    { title: "نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟", content: "نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید." },
    { title: "رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟", content: "خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید." },
    { title: "آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟", content: "وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد." },
    { title: "آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟", content: "در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند." },
    { title: "هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم، امکان انتخاب صندلی مورد نظرمان وجود دارد؟", content: "خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است." },
  ];

  const [expandedItems, setExpandedItems] = useState({});

  const handleToggleItem = (index) => () => {
    setExpandedItems({
      ...expandedItems,
      [`item${index}`]: !expandedItems[`item${index}`]
    });
  };

  return (
    <>
    <div className=' w-full h-12  mt-5 
    sm:w-3/5 sm:m-auto
    '>
      <h1 style={{fontFamily:'vazir',fontSize:'25px'}} className='font-extrabold pt-2 pr-2 mt-10 '>پرسش های شما</h1>
    </div>
    <div className=" m-10 accordion-container h-auto w-full max-w-screen-xl mx-auto px-4 py-8 border  rounded-lg text-end my-4 mb-10 
    sm:w-3/5 sm:m-auto
    md:w-3/5 md:m-auto
    ">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-8 border-b pb-4 last:border-b-0">
          <button
            onClick={handleToggleItem(index)}
            className="flex justify-between items-center w-full cursor-pointer"
          >
            <span className="title-acc font-semibold">
            <span class="qut material-symbols-outlined">
            question_mark 
            </span>
                {item.title}
                </span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${expandedItems[`item${index}`] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedItems[`item${index}`] && (
            <div className="p-4 bg-white rounded-lg mt-4">
              <p className="text-acc text-gray-600">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Accordion;
