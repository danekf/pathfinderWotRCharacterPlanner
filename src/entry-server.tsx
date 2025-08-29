//renders the HTML on the server side
import React from 'react'
import { renderToString } from "react-dom/server";

export const render = () => {

  //TODO: Static routing
  return renderToString(
    <React.StrictMode>
      
    </React.StrictMode>
)
};