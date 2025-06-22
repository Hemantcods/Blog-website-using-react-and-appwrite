import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './Appwrite/auth'
import{login,logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.GetCurrentUser()
    .then((userData)=>{
      if(userData){
      dispatch(login({UserData:userData}))
    }
    else{
      dispatch(logout())
    }
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
  if(loading){
    return <div>Loading...</div>
  }
  else{
    return(
      <>
      <div>Loaded</div>
      </>
    )
  }
}

export default App
