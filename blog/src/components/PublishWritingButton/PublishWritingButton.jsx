import './PublishWritingButton.css'
import { useNavigate } from 'react-router-dom'

const PublishWritingButton = ({buttonClickFunction}) => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
       buttonClickFunction()
       navigate('/')
    }

    return (
        <button className="publishwritingbutton" onClick={handleButtonClick}>Publish Your Writing</button>
    );
}

export default PublishWritingButton;