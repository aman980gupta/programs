import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const themeColor = useSelector(state=>state.theme.value)
  const user = useSelector(state=>state.user.value)
  return (
    <div style={{color : themeColor}}>
      <h2>this is profile page</h2>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
    </div>
  )
}

export default Profile
