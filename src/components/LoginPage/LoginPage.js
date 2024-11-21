import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  const [messages, setMessages] = useState(["ALII"]); // پیام‌ها
  const [showMainContent, setShowMainContent] = useState(false); // نمایش محتوای اصلی

  useEffect(() => {
    // تنظیم پیام‌ها در بازه‌های زمانی
    const timers = [
      setTimeout(() => setMessages((prev) => ["ALII", "BABA"]), 1000),
      setTimeout(
        () =>
          setMessages((prev) => [
            ...prev,
           "Welcome to Alibaba",
          ]),
        5000
      ),
    ];

    // تغییر به محتوای اصلی پس از 10 ثانیه
    const mainContentTimer = setTimeout(() => setShowMainContent(true), 5000);

    // پاکسازی تایمرها هنگام انهدام کامپوننت
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(mainContentTimer);
    };
  }, []);

  if (showMainContent) {
    // نمایش محتوای اصلی
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#f0f0f0",
          textAlign: "center",
        }}
      >
     
      </Box>
    );
  }

  return  (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "rgba(211, 211, 211, 0.8)", // پس‌زمینه خاکستری با شفافیت
        backdropFilter: "blur(2px)", // افکت بلور
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* متن‌های لودینگ */}
      <Box sx={{ mb: 4 }}>
        {messages.map((message, index) => (
          <Typography
            key={index}
            variant="h2" // متن بزرگ
            sx={{
              fontSize: "2.5rem",
              color: "#333",
              margin: index === 0 ? "0" : "10px 0", // فاصله پیام‌ها
              display: index === 0 ? "inline" : "block", // نمایش کنار هم یا زیر هم
              marginLeft: index === 1 ? "10px" : "0", // فاصله "بابا"
            }}
          >
            {message}
          </Typography>
        ))}
      </Box>

      {/* انیمیشن لودینگ */}
      
    </Box>
  );
};

export default LoadingScreen;
