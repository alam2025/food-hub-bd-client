import React from 'react';
import { Button } from 'react-bootstrap';

const FavouriteCard = ({recipe,chefs, handleRemove}) => {
      
      const {image,recipe_name,id}=recipe;
      // console.log(chefs);
      return (
            <div className='border p-2 rounded d-flex justify-content-between align-items-center'>
                  <div className=' d-flex justify-content-start align-items-center gap-3'>
                        <img className='rounded' style={{width:'200px'}} src={image} alt={recipe_name} />
                        <h5>{recipe_name}</h5>
                  </div>
                  <div>
                        <Button onClick={()=>handleRemove(id)}>Remove</Button>
                  </div>
            </div>
      );
};

export default FavouriteCard;