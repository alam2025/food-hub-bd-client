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
            path:'popular-recipe',
            element: <PopularRecipeLayput/>,
            errorElement: <ErrorPage/>,
            children:[
                  {
                        path:':id',
                        element: <RecipeDetails/>,
                        loader:({params})=>fetch(`http://localhost:3000/popular-recipe/${params.id}`)
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
     
])


export default router