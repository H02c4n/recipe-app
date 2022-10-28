import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from "../../components/header/Header";
import { Container } from './Home.styled';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import svg from "../../assets/images/meal2.svg"

const Home = () => {
const[data, setData] = useState([]);


  useEffect(()=>{

    
  },[])

  //console.log(data);
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiId = process.env.REACT_APP_API_ID;

    console.log(apiKey, apiId)
  const handleSubmit = (data, e)=>{
    e.preventDefault();
    
    const url = `https://api.edamam.com/search?q=${data.search}&app_id=${apiId}&app_key=${apiKey}&mealType=${data.meal}`;
    try {
      axios(url).then(res => setData(res.data.hits));
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
    
  }


  return (
    <Container>
      <img src={svg} alt="" width="200px" />
       {/* <h2 className='h1 text-secondary'>EAT(M)EAT</h2> */}
       <Header handleSubmit={handleSubmit} />
       <RecipeCard data={data} />
    </Container>
  )
}

export default Home