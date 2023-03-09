import React, { useState, createContext } from "react";

const LoggedContext = createContext(); 

export const LoggedProvider = ({ children }) => {

  const [data, setData] = useState({});
  const [welcome,setWelcome]=useState(false)
  const [weather, setWeather] = useState([]);
  const [detWeather, setDetWeather] = useState([]);
    const [searchData, setSearchData] = useState([localStorage.getItem('cities')]);
    const [isFetched,setIsFetched]=useState(false)

  const value = { 
    data,
    setData,
    welcome,
    setWelcome,
    weather, setWeather,
    searchData, setSearchData,
    isFetched,setIsFetched,
    detWeather, setDetWeather,
  };

  return (
    <LoggedContext.Provider value={value}>{children}</LoggedContext.Provider>
  );
};

export default LoggedContext;