import React, { useState } from 'react'
import { Container } from './Login.styled'

const Login = ({isUser}) => {

const[register, setRegister] = useState(true);


const handleClick = (e) => {
  e.preventDefault();
  setRegister(!register);
}


  console.log(isUser);
  return (
    <Container>
            <div style={{opacity:.8}} className={register ? "col-md-4 offset-4 card card-primary p-3 border border-success border-3" : "col-md-4 offset-4 card card-primary p-3 border border-primary border-3"}>
                <h3 className={register ? "text-center text-success mb-3 mt-3": "text-center text-primary mb-3 mt-3"}>|| Haoz ||</h3>
                <hr/>
                <form>
                    <div className="form-group">
                        <label>Your e-mail address</label>
                        <input type="email" className="form-control"
                               placeholder="Enter your email address..."/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password..."/>
                    </div>
                    <div className="button-container d-flex  flex-column align-items-center">
                        <button type="submit" 
                                className={register ? "btn btn-success btn-block mb-2 mt-2" : "btn btn-primary btn-block mb-2 mt-2"}>
                                  {register ? "Register" : "Login"}
                        </button>
                        <a onClick={handleClick} href="#">{register ? "I have an account" : "Don't have an account?"}</a>
                    </div>
                </form>
                
            </div>
    </Container>
  )
}

export default Login