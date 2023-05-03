import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { AiFillLike } from "react-icons/ai";

const ChefProfileBanner = ({ chef,chefRecipes }) => {

      
      return (
            <div>

                  {
                        chef && <>
                              <Card className="text-center md-w-70 lg-w-60 border-0 mx-auto sm-w-90">

                                    <Card.Body>
                                          <Card.Title> <img className=' w-25 rounded-circle' src={chef.pictureUrl} alt="" /></Card.Title>
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