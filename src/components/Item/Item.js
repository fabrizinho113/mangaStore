import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({data}) => {

    const {id, title, image, price, category} = data;

    return(
        
            <div className="item-product">
                <img src={`/assets/img/${image}`} className="cover" alt="img product" />
                <h2>{title}</h2>
                <span>{price} $ ARS</span>
                <Link to={`/${category}/${id}`}><button className="button-info">View more info</button></Link>
            </div> 
        
    )
}

export default Item