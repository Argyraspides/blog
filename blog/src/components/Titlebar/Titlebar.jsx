
import './Titlebar.css'
// Titlebar takes in any string
const Titlebar = ({ text }) => {

    return (
        <div className='titlebar-background'>
            <h1 className='titlebar-h1'>{text}</h1>
        </div>
    );
}

export default Titlebar