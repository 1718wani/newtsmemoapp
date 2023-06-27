import React from "react";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";

import App from "../src/App";
import "../src/input.css";
import { createRoot } from "react-dom/client";

if (typeof window === "object") {
  const container = document.getElementById("root");
  hydrateRoot(container!, <App />);
}
