import './BlogContent.css'
import MDEditor from '@uiw/react-md-editor';
import Titlebar from '../Titlebar/Titlebar';
import { formatDate } from '../../utils/dateFormatter';
import BackArrowButton from '../BackArrowButton/BackArrowButton';
import { useEffect, useState } from 'react';


const BlogContent = ({ _id, publicationDate, lastEditedDate, title, author, coverImageSource, textContent, imageContentSources }) => {

    const pubDateFormatted = formatDate(publicationDate)
    const editDateFormatted = formatDate(lastEditedDate)

    return (
        <>
            <div className="blogcontent-container">

                <Titlebar text={title}>
                </Titlebar>
                <BackArrowButton className={"blogcontent-backarrowbutton"}></BackArrowButton>

                <div className="blogcontent-heading-container">

                    <h3 className="blogcontent-author">By {author}</h3>

                    <h3 className="blogcontent-date"> Published on the {pubDateFormatted}</h3>

                    <h3 className="blogcontent-lastediteddate">
                        {editDateFormatted == pubDateFormatted ? "" : "Last Edited: " + editDateFormatted}
                    </h3>

                    <img src={coverImageSource} className="blogcontent-heading-image"></img>
                </div>
                <MDEditor.Markdown className="blogcontent-markdown-content" source={textContent} />
            </div>
        </>
    );

}

export default BlogContent