import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from "../../components/header/Header";
import { Container } from './Home.styled';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const Home = () => {

const[data, setData] = useState([]);


  useEffect(()=>{

    
  },[])

  console.log(data);

  const handleSubmit = (data, e)=>{
    e.preventDefault();
    const url = `https://api.edamam.com/search?q=${data.search}&app_id=9686df3b&app_key=b32e29841756a03f4bece2340692d627&mealType=${data.meal}`;
    axios(url).then(res => setData(res.data.hits));
  }


  return (
    <Container>
       <h2 className='h1 text-secondary'>EAT(M)EAT</h2>
       <Header handleSubmit={handleSubmit} />
       <RecipeCard data={data} />
    </Container>
  )
}

export default Home