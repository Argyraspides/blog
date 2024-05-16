import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";
import { testBlogPostsBaseRoute, createBlogPost, getAllBlogPostsInfo } from '../controllers/blogPostsController.js'

// This help convert the id from string to ObjectId for the _id.

const router = express.Router();

router.get("/blogPostsTest", testBlogPostsBaseRoute);
router.post("/createBlog", createBlogPost);
router.get("/getAllBlogPostsInfo", getAllBlogPostsInfo);

export default router;