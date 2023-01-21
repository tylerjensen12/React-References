import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GlobalContextProvider } from "./store/GlobalContext";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
