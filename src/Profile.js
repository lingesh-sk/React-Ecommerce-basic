import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
const userInfo = useSelector(state=>state.user.value)
  return (
    <div>

        <h1>Profile info</h1>
        <h3>Name: {userInfo.name} </h3>
        <h3>Age: {userInfo.age}</h3>
        <h3>Email:{userInfo.email} </h3>
    </div>
  )
}

export default Profile