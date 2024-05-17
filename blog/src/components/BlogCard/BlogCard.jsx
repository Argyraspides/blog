import { Link, useNavigate } from 'react-router-dom'
import {formatDate} from "../../utils/dateFormatter.js"
import './BlogCard.css'
import { useState } from 'react'


const BlogCard = ({ title, author, coverImageSource, date, _id }) => {

    const [blogPostId, setBlogPostId] = useState(``)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogPost/${_id}`)
    }

    const formattedDate = formatDate(date);

    return (
        <div className="blogcard">
            <h4 className="blogcard-title">{title}</h4>
            <div className="blogcard-background" onClick={handleClick}>
                <img className="blogcard-image" src={coverImageSource}></img>
            </div>
            <p className="blogcard-author">{author}</p>
            <p className="blogcard-date">{formattedDate}</p>
        </div>
    );
}

export default BlogCard