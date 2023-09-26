import http from "./httpService.js"
import { toast } from "react-toastify";
// import dotenv from 'dotenv';
// dotenv.config();
const baseURL = 'http://localhost:5000/api';

export async function getAllContest(callback){
  try{
    const response=await http.get(`${baseURL}/contest`);
    callback(response.data.data);
    console.log(baseURL);
    console.log(10);
  }catch(err){
    console.log(err);
    toast.error("An unexpected error occured!!!");
  }
}