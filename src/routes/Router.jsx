import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import RecipeLayout from "../Layout/RecipeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RecipePortal from "../Pages/RecipesPortal/RecipePortal";


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
                  {
                        path: 'blog',
                        element: <Blog />
                  }
            ]
      },
      {
            path: 'recipes',
            element: <RecipeLayout />,
            errorElement:<ErrorPage/>,
            children:[
                  {
                        path:':id',
                        element: <RecipePortal/>,
                        loader:({params})=>fetch(`http://localhost:3000/chef/${params.id}`)
                  }

            ]
      }
])


export default router