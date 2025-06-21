import { useState,useEffect } from 'react'
import { useDispach } from 'react-redux'
import './App.css'
import authService from './services/authService'
import{login,logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispach()
  useEffect(()=>{
    authService.GetCurrentUser()
    .then((userData)=>{
      if(userData){
      dispatch(login({UserData:userData}))
    }
    })
  },[])
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
