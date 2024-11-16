import React from 'react'
import { userService } from '../services/userService'


const userservice = new userService()

function Profile() {

  const getuserdata =async()=>{
    const response = await userservice.getUser()
    console.log(response)
  }
  return (
<>
<div>Profile</div>
<button onClick={()=>getuserdata()}>Get user data</button>
</>

    )
}

export default Profile
