//renders the HTML on the server side
import React from 'react'
import { renderToString } from "react-dom/server";

export const render = () => {
  return renderToString(
    <React.StrictMode>
      
    </React.StrictMode>
)
};