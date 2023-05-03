import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import RecipeLayout from "../Layout/RecipeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RecipePortal from "../Pages/RecipesPortal/RecipePortal";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Login/Register";




const router = createBrowserRouter([

      {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            loader: () => fetch('http://localhost:3000/recipes'),

            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch('http://localhost:3000/chefs')
                  },
            ]
      },
      {
            path: 'recipes',
            element: <RecipeLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: ':id',
                        element: <RecipePortal />,
                        loader: ({ params }) => fetch(`http://localhost:3000/chef/${params.id}`)
                  }

            ]
      },
     {
      path:'login',
      element: <Login/>
     },
     {
      path: 'register',
      element: <Register/>
     }
      //      {
      //       path:'login',
      //       element: <LoginLayout/>,
      //       children:[
      //             {
      //                   path:'/',
      //                   element: <Login/>
      //             }
      //       ]
      //      }
])


export default router