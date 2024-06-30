import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/view/screens/App.tsx";
import "@/view/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
