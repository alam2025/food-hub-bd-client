import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Col, Row } from 'react-bootstrap';
import ChefCard from '../Chefs/ChefCard';
import PopularRecipe from '../PopularRecipe/PopularRecipe';

const Home = () => {
      const chefs = useLoaderData()

     
      return (
            <div className=' container mt-5 mb-5'>
                  <h1 className='my-5 text-center'>Popular Chefs</h1>


                 
                  <Row xs={1} md={2} lg={3} className="g-4">

                        {chefs.map((chef) => <ChefCard
                        key={chef.id}
                        chef={chef}
                        />)}


                  </Row>


                  <div className='my-5'>
                        <h1 className=' text-center fw-bolder mb-5'>Most Popular Recipies</h1>

                        <PopularRecipe/>

                  </div>



            </div>
      );
};

export default Home;