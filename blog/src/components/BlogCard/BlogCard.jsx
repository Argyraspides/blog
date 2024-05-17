import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {formatDate} from "../../utils/dateFormatter.js"
import './BlogCard.css'
import { useState } from 'react'


const BlogCard = ({ title, author, coverImageSource, date, _id }) => {

    const [blogPostId, setBlogPostId] = useState(``)
    const [coverImage, setCoverImageSource] = useState(coverImageSource);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogPost/${_id}`)
    }

    // Make sure image url is valid, otherwise change it to some default url
    useEffect(() => {
        const img = new Image(); 
        img.onerror = () => {
            setCoverImageSource('https://i.imgur.com/UX5AWwu.png'); 
        };
        img.src = coverImageSource; 
    }, [coverImageSource]); 

    const formattedDate = formatDate(date);

    return (
        <div className="blogcard">
            <h4 className="blogcard-title">{title}</h4>
            <div className="blogcard-background" onClick={handleClick}>
                <img className="blogcard-image" src={coverImage}></img>
            </div>
            <p className="blogcard-author">{author}</p>
            <p className="blogcard-date">{formattedDate}</p>
        </div>
    );
}

export default BlogCard