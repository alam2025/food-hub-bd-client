import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Col, Row } from 'react-bootstrap';
import ChefCard from '../Chefs/ChefCard';
import PopularRecipe from '../PopularRecipe/PopularRecipe';
import { RecipeContext } from '../../Layout/MainLayout';
import RecipeListCart from '../RecipeList/RecipeListCart';
import LazyLoad from 'react-lazy-load';

const Home = () => {
      const [fold, setFold] = useState(true)
      const [foldChef, seFoldChef] = useState(true)
      // const [foldPopular, seFoldPopular] = useState(true)
      let chefs = useLoaderData()

      let recipies = useContext(RecipeContext)
      {
            fold ? recipies = recipies.slice(0, 4) : recipies;
            // recipies=recipies.slice(0,4)
      }
      {
            foldChef ? chefs = chefs.slice(0, 3) : chefs
      }



      return (
            <div className=' container mt-5 mb-5'>

                  {/* ...........List of Recipies.......... */}
                  <div>
                        <h1 className='my-5 text-center'>List Of Recipes</h1>
                        <div className='d-flex justify-content-end '>
                              <button onClick={() => setFold(!fold)} className=' border-0 btn btn-danger'>
                                    {fold ? 'Show All' : 'Show less '}
                              </button>

                        </div>

                        <Row xs={2} md={4} lg={8} className="g-4">
                              {recipies.map(recipe => <RecipeListCart
                                    key={recipe.id}
                                    recipe={recipe}
                              />)}
                        </Row>


                  </div>

                  <div id='chefs'>

                        <h1 className='my-5 text-center'>Popular Chefs</h1>
                        <div className='d-flex justify-content-end my-2'>
                              <button onClick={() => seFoldChef(!foldChef)} className=' border-0 btn btn-danger'>
                                    {foldChef ? 'Show All' : 'Show Less'}
                              </button>
                        </div>
                        <Row xs={1} md={2} lg={3} className="g-4">

                              {chefs.map((chef) => <ChefCard
                                    key={chef.id}
                                    chef={chef}
                                    
                              />)}

                        </Row>

                  </div>


                  <div className='my-5'>
                        <h1 className=' text-center fw-bolder mb-5'>Most Popular Recipies</h1>
                        <PopularRecipe />

                  </div>



            </div>
      );
};

export default Home;