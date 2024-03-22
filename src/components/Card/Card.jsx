import { useEffect, useState } from "react";
import Child1 from "../Child1/Child1";


const Card = ({CookHandler}) => {

    const [recipes,setRecipe] = useState([])
    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data=> setRecipe(data))

    },[])

    console.log(recipes);

    return (
        <div className="w-[730px] max-w-[100%] grid grid-cols-2  space-x-[5px]space-y-4 mt-4">
           
                  
                {recipes.map(recipe => <Child1  recipe={recipe} CookHandler={CookHandler} ></Child1>)}


        </div>
    );
};

export default Card;