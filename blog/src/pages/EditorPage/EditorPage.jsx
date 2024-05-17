import { useEffect, useState, useContext, createContext } from "react";
import MDEditor from '@uiw/react-md-editor';

import './EditorPage.css'
import PublishWritingButton from "../../components/PublishWritingButton/PublishWritingButton";
import BackArrowButton from "../../components/BackArrowButton/BackArrowButton";


const EditorPage = () => {

    const [value, setValue] = useState(localStorage.getItem('markdownContent') || "Molon Labe");
    const [title, setTitle] = useState(localStorage.getItem('markdownContent-title') || "Come, take!");
    const [authorName, setAuthorName] = useState(localStorage.getItem('markdownContent-author') || "Leonidas I");

    useEffect(() => {
        // This effect only runs once on initial load to set initial values from local storage
        localStorage.setItem('markdownContent', value);
        localStorage.setItem('markdownContent-title', title);
        localStorage.setItem('markdownContent-author', authorName);
    }, []); 

    useEffect(() => {
        // This effect runs whenever value, title, or authorName change
        localStorage.setItem('markdownContent', value);
        localStorage.setItem('markdownContent-title', title);
        localStorage.setItem('markdownContent-author', authorName); 
    }, [value, title, authorName]); 

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
                <PublishWritingButton></PublishWritingButton>
            </div>
        </div>
    );
}

export default EditorPage