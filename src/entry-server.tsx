//renders the HTML on the server side

//renders the app to HTML
import { renderToString } from "react-dom/server";
import React from 'react'

import { Menu } from './pages/menu/menu.tsx'

import App from "./App";

export const render = () => {
  return renderToString(
    <React.StrictMode>
        <Menu />
        <App />
    </React.StrictMode>
)
};