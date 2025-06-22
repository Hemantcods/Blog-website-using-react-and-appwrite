
import conf from "../Conf/Conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client()
    account;
    constructor(){
           this.client
                .setEndpoint(conf.appwriteUrl) // Your API Endpoint
                .setProject(conf.appwriteProjetID); // Your project ID
              this.account=new Account(this.client);
    }
    async createUser(email,password,name){
        try {
           const UserAccount=await this.account.create(
                ID.unique(), 
                email, 
                password,
                name               
            )
            if (UserAccount) {
                // call annother function
                this.Login({email,password})
            }
            else{
                return UserAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async Login({email,password}){
        try {
            return this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            throw error;
        }
    }

    async GetCurrentUser(){
        try {
            return this.account.get();
        } catch (error) {
            throw error;
            
        }
        return null;
    }    
    async Logout(){
        try {
            return this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}


const authService=new AuthService()
export default authService;


// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );