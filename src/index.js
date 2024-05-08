import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ComputerProvider from "./Components/ComputerContext/ComputerContext";
import GameProvider from "./Components/GameContext/GameContext";
import KeyboardProvider from "./Components/KeyboardContext/KeyboardContext";
import MouseProvider from "./Components/MouseContext/MouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameProvider>
      <ComputerProvider>
        <KeyboardProvider>
          <MouseProvider>
            <Router>
              <App />
            </Router>
          </MouseProvider>
        </KeyboardProvider>
      </ComputerProvider>
    </GameProvider>
  </React.StrictMode>
);
