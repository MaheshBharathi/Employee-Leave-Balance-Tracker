import React from 'react'
import {useAuth} from './Auth'
import {useNavigate}from 'react-router-dom'
function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
    auth.logout()
    navigate('/login')
    }
  return (
    <div>
        Profile Page<br></br>
        <h1>Welcome{auth.user}</h1>
        <button onClick={handleLogout}>Logout</button>

    </div>
  )
}
export default Profile