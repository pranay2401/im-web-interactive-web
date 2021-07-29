import React from "react";
import ReactDOM from "react-dom";

// Sentry Error Logging
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import dotenv from "dotenv";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

dotenv.config();

// Sentry Logging Initialization
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.REACT_APP_NODE_ENV,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
