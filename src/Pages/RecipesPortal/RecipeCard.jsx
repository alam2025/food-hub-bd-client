import React, { useState } from 'react';
import { Button, Card, Toast } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';


const RecipeCard = ({ recipe }) => {
      const [showToast, setShowToast] = useState(false);
      const [isDisabled, setIsDisabled] = useState(false);

      console.log(recipe);
      const { recipe_name, ingredients, cooking_method, rating, id } = recipe;

      const handleClick = () => {
           toast.success('This recipe is now one of your favorites!')
            setIsDisabled(true);
      }
      return (
            <Card className='mt-4'>
                  <Card.Header as="h5">{recipe_name}</Card.Header>
                  <Card.Body>
                        <div>
                              <h4>Ingredients</h4>
                              <ul className=' ms-5'>

                                    {ingredients?.map((i, index) => <li key={index}>{i}</li>)}
                              </ul>
                        </div>
                        <div>
                              <h4>Cooking Method</h4>
                              <p>{cooking_method}</p>
                        </div>

                        <div>
                              <Rating
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className=' text-warning ' />}
                                    fullSymbol={<FaStar />}
                              />
                        </div>


                        <Button
                              className='btn-primary border-0'
                              onClick={handleClick}
                              disabled={isDisabled}
                        >
                              Favorite button
                        </Button>

                        
                  </Card.Body>
                  <Toaster />

            </Card>
      );
};

export default RecipeCard;