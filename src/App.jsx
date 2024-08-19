import React, { useRef } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/home';
import { Navigator } from './components/navigator';
import { Jobs } from './pages/jobs';
import { Books } from './pages/books';
import { Races } from './pages/races';
import { Classes } from './pages/class';
import {createTheme, ThemeProvider} from "@mui/material";
import { My404Component } from './pages/404';

function App() {
  const navigatorRef = useRef(null)

  const baseTheme = createTheme({
    palette: {
      primary: {
        light: "#b2dfdb",
        main: "#5f1b1b",
        dark: "#004d40"
      }
    },
  });
  
  return (
    <BrowserRouter>
      <Navigator ref={navigatorRef}/>
      <ThemeProvider theme={baseTheme}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path='/races' element={<Races/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path="*" element={<My404Component />}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
