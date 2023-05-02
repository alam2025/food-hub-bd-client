import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Col, Row } from 'react-bootstrap';
import ChefCard from '../Chefs/ChefCard';

const Home = () => {
      const chefs = useLoaderData()

      console.log(chefs);
      return (
            <div className=' container mt-5'>
                  <h1 className='my-5'>Popular Chefs</h1>


                 
                  <Row xs={1} md={2} lg={3} className="g-4">

                        {chefs.map((chef) => <ChefCard
                        key={chef.id}
                        chef={chef}
                        />)}


                  </Row>



            </div>
      );
};

export default Home;