import { createContext, useState, useRef, useContext, useEffect } from 'react';
import React from 'react';

const AppContext = createContext(null);

export function Context({ children }) {
  const [headerColor, setHeaderColor] = useState(null);
  const headerRef = useRef();
  const [ref_state, setRefState] = useState(null);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    setRefState(headerRef.current);
  }, []);

  return (
    <AppContext.Provider value={{ headerRef }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
