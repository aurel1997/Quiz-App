import { Grommet } from "grommet-icons";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { QuestionCard } from "./components/QuistionCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
