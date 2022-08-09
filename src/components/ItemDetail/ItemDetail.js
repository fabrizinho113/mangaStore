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
                <p>{description}</p>
                <span>{price} $ ARS</span>
                {
                    !quantitySelected ? <ItemCount onAdd={itemsAdded} stock={10} productData={item}/> : <button><Link to="/cart">TERMINAR COMPRA</Link></button>
                }
            </div>
            
        </div>
    );



}

export default ItemDetail