import './BlogCard.css'

const BlogCard = ({ title, author, coverImageSource, date }) => {

    return (
        <div className="blogcard">
            <h4 className="blogcard-title">{title}</h4>
            <div className="blogcard-background">
                <img className="blogcard-image" src={coverImageSource}></img>
            </div>
            <p className="blogcard-author">{author}</p>
            <p className="blogcard-date">{date}</p>
        </div>
    );
}

export default BlogCard