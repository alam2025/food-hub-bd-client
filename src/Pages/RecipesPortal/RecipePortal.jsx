import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefProfileBanner from '../Shared/Header/ChefProfileBanner';
import RecipeCard from './RecipeCard';

const RecipePortal = () => {
      
      const [chef, setChef] = useState('');
      const { id } = useParams()
      const chefRecipes = useLoaderData()
      

   
      // chef data load 
      useEffect(() => { 
            
            fetch(`https://food-hub-server-alam2025.vercel.app/chefs/${id}`)
            .then(res=>res.json())
            .then(data=>setChef(data))
            
      }, [])

      
      return (
            <div className='container'>
                  {(chef && chef!=='') && <ChefProfileBanner 
                  key={chef.id} 
                  chef={chef} 
                  chefRecipes={chefRecipes}
                  /> }

                  <div className=''>
                        {chefRecipes.map(recipe=><RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        />)}
                  </div>


            </div>
      );
};

export default RecipePortal;