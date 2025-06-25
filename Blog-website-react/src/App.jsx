import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './Appwrite/auth'
import{login,logout} from './store/authSlice'
import Footer from './Componets/Footer/Footer'
import EditPostPage from './pages/EditPost'

import { Header } from './Componets/Index'
import { Outlet } from 'react-router-dom'

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
    return( 
      <>
    <div>Loading...</div>
    {/* <Footer /> */}
    </>)
    
  }
  else{
    return(
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App
