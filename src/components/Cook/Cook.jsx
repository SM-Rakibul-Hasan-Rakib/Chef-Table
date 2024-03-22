import React from 'react';
import Cart from '../Cart/Cart';

const Cook = ({recipeArr,serial}) => {
    console.log(recipeArr);
    return (
        <div className='mt-4 border rounded-lg py-3'>
                    <h2 className='mt-6 inline-block font-bold text-2xl'>Want To Cook :{recipeArr.length} </h2>
                    <div className='flex justify-around mt-4  w-[400px] max-w-[200px]]'>
                            <p>Name</p>
                            <p>Time</p>
                            <p>Calories</p>
                    </div>

            <div className=' w-[510px] max-w-[485px] h-[685px] max-h-[685px]'>
                {recipeArr.map(recipeobj => <Cart recipeobj ={recipeobj} key={recipeobj.recipe_id}></Cart> )}
              
            </div>
            
        </div>
    );
};

export default Cook;