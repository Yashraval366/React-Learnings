import React from 'react'
import { createContext, useContext, useState } from 'react'

const DataContext  = createContext()

export const DataProvider = ({ children }) => {
  const [submittedData, setsubmittedData] = useState([]);

  return (
    <DataContext.Provider value={{ submittedData, setsubmittedData }}>
      {children}
    </DataContext.Provider>
  );

}

export const useData = () => {
  return useContext(DataContext);
};
