import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from './pages/home/Home';
import ParvazB from './pages/ParvazB/ParvazB';
import Train from './pages/Train/Train';
import Bus from './pages/Bus/Bus';
import Tour from './pages/Tour/Tour';
import Hotel from './pages/Hotel/Hotel';
import Villa from './pages/Villa/Villa';
import Article from "./components/article/Article";
import Login from "./components/login/Login";
import './App.css';
import LoadingPage from './components/LoginPage/LoginPage';

function App() {
  const [showLoadingPage, setShowLoadingPage] = useState(true); // وضعیت برای نمایش لودینگ

  // استفاده از useEffect برای تایمر 15 ثانیه‌ای
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingPage(false); // بعد از 15 ثانیه، صفحه لودینگ از بین می‌رود
    }, 3000); // 

    // پاکسازی تایمر هنگام انهدام کامپوننت
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showLoadingPage ? (
        // نمایش صفحه لودینگ تا 15 ثانیه
        <LoadingPage />
      ) : (
        // بعد از 15 ثانیه نمایش محتوای اصلی
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='ParvazB' element={<ParvazB />} />
          <Route path='Train' element={<Train />} />
          <Route path='Bus' element={<Bus />} />
          <Route path='Tour' element={<Tour />} />
          <Route path='Hotel' element={<Hotel />} />
          <Route path='Villa' element={<Villa />} />
          <Route path='Article/:ArticleId' element={<Article />} />
          <Route path='Login' element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
