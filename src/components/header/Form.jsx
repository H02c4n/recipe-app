import React from 'react'
import { useState } from 'react';

const Form = ({handleSubmit}) => {

  const[formData, setFormData] = useState({
    search:"",
    meal:""
  });


  const handleChange = (e)=>{
    const{name, value} = e.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]:value
      }
    })
  }

  //console.log(formData);

  return (
    <form onSubmit={e => handleSubmit(formData, e)}>
      <div className='input-group'>
      <input className='form-control' type="text" name='search' value={formData.search} onChange={handleChange} />
      <button className='btn btn-md btn-success'>Search</button>
      <select name="meal" className='form-control' value={formData.meal} onChange={handleChange}>
        <option selected>--Choose--</option>
        <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="lunch">Lunch</option>
        <option value="snack">Snack</option>
        <option value="teetime">Teetime</option>
        
      </select>
      </div>
    </form>
  )
}

export default Form