import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router basename={process.env.PUBLIC_URL}>
//     <App />
//   </Router>
// );


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>);