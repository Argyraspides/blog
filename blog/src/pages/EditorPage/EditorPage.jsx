import { useEffect, useState, useContext, createContext } from "react";
import MDEditor from '@uiw/react-md-editor';

import './EditorPage.css'
import PublishWritingButton from "../../components/PublishWritingButton/PublishWritingButton";
import BackArrowButton from "../../components/BackArrowButton/BackArrowButton";


const EditorPage = () => {

    const load = localStorage.getItem('markdownContent');
    const [value, setValue] = useState(!load ? "Molon Labe" : load);
    
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");

    useEffect(() => {
        if (load) { setValue(load) }
    }, [])

    useEffect(() => {
        localStorage.setItem('markdownContent', value);
    }, [value])

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