import { hydrateRoot } from "react-dom/client";

import App from "../src/App";
import "../index.css";

if (typeof window === "object") {
  const container = document.getElementById("root");
  hydrateRoot(container!, <App />);
}
