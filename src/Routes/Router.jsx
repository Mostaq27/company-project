import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Contact from "../Page/Contact/Contact";
import Blog from "../Page/Blog/Blog";
import About from "../Page/About/About";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path: '/',
           element: <Home/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path:"/about",
            element: <About/>
        }
      
      ]
    },
    
        
   
    // {
    //     path: '*',
    //     element: <NotFount></NotFount>
    // }
  ]);