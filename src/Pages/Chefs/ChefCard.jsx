import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../../Layout/MainLayout';

const ChefCard = ({ chef }) => {
      const recipes= useContext(RecipeContext)
      const { id, pictureUrl, chefName, yearsOfExperience, numRecipes, likes } = chef;

      // console.log(id);
      const noOfRecupe= recipes.filter(r=>r.chef_id == id);
      
      // console.log(noOfRecupe);

      return (
            <Col >
                  <Card >
                        <LazyLoad height={300} threshold={0.90}>
                              <Card.Img variant="top" style={{ height: '300px' }} src={pictureUrl} alt={chefName} />
                        </LazyLoad>
                        <Card.Body>
                              <Card.Title>{chefName}</Card.Title>
                              <div className=' d-flex flex-column gap-0'>
                                    <span>Experiece : {yearsOfExperience}</span>
                                    <span>No. of Recipes : {noOfRecupe.length}</span>
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