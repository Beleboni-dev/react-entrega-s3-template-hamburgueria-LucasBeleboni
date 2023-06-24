import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
