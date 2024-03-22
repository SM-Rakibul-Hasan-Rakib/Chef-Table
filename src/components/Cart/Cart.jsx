import React from 'react';

const Cart = ({recipeobj}) => {
console.log(recipeobj.recipe_id);
const {recipe_name,preparing_time,calories} = recipeobj || {}


    return (
        <div>
            <div>
                
            
                   
                    <div className=' bg-gray-200 mt-4 py-4 px-2 flex justify-around items-center space-x-3'>
                        <p className='inline-block'>0</p>
                        <div><p className='text-[15px] w-[100px]'>{recipe_name}  </p></div>
                        <div><p >{preparing_time} <br /> Minitue</p></div>
                        <div><p >{calories} <br />Calories</p></div>
                        <button className='btn bg-green-500 border-none rounded-full'>Preparing</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;