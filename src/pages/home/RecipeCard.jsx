import React from 'react'
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({data}) => {

  const navigate = useNavigate();
    console.log(data);
  return (
    <div className='row g-2 d-flex justify-content-center'>
        {data.map((item, index) =>{
            const{recipe} = item;
            return(
              <div key={index} className="col-sm-6 col-md-2 text-center d-flex justify-content-center">
        <div className="card" style={{width: "10rem"}}>
            <h5 style={{color:"#ea047e", height:"3rem"}} className="card-title">{recipe.label}</h5>
  <img src={recipe.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <button onClick={() => navigate(`details`, {state:item.recipe})} style={{backgroundColor:"#EA047E", color:"white"}} className="btn">View More</button>
  </div>
</div>
    </div>  
            )
        } )}
    
    </div>
    
  )
}

export default RecipeCard