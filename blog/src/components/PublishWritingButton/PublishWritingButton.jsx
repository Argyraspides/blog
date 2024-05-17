import './PublishWritingButton.css'
import { useNavigate } from 'react-router-dom'

const PublishWritingButton = () => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
       
    }

    return (
        <button className="publishwritingbutton" onClick={handleButtonClick}>Publish Your Writing</button>
    );
}

export default PublishWritingButton;