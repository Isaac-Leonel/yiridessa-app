import React, { useRef } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Navigator } from './components/navigator';
import { Jobs } from './pages/jobs';
import { Books } from './pages/books';

function App() {
  const navigatorRef = useRef(null)
  
  return (
    <BrowserRouter>
      <Navigator ref={navigatorRef}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
