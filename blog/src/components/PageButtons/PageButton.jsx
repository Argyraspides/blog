import './PageButton.css'
import { IoMdArrowBack } from "react-icons/io";


const PageButton = ({queryPageFunction, pageNumber, direction}) => {

    

    return (
        <div onClick={() => queryPageFunction}>
           <IoMdArrowBack></IoMdArrowBack> 
        </div>
    );

}

export default PageButton;