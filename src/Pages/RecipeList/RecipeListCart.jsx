import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeListCart = ({recipe}) => {
      const {image,recipe_name,id}=recipe;
      console.log(recipe);
      return (
            <div className=' text-center mx-2  '>
                  <img className='w-100 rounded-circle' src={image} alt="" />
                  <h5 className='text-center'>{recipe_name}</h5>
                  <Link to={`/popular-recipe/${id}`}><Button className='border-0'>View Details</Button></Link>
            </div>
      );
};

export default RecipeListCart;