import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import "../src/css/index.css"
import Task2 from './pages/Task2Content'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  },
  {
    path: 'task2',
    element: <Task2/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);