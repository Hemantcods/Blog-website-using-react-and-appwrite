import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout } from './Componets/Index.js'
import LoginPage from './pages/Login.jsx'
import SignUppage from './pages/SignUp.jsx'
import PostPage from './pages/Post.jsx'
import AddPostPage from './pages/AddPost.jsx'
import EditPostPage from './pages/EditPost.jsx'
import AllPostsPage from './pages/AllPosts.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <LoginPage/>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <SignUppage/>
          </AuthLayout>
        )
      },
      {
        path:'/post',
        element:(
          <AuthLayout authentication={true}>
            <PostPage/>
          </AuthLayout>
        )
      },
      {
        path:'/addPost',
        element:(
          <AuthLayout authentication>
            <AddPostPage/>
          </AuthLayout>
        )
      },
      {
        path:'/editPost/:slug',
        element:(
          <AuthLayout authentication>
            <EditPostPage/>
          </AuthLayout>
        )
      },
      {
        path:'/allPosts',
        element:(
          <AuthLayout>
            <AllPostsPage/>
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
