import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalProvider from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
