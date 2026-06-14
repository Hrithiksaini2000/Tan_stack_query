import axios from "axios";

// Baseurl and axios is created 
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// To Fetch The data
export const fetchPosts = async (pagenumber) => {
    const res = await api.get(`/posts?_start=${pagenumber}&_limit=3`)
    return res.status == 200 ? res.data : []
}

// To Fetch The individual data 

export const fetchinvpost = async (id) =>{
    try {
        const res = await api.get(`/posts/${id}`)
        return res.status == 200 ? res.data : []
    } catch (error) {
        console.log(error)
    }
}