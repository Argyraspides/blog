import './BlogPostPage.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogPostById } from '../../apiCalling/apis/apis';
import BlogContent from '../../components/BlogContent/BlogContent'
import Titlebar from '../../components/Titlebar/Titlebar';
import LoadingPage from '../LoadingPage/LoadingPage';

const BlogPostPage = () => {

    const { blogPostId } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [blogPostContent, setBlogPostContent] = useState({})

    useEffect(() => {

        console.log(blogPostId)

        try {

            const fetchBlogPostById = async () => {
                setIsLoading(true)
                const resp = await getBlogPostById(blogPostId);
                if (!resp) {
                    console.log("Response for getBlogPostById in BlogContent.jsx is null")
                } else {
                    setBlogPostContent(resp);
                    console.log(resp);
                    setIsLoading(false);
                }
            }
            fetchBlogPostById();

        } catch (error) {
            console.log("Error in fetching blog post by Id in BlogPostPage component")
            console.log(error);
            setIsLoading(false);
        }

    }, [])

    if (isLoading) {
        return (
            <LoadingPage loadingText={"Loading post ..."}></LoadingPage>
        );
    }

    return (
        <div className="blogpostpage-container">

            {blogPostContent && <BlogContent
                _id={blogPostContent._id}
                publicationDate={blogPostContent.publicationDate}
                lastEditedDate={blogPostContent.lastEditedDate}
                title={blogPostContent.title}
                author={blogPostContent.author}
                coverImageSource={blogPostContent.coverImageSource}
                textContent={blogPostContent.textContent}
                imageContentSources={blogPostContent.imageContentSources}
            />}

        </div>
    );

}

export default BlogPostPage