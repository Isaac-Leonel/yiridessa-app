import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Navigator } from './components/navigator';
import { Jobs } from './pages/jobs';
import { Books } from './pages/books';

function App() {
  return (
    <BrowserRouter>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
