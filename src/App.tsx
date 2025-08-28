
import { Route, Routes } from 'react-router-dom';
import './App.css'

//page imports
import Home from './components/pages/Home/home';
// import Page404 from './components/pages/404/404';
// import Character from './components/pages/Character/Character';
// import CreateCharacter from './components/pages/Character/CreateCharacter/CreateCharacter';

function App() {
 

  return (
    <Home />
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/characters' element={<Character/>} />
    //   <Route path='/characters/new' element={<CreateCharacter/>} />



    //   <Route path='*' element={<Page404 />} />
    // </Routes>
  );
}

export default App
