
import { Route, Routes } from 'react-router-dom';
import './App.css'

//page imports
import Home from './pages/Home/home';
import Page404 from './pages/404/404';

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Home />} />


      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default App
