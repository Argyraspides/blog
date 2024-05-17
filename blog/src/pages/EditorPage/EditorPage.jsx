import { useEffect, useState, useContext, createContext } from "react";
import MDEditor from '@uiw/react-md-editor';

import './EditorPage.css'
import PublishWritingButton from "../../components/PublishWritingButton/PublishWritingButton";
import BackArrowButton from "../../components/BackArrowButton/BackArrowButton";


const EditorPage = () => {

    const [value, setValue] = useState("Molon Labe");

    return (
        <div className="editorpage-background">
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