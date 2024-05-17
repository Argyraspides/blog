import express from "express";

import db from "../db/connection.js";
import { testBlogPostsBaseRoute, createBlogPost, getAllBlogPostsInfo, getBlogPostById, getBlogPostsByName } from '../controllers/blogPostsController.js'


const router = express.Router();

router.get("/blogPostsTest", testBlogPostsBaseRoute);
router.post("/createBlog", createBlogPost);
router.get("/getAllBlogPostsInfo", getAllBlogPostsInfo);
router.get("/getBlogPostById/:id", getBlogPostById);
router.get("/getBlogPostsByName/:name", getBlogPostsByName);

export default router;