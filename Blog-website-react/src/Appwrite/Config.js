import { use } from "react";
import conf from "../Conf/Conf";
import { Client, ID,Databases,Storage,Query, Query } from "appwrite";


export class DBService{
    Client=new Client();
    database;
    bucket; 
    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectID); // Your project ID
        this.database=new Databases(this.Client);
        this.bucket=new Storage(this.Client); 
    }

    async CreatePost({title,slug,content,featuredImage,Status,UserId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseID, // Database ID
                conf.appwriteCollectionID, // Collection ID
                slug, // Document ID
                {
                    title,
                    content,
                    featuredImage,
                    Status,
                    UserId
                }

            )
        } catch (error) {
            throw error;
        }
    }
    async UpdatePost(slug,{title,content,featuredImage,Status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseID, // Database ID
                conf.appwriteCollectionID, // Collection ID
                slug, // Document ID
                {
                    title,
                    content,
                    featuredImage,
                    Status
                }

            )
        } catch (error) {
            throw error;
        }
    }

    async DeletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseID, // Database ID
                conf.appwriteCollectionID, // Collection ID
                slug // Document ID
            )
            return true;
        } catch (error) {
            throw error;
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseID, // Database ID
                conf.appwriteCollectionID, // Collection ID
                slug // Document ID
            )
        } catch (error) {
            throw error;
        }
    }


    async getAllPosts(querries=[Query.equal('Status','active')]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseID, // Database ID
                conf.appwriteCollectionID, // Collection ID
                querries // Query array
            )
        } catch (error) {
            throw error;
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID, // Bucket ID
                ID.unique(), // File ID
                file // File object
            )
        } catch (error) {
            throw error;
            return false
        }
    }
    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID, // Bucket ID
                fileID // File ID
                
            )
            return true;
        } catch (error) {
            throw error;
            return false;
            
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID, // Bucket ID
            fileID // File ID
        )
    }
}

const DBservice=new DBService();
export default DBservice