import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme accentColor="indigo" grayColor="sand">
      <App />
      {/* <ThemePanel/> */}
    </Theme>
  </StrictMode>
);
