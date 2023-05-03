import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
      const { id,pictureUrl, chefName, yearsOfExperience, numRecipes, likes } = chef;
      
      return (
            <Col >
                  <Card >
                        <Card.Img variant="top" src={pictureUrl} alt={chefName} />
                        <Card.Body>
                              <Card.Title>{chefName}</Card.Title>
                              <div className=' d-flex flex-column gap-0'>
                                    <span>Experiece : {yearsOfExperience}</span>
                                    <span>No. of Recipes : {numRecipes}</span>
                                    <span>Likes : {likes}</span>
                              </div>
                        </Card.Body>
                        <Card.Footer className='px-0 pb-0   d-flex justify-content-center border-0 bg-transparent'>
                              <Link to={`/recipes/${id}`} className='w-100 text-center text-decoration-none text-white  py-2 border-0 rounded-bottom-2 btn-primary'>
                              View Recipes
                              </Link>
                              {/* */}
                        </Card.Footer>
                  </Card>
            </Col>
      );
};

export default ChefCard;