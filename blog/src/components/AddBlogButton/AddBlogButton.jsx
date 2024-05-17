import './AddBlogButton.css'
import { useNavigate } from 'react-router-dom'

const AddBlogButton = () => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/createPost')
    }

    return (
        <button className="addblogbutton" onClick={handleButtonClick}>Add Post</button>
    );
}

export default AddBlogButton;