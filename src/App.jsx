import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import Mainlayout from './components/Mainlayout';
import Notfound from './pages/Notfound';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout />,
    children:[
      {
        index:true,
        element:<Homepage />
      },
      {
        path: "/contact",
        element:<ContactPage />
      },
      {
        path: "/blog",
        element:<BlogPage />
      },
      {
        path: "/project",
        element:<ProjectPage />
      },
      {
        path: "*",
        element:<Notfound />

      },
    ]
  },
]);
const App = () => {
  return (
     <RouterProvider router={router} />
     
  )
}

export default App