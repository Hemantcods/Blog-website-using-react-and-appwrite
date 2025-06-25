const conf={
    appwriteUrl:String(import.meta.env.VITE_REACT_APP_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID:String(import.meta.env.VITE_APPWRITW_BUCKET_ID),
    TinyMCE_API_KEY:String(import.meta.env.VITE_REACT_APP_TINYMCE_API_KEY),
}



export default conf