import React from 'react';
import { Button } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const RecipeListCart = ({ recipe }) => {
      const { image, recipe_name, id } = recipe;
      // console.log(recipe);
      return (
            <div className=' text-center   '>
                  <LazyLoad height={200} threshold={0.90}>
                        <img className='w-100 rounded-circle' src={image} alt="" />
                  </LazyLoad>
                  <h5 className='text-center mt-4'>{recipe_name}</h5>
                  <Link to={`/popular-recipe/${id}`}><Button className='border-0'>View Details</Button></Link>
            </div>
      );
};

export default RecipeListCart;