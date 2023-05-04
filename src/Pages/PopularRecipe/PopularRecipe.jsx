import React, { useContext, useState } from 'react';
import { RecipeContext } from '../../Layout/MainLayout';
import RecipeCard from './RecipeCard';
import { Row } from 'react-bootstrap';

const PopularRecipe = () => {
      const [foldPopular, seFoldPopular] = useState(true)
      const recipes = useContext(RecipeContext);
      let popularRecipe = recipes.filter(recipe => recipe.rating > 4.7)
      
      {
            foldPopular ?popularRecipe= popularRecipe.slice(0,3):popularRecipe
      }
      return (
            <div>
                   <div className='d-flex justify-content-end my-2'>
                              <button onClick={() => seFoldPopular(!foldPopular)} className=' border-0 btn btn-danger'>
                                    {foldPopular ? 'Show All' : 'Show Less'}
                              </button>
                        </div>
                  <Row xs={1} md={2} lg={3} className="g-4">

                        {
                              popularRecipe.map(recipe => <RecipeCard
                                    key={recipe.id}
                                    recipe={recipe}
                              />)
                        }
                  </Row>
            </div>
      );
};

export default PopularRecipe;