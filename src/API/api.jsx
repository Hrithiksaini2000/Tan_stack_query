import axios from "axios";

// Baseurl and axios is created 
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// To Fetch The data
export const fetchPosts = async () => {
    const res = await api.get("/posts")
    return res.status == 200 ? res.data : []
}