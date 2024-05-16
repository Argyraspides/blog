import express from "express";

import db from "../db/connection.js";
import { testBlogPostsBaseRoute, createBlogPost, getAllBlogPostsInfo } from '../controllers/blogPostsController.js'


const router = express.Router();

router.get("/blogPostsTest", testBlogPostsBaseRoute);
router.post("/createBlog", createBlogPost);
router.get("/getAllBlogPostsInfo", getAllBlogPostsInfo);

export default router;