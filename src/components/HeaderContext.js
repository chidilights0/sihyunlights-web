import React, { createContext, useState, useEffect, useRef } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef }}>
      {children}
    </HeaderContext.Provider>
  );
};