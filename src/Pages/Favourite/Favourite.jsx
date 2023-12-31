import React, { useContext, useEffect, useState } from 'react';
import NavigateBar from '../Shared/Header/NavigateBar';
import Footer from '../Shared/Footer';
import FavouriteCard from './FavouriteCard';
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Spinner } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Favourite = () => {
      // const { loading, setLoading } = useContext(AuthContext);
      const [cart, setCart] = useState([]);


      const recipes = useLoaderData()
      const savedRecipes = getShoppingCart()

      let favouriteRecipes = [];
      for (const id in savedRecipes) {
            const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id));
            if (foundRecipe) {
                  favouriteRecipes.push(foundRecipe);
                  // setCart(cart)
            }
      }






      const handleRemove = (id) => {
            const remainng = favouriteRecipes.filter(j => j.id !== id);
            setCart(remainng)
            removeFromDb(id);
      }


      return (
            <div style={{ minHeight: '100vh' }} className=' d-flex flex-column '>
                  <NavigateBar />

                  <center>
                        {
                              favouriteRecipes.length <= 0 ? <HashLink smooth to="/#chefs">
                                    <Button className='btn-primary md:w-[25%] mx-auto mt-20'>Choose Chefs</Button>
                              </HashLink> : ''
                        }
                  </center>

                  <div className='container d-flex flex-column gap-5 my-5'>
                        {
                              favouriteRecipes.map(recipe => <FavouriteCard
                                    key={recipe.id}
                                    recipe={recipe}

                                    handleRemove={handleRemove}
                              />)
                        }
                  </div>



                  <Footer />

            </div>
      );
};

export default Favourite;