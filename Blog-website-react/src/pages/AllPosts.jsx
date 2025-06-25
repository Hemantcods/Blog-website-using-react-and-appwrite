import React,{useState,useEffect} from 'react'
import {Container,PostCard} from '../Componets/Index'
import appwriteService from '../Appwrite/Config'
function AllPostsPage() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
      appwriteService.getAllPosts([]).then((response)=>setPosts(response.documents)).catch((err)=>console.log(err))}
      ,[])
    
  return (
    <div className='py-4 w-screen '>
      <Container>
        <div className='flex flex-wrap'>
        {
            posts.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))
                    }
                </div>
            ) : (
                <div className='text-center text-gray-500'>No posts available</div>
            )
        }</div>
      </Container>
    </div>
  )
}

export default AllPostsPage
