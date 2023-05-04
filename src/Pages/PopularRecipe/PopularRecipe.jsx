import React, { useContext } from 'react';
import { RecipeContext } from '../../Layout/MainLayout';
import RecipeCard from './RecipeCard';
import { Row } from 'react-bootstrap';

const PopularRecipe = () => {
      const recipes= useContext(RecipeContext);
      const popularRecipe= recipes.filter(recipe=>recipe.rating > 4.7)
      // console.log(popularRecipe);
      return (
            <Row xs={1} md={2} lg={3} className="g-4">

                  {
                        popularRecipe.map(recipe=><RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        />)
                  }
            </Row>
      );
};

export default PopularRecipe;