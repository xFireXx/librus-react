import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isHomePage, setIsHomePage] = useState(false);

    return (
        <AppContext.Provider value={{ isHomePage, setIsHomePage }}>
          {children}
        </AppContext.Provider>
      );
}

