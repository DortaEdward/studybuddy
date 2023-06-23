import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Sidebar from "./components/Sidebar.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App/>} path="/" />
      </Routes>
    </Router>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
