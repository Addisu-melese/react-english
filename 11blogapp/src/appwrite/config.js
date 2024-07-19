import conf from '../conf/conf'
import { Client, Databases,Storage,Query,ID } from "appwrite";

export class Service{
    client=new Client()
    database;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    async getPost(slug){
        try {
          return await  this.database.getDocument(conf.appwriteDatabaseId,conf.appwriteCollactionId,slug)

        } catch (error) {
            console.log("Appwrite service :: getPost()::",error)
            return false
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
         return await this.databases.ListDocuments(conf.appwriteDatabaseId,conf.appwriteCollactionId,queries)
  
          } catch (error) {
              console.log("Appwrite service :: getPosts()::",error)
              return false
          }
    }
    async createPost({title,slug, content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollactionId,slug,
                {title,content,featuredImage,status,userId}
            )
     
             } catch (error) {
                 console.log("Appwrite service :: createPost()::",error)
                 return false
             }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollactionId,slug,
                {
                    title,content,featuredImage,status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost()::",error)
            return false
        }
    }
    
    async deletePost(slug){
        try {
            
             await this.database.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollactionId,slug)
             return true

        } catch (error) {
            console.log("Appwrite service :: deletePost()::",error)
            return false
        }
    }
    //fiel service
    async uploadFile(file){
        try {
            
           return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file               
            )

       } catch (error) {
           console.log("Appwrite service :: uploadFile()::",error)
           return false
       }
    }
    async deleteFile(fileId){
        try {
            
           return await this.bucket.deleteFile(conf.appwriteBucketId,fileId)

       } catch (error) {
           console.log("Appwrite service :: deleteFile()::",error)
           return false
       }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId).href
    }
}
const service=new Service();
export default service;