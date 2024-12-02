import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import History from "./pages/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/history", element: <History/>}
    ],
  },
]);

export const theme = createTheme({
  palette:{
    primary:{
      main: '#D7C7F4',
      light:'#fff',
      text:'rgba(0,0,0,0.5)'
    }
  },
  typography: {
    h1: {
      fontFamily: "Ubuntu, serif",
      color: "#9785BA",
      fontSize: 28,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Ubuntu, serif",
      fontSize: 28,
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 22,
      },
    },
    heading: {
      fontFamily: "Ubuntu, sans-serif",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
