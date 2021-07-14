import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadServer } from "jira-dev-tool";
import "antd/dist/antd.less";
import { AppProvider } from "context";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);
