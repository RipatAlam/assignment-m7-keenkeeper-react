import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import CardProvider from "./context/CardContext.jsx";
import { ToastContainer } from "react-toastify";
import { router } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CardProvider>
  </StrictMode>,
);
