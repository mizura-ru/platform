import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import analytics from './tools/Firebase';
import YandexMetrica from './tools/YandexMetrica';
import CookieConsent from './components/cookies/comp';
import application from '../package.json';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [pagename, setPagename] = useState('Загрузка...');
  const [title, setTitle] = useState('MIZURA');
  const version = application.version;
  const name = application.name;

  useEffect(() => {
    document.title  = `${pagename} | MIZURA`;
    window.scrollTo(0, 0);
  }, [setPagename, setTitle, pagename, title]); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ analytics, theme, toggleTheme, navigate, pagename, setPagename,version,name }}>
      {children}
      <CookieConsent/>
      <YandexMetrica />
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
