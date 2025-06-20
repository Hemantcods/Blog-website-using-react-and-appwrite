import { use } from "react";
import conf from "../Conf/Conf";
import { Client, ID,Databases,Storage,Query } from "appwrite";


export class DBService{
    Client=new Client();
    database;
    bucket; 
    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjetID); // Your project ID
        this.database=new Databases(this.Client);
        this.bucket=new Storage(this.Client);
    }
}

const DBservice=new DBService();
export default DBservice