import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  
  const contextValue = {
    // show,
    // setShow,
    bookItem,
    setBookItem,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
