import React,{use, useCallback} from 'react'
import {useForm} from 'react-hook-form'
import { Button,Input,RTE } from '../Componets/Index'
import {DBservice as appwriteServices} from '../Appwrite/Config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Postform(Post) {
    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({defaultValues:{
        title:Post ? Post.title : "",
        slug:Post ? Post.slug : "",
        content:Post ? Post.content : "",
        featuredImage:Post ? Post.featuredImage : "",
        Status:Post ? Post.Status : "active"
    },})
    const navigate=useNavigate()
    const Userdata=useSelector((state)=>state.UserData)

    const submit=async(data)=>{
        if(Post){
            const file=data.featuredImage[0]? appwriteServices.uploadFile(data.featuredImage[0]) : null;
            if(file){
                appwriteServices.deleteFile(Post.featuredImage)
            }
            const DBpost=await appwriteServices.UpdatePost(Post.$id,{
                ...data,
                featuredImage:file ? file.$id : undefined

            })
            if(DBpost){
                navigate(`/post/${DBpost.slug}`)
            }
        } //this will done if the post is already present
        else{
            const file=await appwriteServices.uploadFile(data.featuredImage[0])
            const DBpost=await appwriteServices.CreatePost({
                ...data,
                userID:Userdata.$id,
                featuredImage:file.$id,
        })
            if(DBpost){
                navigate(`/post/${DBpost.slug}`)
            }
        } //this will done if the post is not present
    }

    const SlugTransform=useCallback((value)=>{
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g,'-')
        }
        return ""
    })

    React.useEffect(()=>{
        const Subscription=watch((value,{name})=>{
            if(name === "title"){
                setValue("slug",SlugTransform(value.title,
                    {shouldValidate:true}
                ))
            }
        })


        return ()=>{
            Subscription.unsubscribe()
        }
    },[watch, SlugTransform,setValue])
  return (
     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !Post })}
                />
                {Post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteServices.getFilePreview(post.featuredImage)}
                            alt={Post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={Post ? "bg-green-500" : undefined} className="w-full">
                    {Post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}
    

export default Postform
