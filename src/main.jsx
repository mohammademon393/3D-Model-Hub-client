import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import AllModels from './Pages/AllModels.jsx';
import BrowseModels from './Pages/BrowseModels.jsx';
import Profile from './Pages/Profile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allModels",
        Component: AllModels,
      },
      {
        path: "/browseModels",
        Component: BrowseModels,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
