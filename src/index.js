import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

// add favicon setup
import favicon from "./assets/ne-favicon.svg";
const setFavicon = (href) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = href;
};
setFavicon(favicon);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
