import { useEffect, useState, useContext, createContext } from "react";
import MDEditor from '@uiw/react-md-editor';

import './EditorPage.css'
import PublishWritingButton from "../../components/PublishWritingButton/PublishWritingButton";
import BackArrowButton from "../../components/BackArrowButton/BackArrowButton";
import { postBlog } from "../../apiCalling/apis/apis";
import { BlogPostFieldNames } from "../../../../server/models/blogPostModel";
const EditorPage = () => {

    const [value, setValue] = useState(localStorage.getItem('markdownContent') || "Molon Labe");
    const [title, setTitle] = useState(localStorage.getItem('markdownContent-title') || "Come, take!");
    const [authorName, setAuthorName] = useState(localStorage.getItem('markdownContent-author') || "Leonidas I");

    useEffect(() => {
        localStorage.setItem('markdownContent', value);
        localStorage.setItem('markdownContent-title', title);
        localStorage.setItem('markdownContent-author', authorName);
    }, []); 

    useEffect(() => {
        localStorage.setItem('markdownContent', value);
        localStorage.setItem('markdownContent-title', title);
        localStorage.setItem('markdownContent-author', authorName); 
    }, [value, title, authorName]); 

    const onPublish = () => {

        const reqBody = {
            // TODO change publication date to be taken care of server-side
            [BlogPostFieldNames.publicationDate]: Date.now(),
            [BlogPostFieldNames.lastEditedDate]: Date.now(),
            [BlogPostFieldNames.title]: title,
            [BlogPostFieldNames.author]: authorName,
            //[BlogPostFieldNames.coverImageSource]: coverImageSource,
            [BlogPostFieldNames.textContent]: value,
            //[BlogPostFieldNames.imageContentSources]: imageContentSources,
            //[BlogPostFieldNames.category]: category
        };

        try {
            const publish = async () => {
                const resp = await postBlog(reqBody);
                if(resp) console.log("Posted blog successfully in EditorPage.jsx");
                else console.log("Response from server for publishing blog was null/undefined in EditorPage.jsx");
            }
            publish();
        } catch (error) {
            console.log("Failed to publish blog at EditorPage.jsx");
        }
    }

    return (
        <div className="editorpage-background">

            <div className="editorpage-title-section">
                <input
                    type="text"
                    placeholder="Title"
                    className="editorpage-title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your Name"
                    className="editorpage-author-input"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                />
            </div>

            <div className="editorpage-container">
                <MDEditor
                    value={value}
                    onChange={setValue}
                    className="editorpage-mdeditor"
                    height={750}
                />

            </div>
            <div className="editorpage-bottombar">
                <BackArrowButton className="editorpage-backbutton"></BackArrowButton>
                <PublishWritingButton buttonClickFunction={onPublish}></PublishWritingButton>
            </div>
        </div>
    );
}

export default EditorPage