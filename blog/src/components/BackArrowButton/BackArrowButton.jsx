import { Link, useNavigate } from 'react-router-dom'
import './BackArrowButton.css'
import { SlArrowLeft } from "react-icons/sl";

const BackArrowButton = ({className}) => {

    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate("../")
    }

    return (
        <SlArrowLeft className={className} onClick={handleBackClick}></SlArrowLeft>
    );
}

export default BackArrowButton