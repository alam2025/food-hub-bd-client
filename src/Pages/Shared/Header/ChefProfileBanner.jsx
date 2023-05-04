import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { AiFillLike } from "react-icons/ai";
import LazyLoad from 'react-lazy-load';

const ChefProfileBanner = ({ chef, chefRecipes }) => {


      return (
            <div>

                  {
                        chef && <>
                              <Card className="text-center md-w-70 lg-w-60 border-0 mx-auto sm-w-90">

                                    <Card.Body>
                                          <LazyLoad threshold={0.95}>
                                                <Card.Title> <img className=' w-25 rounded-circle' src={chef.pictureUrl} alt="" /></Card.Title>
                                          </LazyLoad>
                                          <Card.Title>{chef?.chefName} </Card.Title>
                                          <Card.Text>
                                                {chef?.bio}
                                          </Card.Text>
                                          <div className=' d-flex flex-column'>
                                                <span><AiFillLike /> {chef.likes}</span>
                                                <span>No. of Recipes : {chefRecipes.length}</span>
                                                <span> Experiences : {chef.yearsOfExperience} Years</span>

                                          </div>
                                    </Card.Body>

                              </Card>
                        </>
                  }


            </div>
      );
};

export default ChefProfileBanner;