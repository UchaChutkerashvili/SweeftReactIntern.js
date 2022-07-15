import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import InfiniteScrollContextProvider from "./store/infiniteScroll-Context";

ReactDOM.render(
  <React.StrictMode>
    <InfiniteScrollContextProvider>
      <App />
    </InfiniteScrollContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
