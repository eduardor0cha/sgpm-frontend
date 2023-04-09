import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import { ToastsContainer } from "./components/Toast";
import { ToastProvider } from "./contexts";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { ResourcesProvider } from "./contexts/ResourcesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResourcesProvider>
        <ThemeProvider>
          <ToastProvider>
            <AuthProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </AuthProvider>
            <ToastsContainer />
          </ToastProvider>
        </ThemeProvider>
      </ResourcesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
