
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Cook from './components/Cook/Cook';
import { useState } from 'react';


function App() {
const [obj,setObj] = useState({})
const [recipeArr,setRecipeArr] = useState([])    

 const CookHandler = (recipe)=>{
     
  const newRecipeArr = [...recipeArr,recipe]
    setRecipeArr(newRecipeArr)

  
 }
 
 
  return (
    <>
    
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='flex justify-between'>
      <Card CookHandler={CookHandler}></Card>
      <Cook recipeArr={recipeArr}></Cook>
    </div>
    </>
  )
}

export default App
