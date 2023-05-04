import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
      // console.log(recipe);
      const { recipe_name,image,cooking_method,  rating, id } = recipe;
      // console.log(id);
      return (
            <Col>
                  <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                              <Card.Title>{recipe_name}</Card.Title>
                              <Card.Text>
                                    {cooking_method.slice(0,100) }...
                                    <Link to={`/popular-recipe/${id}`} className=' text-danger'>Read More</Link>
                              </Card.Text>
                        </Card.Body>
                  </Card>
            </Col>
      );
};

export default RecipeCard;