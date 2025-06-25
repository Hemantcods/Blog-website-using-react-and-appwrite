import React,{useEffect,useState} from 'react'
import {Container,PostForm} from '../Componets/Index'
import appwriteService from '../Appwrite/Config'
import { useNavigate, useParams } from 'react-router-dom'
function EditPostPage() {
    const [post, setPost] = useState(null)
    const {slug}=useParams()
    const navigate = useNavigate
    useEffect(()=>{
        console.log(slug)
        if (slug){
            appwriteService.getPost(slug).then(postData =>{
                if (postData) {
                    setPost(postData)
                }
            })
        }else{
            navigate('/404')
        }
    },[slug,navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm
                post={post}
                />
        </Container>
    </div>
  ): null
}

export default EditPostPage
