import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Root from './Root/Root.jsx';
import Contact from './Pages/Contact.jsx';
import HOC from './Pages/HOC.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "hoc", Component: HOC },
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
