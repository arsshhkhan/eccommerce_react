import axios from "axios";
import { toast } from 'react-toastify';
const API_URL = import.meta.env.VITE_API_URL

export class userService{
    async getUser(){
       await axios.get(API_URL+'user',{})
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            toast.error(err.message);
            return;
        })
    }
}