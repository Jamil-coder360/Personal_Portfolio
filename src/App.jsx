import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import Mainlayout from './components/Mainlayout';
import Notfound from './pages/Notfound';

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