//hydrates the server html on the client

import ReactDom from 'react-dom/client';
import App from './App';
import "./index.css";

//@ts-expect-error not completely sure tbh, must learn more
ReactDom.hydrateRoot(document.getElementById("root"), <App />);

