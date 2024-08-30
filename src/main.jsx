import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StepperProvider } from "./Contexts/StepperContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StepperProvider>
      <App />
    </StepperProvider>
  </StrictMode>
);
