import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
      console.log(recipe);
      const { recipe_name, ingredients, cooking_method, rating } = recipe;
      return (
            <Card className='mt-4'>
                  <Card.Header as="h5">{recipe_name}</Card.Header>
                  <Card.Body>
                        <div>
                              <h4>Ingredients</h4>
                              <ul className=' ms-5'>

                                    {ingredients?.map((i,index) => <li key={index}>{i}</li>)}
                              </ul>
                        </div>
                        <div>
                              <h4>Cooking Method</h4>
                              <p>{cooking_method}</p>
                        </div>

                        <Rating
                              placeholderRating={3.5}
                              emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
                              placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                              fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                        />


                        <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
            </Card>
      );
};

export default RecipeCard;