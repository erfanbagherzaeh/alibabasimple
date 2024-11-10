// InclickContext.js
import React, { createContext, useState, useContext } from 'react';

const InclickContext = createContext();

export const InclickProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <InclickContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </InclickContext.Provider>
  );
};

export const useIncClick = () => useContext(InclickContext);
