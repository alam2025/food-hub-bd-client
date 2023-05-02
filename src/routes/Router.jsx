import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";

const router= createBrowserRouter([
      {
            path:'/',
            element:<MainLayout/>,
            
            children:[
                  {
                        path:'/',
                        element: <Home/>,
                        loader:()=>fetch('http://localhost:3000/chefs')
                  },
                  {
                        path: 'blog',
                        element:<Blog/>
                  }
            ]
      }
])


export default router