import "./styles/index.css";
import "./styles/App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
