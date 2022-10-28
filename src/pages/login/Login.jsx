import React, { useState } from 'react'
import { Container } from './Login.styled'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import alertify from "alertifyjs";
const Login = ({isUser, changeUser}) => {

const[register, setRegister] = useState(false);
const[formData, setFormData] = useState({
  email:"",
  password:""
});
const[currentUser, setCurrentUser] = useState({});

const navigate = useNavigate();

useEffect(()=>{
  setCurrentUser(JSON.parse(localStorage.getItem("user")));
},[])

const handleClick = () => {
  setRegister(!register);
}

const handleChange = (e)=>{
  const{name, value} = e.target;
  setFormData(prevFormData => {
    return{
      ...prevFormData,
      [name]:value
    }
  })
} 

const handleSubmit = (e)=>{
  e.preventDefault();
  if (register) {
    localStorage.setItem("user", JSON.stringify(formData));
    alertify.success('Account is created');
    window.location.reload();
  }else if (!register) {
    if (formData.email === currentUser.email && formData.password === currentUser.password) {
       changeUser();
       navigate("/");
    }
  }
}

  //console.log(register, isUser, formData, currentUser);
  
  return (
    <Container>
            <div style={{opacity:.78}} className={register ? "col-md-3 card card-primary p-3 border colorfirst border-3" : "col-md-3 card card-primary p-3 border colorsecond border-3"}>
                <h3 className={register ? "text-center colorfirst mb-3 mt-3": "text-center colorsecond mb-3 mt-3"}>|| Recipe ||</h3>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your e-mail address</label>
                        <input type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                               placeholder="Enter your email address..."/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control" placeholder="Enter your password..."/>
                    </div>
                    <div className="button-container d-flex  flex-column align-items-center">
                        <button type="submit" 
                                className={register ? "btn bgcolorfirst btn-block mb-2 mt-2 text-white" : "btn bgcolorsecond btn-block mb-2 mt-2 text-white"}>
                                  {register ? "Register" : "Login"}
                        </button>
                        <Link onClick={handleClick} to="" refresh="true">{register ? "I have an account" : "Don't have an account?"}</Link>
                    </div>
                </form>
                
            </div>
    </Container>
  )
}

export default Login