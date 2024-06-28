import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service{
    client = new Client();

    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Error:: createPost :: ", error)
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite Error:: updatePost :: ", error)
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
            );
            return true;
        } catch (error) {
            console.log("Appwrite Error:: deletePost :: ", error);
            return false
        }
    }

    async getPost(slug){
        try {
             return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
            );
            return true;
        } catch (error) {
            console.log("Appwrite Error:: getPost :: ", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                queries,
            );
            return true;
        } catch (error) {
            console.log("Appwrite Error:: getPosts :: ", error);
            return false
        }
    }

    //File Uploading Methods
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite Error:: uploadFile :: ", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true;        

        } catch (error) {
            console.log("Appwrite Error:: deleteFile :: ", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}



const service = new Service()
export default service;