import React, { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import './CardContainer.css'

const CardContainer = ({ blogCards }) => {

    return (
        <div className="card-container">
            <div className="card-container-cards">

                {blogCards.map((blogCard, index) => (

                    <BlogCard
                        key={index}
                        title={blogCard.title}
                        coverImageSource={blogCard.coverImageSource}
                        date={blogCard.publicationDate}
                        author={blogCard.author}
                    />

                ))}
            </div>
        </div>
    );

}

export default CardContainer;