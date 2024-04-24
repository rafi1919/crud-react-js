import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/index.jsx';
import InputText from '../../Components/InputText/index.jsx';
import {userValidation, passwordValidation} from '../../Helper/validation.auth.js'
import { loginSuccess, loginFailed, logout } from "../../Domain/redux/auth/authSlice.js";

const LoginView = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = async(e)=> {
    e.preventDefault()

    console.log("Username:", username);
    console.log("Password:", password);
 

  try{
    await userValidation.validate({user: username}, {abortEarly: false});
    await passwordValidation.validate({password}, {abortEarly: false});


    const token = username
    localStorage.setItem('token', token)

    dispatch(loginSuccess ({token}));
    navigate('/crud')
  }

  catch (error) {
    if (error && error.inner) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    } else {
      console.error('Unexpected error occurred:', error);
      // Handle unexpected errors gracefully
    }
    dispatch(loginFailed(error?.message || 'An unexpected error occurred.'));
  }

  }
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center">
      <div className="mx-auto max-w-[400px] bg-white rounded-md p-5">
          <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
           <InputText placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)} />
           <InputText placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}  />
            <Button text='Login' type="submit"/>
          </form>
      </div>
    </div>
  );
};

export default LoginView;
