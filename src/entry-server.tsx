//renders the HTML on the server side
import React from 'react'
import { renderToString } from "react-dom/server";

export const render = () => {

  //TODO: Static routing to fix hydration issues
  return renderToString(
    <React.StrictMode>
      {/* //TODO the line items should be flowbite tabs instead which shows the character details when clicked. */}
    </React.StrictMode>
)
};