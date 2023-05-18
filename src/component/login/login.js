import './login.css';
import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';

function Login() {
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nav = useNavigate();

    const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
        event.preventDefault();

        var {uname,pass} = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if(userData){
            if(userData.password !== pass.value){
                setErrorMessage({name:"pass",message:errors.pass})
            } else{
                setIsSubmitted(true);
            }
        } else{
            setErrorMessage({name:"uname", message:errors.uname})
        }

  };

  const renderErrorMessage = (name) => 
       name === errorMessage.name && (
       <div className="error">{errorMessage.message} </div>
  );

  const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container row">
                    <label> Username </label>
                    <input type="text" name="uname" required/>
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container row">
                    <label> Password </label>
                    <input type="password" name="pass" required/>
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
  )

  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title"> Sign In </div>
        {isSubmitted ? nav('/profiles') : renderForm}
      </div>
    </div>
  );
}

export default Login;