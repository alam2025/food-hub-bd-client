import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Toaster, toast } from 'react-hot-toast';

const RecipeDetails = () => {
      const [showToast, setShowToast] = useState(false);
      const [isDisabled, setIsDisabled] = useState(false);
      const recipe = useLoaderData()
      const { recipe_name, image, ingredients, cooking_method, rating } = recipe




      // console.log(recipe);
      // const { recipe_name, ingredients, cooking_method, rating, id } = recipe;

      const handleClick = () => {
            toast.success('This recipe is now one of your favorites!')
            setIsDisabled(true);
      }
      return (
            <div className='container'>
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

                              <div className='d-flex justify-centent-center align-items-center gap-2'>
                                    <Rating
                                          placeholderRating={rating}
                                          readonly
                                          emptySymbol={<FaRegStar />}
                                          placeholderSymbol={<FaStar className=' text-warning ' />}
                                          fullSymbol={<FaStar />}
                                    /> <span className=' fs-4 fw-bold'>{rating}</span>
                              </div>


                              <Button
                                    className='btn-primary border-0'
                                    onClick={handleClick}
                                    disabled={isDisabled}
                              >
                                    Favorite button
                              </Button>

                              <Link to='/'>
                                    <Button className='btn-primary border-0' >
                                          Go to Home
                                    </Button>
                              </Link>


                        </Card.Body>
                        <Toaster />

                  </Card>
            </div>
      );
};

export default RecipeDetails;