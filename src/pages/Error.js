import { Link } from 'react-router-dom';
import './styles/Error.css';

const Error = () => {

        return(
            <div className="error">
                <div className="text">
                    <h1>Error 404 - Page not found</h1>
                    <h2>Click <Link to="/"><u>here</u></Link> to get back to Home</h2>
                </div>
                
                <img src="./assets/img/error.png" alt="error" />

            </div>


        )
}

export default Error