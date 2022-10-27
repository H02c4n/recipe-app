import React from 'react'
import { Container } from './Details.styled';
import { useLocation } from 'react-router-dom'

const Details = () => {
  const {state:item} = useLocation();

  console.log(item);
  return (
    <Container className='row g-2 mt-4 text-center'>
      <div className="col-md-4 d-flex justify-content-center">
      <div className="card">
        <h3 className='card-header'>Ingredients
</h3>
        <ul className="list-group list-group-flush">
          {item.ingredientLines.map((ing,i) => {
            return(
              <li key={i} className="list-group-item">{ing}</li>
            )
          }) }
        </ul>
        </div>
        </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card">
          <img src={item.image} className="card-img-top" alt="..."/>
          <h3 className="card-header">{item.label}</h3>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <div className='bg-white p-4 border rounded'>
          <h3 className='card-header'>Health Labels</h3>
          {item.healthLabels.map((hl, i) =>{
            return(
              <span key={i} className='ms-1'>{hl}💢</span>
            )
          })  }
        
        </div>
      </div>
    </Container>
  )
}

export default Details