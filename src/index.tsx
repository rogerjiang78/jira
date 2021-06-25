import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DevTools, loadServer } from "jira-dev-tool";
import "antd/dist/antd.less";
import { AppProvider } from "context";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <DevTools />
        <App />
      </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);
