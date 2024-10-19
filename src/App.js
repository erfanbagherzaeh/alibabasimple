import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import ParvazB from './pages/ParvazB/ParvazB'
import Train from './pages/Train/Train'
import Bus from './pages/Bus/Bus'
import Tour from './pages/Tour/Tour'
import Hotel from './pages/Hotel/Hotel'
import Villa from './pages/Villa/Villa'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='ParvazB' element={<ParvazB/>}></Route>
        <Route path='Train' element={<Train/>}></Route>
        <Route path='Bus' element={<Bus/>}></Route>
        <Route path='Tour' element={<Tour/>}></Route>
        <Route path='Hotel' element={<Hotel/>}></Route>
        <Route path='Villa' element={<Villa/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
