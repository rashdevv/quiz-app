import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./index.css";

// Components
import App  from "./components/App";

// AppProvider
import AppProvider from "./utils/AppProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
