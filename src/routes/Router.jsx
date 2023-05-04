import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import RecipeLayout from "../Layout/RecipeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RecipePortal from "../Pages/RecipesPortal/RecipePortal";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Login/Register";
import RecipeDetails from "../Pages/PopularRecipe/RecipeDetails";
import PopularRecipe from "../Pages/PopularRecipe/PopularRecipe";
import PopularRecipeLayput from "../Layout/PopularRecipeLayput";
import PrivateRouter from "./PrivateRouter";




const router = createBrowserRouter([

      {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            loader: () => fetch('https://food-hub-server-alam2025.vercel.app/recipes'),

            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch('https://food-hub-server-alam2025.vercel.app/chefs')
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
                        element: <PrivateRouter><RecipePortal /></PrivateRouter>,
                        loader: ({ params }) => fetch(`https://food-hub-server-alam2025.vercel.app/chef/${params.id}`)
                  }
            ]
      },
      {
            path:'popular-recipe',
            element: <PopularRecipeLayput/>,
            errorElement: <ErrorPage/>,
            children:[
                  {
                        path:':id',
                        element: <PrivateRouter><RecipeDetails/></PrivateRouter>,
                        loader:({params})=>fetch(`https://food-hub-server-alam2025.vercel.app/popular-recipe/${params.id}`)
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
     },
     {
      path:'blog',
      element:<Blog/>,
     }
     
])


export default router