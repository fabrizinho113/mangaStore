import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({data}) => {

    const {id, title, image, category} = data;

    return(
        
            <div className="item-product">
                <h2>{title}</h2>
                <img src={`/assets/img/${image}`} className="cover" alt="img product" />
                <div className="paymentOptions">
                    <p><CreditCardIcon />All Credit Cards</p>
                    <p><DeliveryDiningIcon />Free Shipping</p>

                    <Link to={`/${category}/${id}`}><button className="button-info">View more info</button></Link>
                </div>
                
                
            </div> 
        
    )
}

export default Item