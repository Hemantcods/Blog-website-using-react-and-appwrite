import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../Appwrite/auth' // Use the instance, not the class

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        try {
            await authService.Logout();
            dispatch(logout());
        } catch (error) {
            // Optionally handle error
            console.error('Logout failed:', error);
        }
    }
    return (
        <button
            className='bg-red-400 p-4 pl-7 pr-7 m-4 rounded-4xl'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn