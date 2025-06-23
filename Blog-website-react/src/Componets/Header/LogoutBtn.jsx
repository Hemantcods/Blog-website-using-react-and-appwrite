import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { AuthService } from '../../Appwrite/auth'
function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler=async()=>{
        AuthService.Logout().
        then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='bg-blue-400 p-4 pl-7 pr-7 m-4 rounded-4xl'>Logout</button>
  )
}

export default LogoutBtn
