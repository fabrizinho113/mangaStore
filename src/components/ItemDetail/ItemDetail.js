import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({item}) => {
    
    const {title, price, image, description} = item;

    const { addProductToCart } = useContext(CartContext)

    const [quantitySelected, setQuantitySelected] = useState(false)

    const itemsAdded = (count) => {
        addProductToCart({...item, quantity: count});
        setQuantitySelected(true);
    }


    return (
        <div className="itemDetail">
            <div>
                <img src={`/assets/img/${image}`} className="cover" alt="loading..." />
            </div>

            <div className="details">
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <span>Price: {price} $ ARS</span>
                {
                    !quantitySelected ? <ItemCount onAdd={itemsAdded} stock={10} productData={item}/> : <Link to="/cart"><button className="purchaseButton">FINISH PURCHASE</button></Link>
                }
            </div>
            
        </div>
    );



}

export default ItemDetail