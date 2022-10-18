import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logOut } from '../redux1/user'

const Login = () => {
  const handleClick = ()=>{dispatch(login({name:"aman",age:20,email:"aman980gupta@gmail.com"}))}
  const handleClickOut = () => dispatch(logOut())
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={handleClick}>Log in</button>
      <button onClick={handleClickOut}>Log out</button>
    </div>
  )
}

export default Login
