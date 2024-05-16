import axios from 'axios'

export const getAllBlogPostsInfo = async () => {
    try {
        const apiUrl = import.meta.env.VITE_API_ROUTE_GET_ALL_BLOGPOSTS_INFO;
        const response = await axios.get(apiUrl);
        return response.data.data;

    } catch (error) {
        console.log("Error fetching all blog posts information")
        console.log(error)
    }
}