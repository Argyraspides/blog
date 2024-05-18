import { BlogPost, BlogPostFieldNames } from "../models/blogPostModel.js";
import { LogError } from "../loggers/errorLoggers/errorLogger.js";
import { LogRequest } from "../loggers/reqResLoggers/requestLogger.js"

export const testBlogPostsBaseRoute = async (req, res) => {
    console.log("Base API route for blogPosts works");
    res.status(200).json({ msg: "Base API route for blogPosts works" })
}

export const createBlogPost = async (req, res) => {
    LogRequest(req.body, "createBlogPost")

    const {
        [BlogPostFieldNames.publicationDate]: publicationDate,
        [BlogPostFieldNames.lastEditedDate]: lastEditedDate,
        [BlogPostFieldNames.title]: title,
        [BlogPostFieldNames.author]: author,
        [BlogPostFieldNames.coverImageSource]: coverImageSource,
        [BlogPostFieldNames.textContent]: textContent,
        [BlogPostFieldNames.imageContentSources]: imageContentSources,
        [BlogPostFieldNames.category]: category
    } = req.body;

    try {
        const newBlogPost = new BlogPost({
            publicationDate,
            lastEditedDate,
            title,
            author,
            coverImageSource,
            textContent,
            imageContentSources,
            category
        });

        const savedBlogPost = await newBlogPost.save();
        res.status(201).json({msg: "Successfully saved blog post", savedPost: savedBlogPost})

    } catch(error) {

        LogError(error, "createBlogPost");
        res.status(500).json({msg: "Failed to save blog post"})

    }

}

export const getAllBlogPostsInfo = async (req, res) => {
    LogRequest(req.body, "getAllBlogPostsInfo")

    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        
        const totalPosts = await BlogPost.countDocuments();
        const totalPages = Math.ceil(totalPosts / pageSize);

        const skip = (page - 1) * pageSize;

        // Only grab blog post info needed to display a blog card (title, author, publication date, cover image source URL) + id
        const blogPostsFilter =
            "_id " + BlogPostFieldNames.publicationDate + " " + BlogPostFieldNames.title + " " + BlogPostFieldNames.author + " " + BlogPostFieldNames.coverImageSource;
        const blogPostsInfo = await BlogPost.find()
            .select(blogPostsFilter)
            .skip(skip)
            .limit(pageSize)
            .exec();

        res.status(200).json({
            page, 
            pageSize,
            totalPages,
            totalPosts,
            data: blogPostsInfo
        });
    } catch(error) {
        LogError(error, "getAllBlogPostsInfo")
        res.status(500).json({msg: "Failed to fetch blog posts", error: error})
    }

}

export const getBlogPostById = async (req, res) => {
    LogRequest(req.params, "getAllBlogPostsInfo (queryparameter)")

    try {
        const blogPost = await BlogPost.findById(req.params.id)

        // Perhaps not the best way to do things.
        // TODO CLEAN UP. When creating a MD editor, this might not be necessary anymore
        const rawMarkdown = blogPost.textContent.replace(/\\\\n/g, '\n').replace(/\\\\#/g, '#');
        blogPost.textContent = rawMarkdown

        if(!blogPost) {
            res.status(404).json({msg: "Could not find blog post with ID " + req.params.id})
        }

        res.json(blogPost)

    } catch(error) {
        LogError(error, "getBlogPostById")
        res.status(500).json({msg: "Failed to fetch blog post by Id", error: error})
    }

}

export const getBlogPostsByName = async (req, res) => {
    LogRequest(req.params, "getBlogPostByName (queryparameter)")

    try {
        const searchString = req.params.name; 
        const regex = new RegExp(searchString, 'i');

        const query = {
            $or: [
                { title: { $regex: regex } }, 
                { author: { $regex: regex } } 
            ]
        };

        const blogPostsFilter =
            "_id " + BlogPostFieldNames.publicationDate + " " + BlogPostFieldNames.title + " " + BlogPostFieldNames.author + " " + BlogPostFieldNames.coverImageSource;
        const blogPostsInfo = await BlogPost.find(query)
            .select(blogPostsFilter)
            .exec();

        res.status(200).json(blogPostsInfo);
    } catch(error) {
        LogError(error, "getBlogPostsByName")
        res.status(500).json({msg: "Failed to fetch blog posts by name", error: error})
    }
}