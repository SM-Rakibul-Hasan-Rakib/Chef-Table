import { list } from 'postcss';
import React from 'react';

const Child1 = ({recipe,CookHandler}) => {
    const {id,recipe_image, ingredients,recipe_name,short_description,preparing_time,calories} = recipe || {}
    return (
        <div className='w-[350px] max-w-[350px] border-2 border-gray-300 bg-white h-[715px] max-h-[865px] mb-3 rounded-lg p-5 '>
            <img src={recipe_image} className='rounded-lg mb-[10px]' alt="" />
            <div className=' text-left text-[20px] font-semibold'>
            <h1 className='mb-[20px]'>{recipe_name}</h1>
            <p className='text-[14px] text-gray-800 font-light'>{short_description}</p>
            <div className='border border-gray-200 mt-[15px] '></div>

            </div>
            <div className=' text-left'>
                  <p className='font-semibold mt-2'>Ingredient : {ingredients.length}</p>
                  {ingredients.map(ingredient =><ul><li className='list-disc ml-6 text-gray-500'>{ingredient}</li></ul> )}  
            </div>
            <div className='border border-gray-200 mb-[10px] mt-3'></div>
            <div className='flex justify-between'>
                <div className='text-left flex items-center space-x-2'>
                <i class="fa-regular fa-clock"></i>
                <p>{preparing_time}miniutes</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p>{calories}</p>  
                    <i class="fa-solid fa-fire"></i>

                </div>
                
            </div>
           <div className='flex justify-start mt-3'> <button onClick={()=>CookHandler(recipe)} className='btn bg-green-400 text-left hover:bg-green-400'> Want To Cook</button></div>
        </div>
    );
};

export default Child1;