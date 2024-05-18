import { title } from '@uiw/react-md-editor';
import axios from 'axios'
import { BlogPostFieldNames } from '../../../../server/models/blogPostModel';

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

export const getBlogPostById = async (id) => {

    try {
        const apiUrl = `${import.meta.env.VITE_API_ROUTE_GET_BLOGPOSTS_BY_ID}/${id}`;
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
        console.log("Error fetching all blog posts information")
        console.log(error)
    }
}

export const getBlogPostsByName = async (name) => {

    try {
        const apiUrl = `${import.meta.env.VITE_API_ROUTE_GET_BLOGPOSTS_BY_NAME}/${name}`;
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
        console.log("Error fetching all blog posts information")
        console.log(error)
    }
}


export const postBlog = async ({ publicationDate, lastEditedDate, title, author, coverImageSource, textContent, imageContentSources, category }) => {

        const reqBody = {
            [BlogPostFieldNames.publicationDate]: publicationDate,
            [BlogPostFieldNames.lastEditedDate]: lastEditedDate,
            [BlogPostFieldNames.title]: title,
            [BlogPostFieldNames.author]: author,
            [BlogPostFieldNames.coverImageSource]: coverImageSource,
            [BlogPostFieldNames.textContent]: textContent,
            [BlogPostFieldNames.imageContentSources]: imageContentSources,
            [BlogPostFieldNames.category]: category
        };

        try {
            const apiUrl = `${import.meta.env.VITE_API_ROUTE_CREATE_BLOG}`;
            const response = await axios.post(apiUrl, reqBody);
            return response.data;
        } catch (error) {
            console.log("Error posting blog")
            console.log(error)
        }
}

export const getDailyQuote = async () => {
    try {
        const apiUrl = import.meta.env.VITE_API_ROUTE_GET_DAILY_QUOTE;
        const response = await axios.get(apiUrl);
        return response.data.quote;
    } catch (error) {
        console.log("Error fetching daily quote")
        console.log(error)
    }
}


