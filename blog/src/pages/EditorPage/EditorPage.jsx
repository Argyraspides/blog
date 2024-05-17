import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';

import './EditorPage.css'


const EditorPage = () => {

    const [value, setValue] = useState("**Hello world!!!**");
    return (
        <div className="editorpage-container">
            <MDEditor
                value={value}
                onChange={setValue}
                className="editorpage-mdeditor"
                height={750}
            />
        </div>
    );
}

export default EditorPage