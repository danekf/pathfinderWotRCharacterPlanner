import { Route, Routes } from "react-router-dom";

import { Home, Character, CreateCharacter, Page404} from '../pages'

import '../../index.css';

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route path="/characters" element={<Character />}></Route>
      <Route path="/characters/new" element={<CreateCharacter />}></Route>

      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  )
};
