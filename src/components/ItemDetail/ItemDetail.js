import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({item}) => {
    
    const {title, price, image, description} = item;

    const productsAdded = (itemsToCart) => {
        console.log('Items added to cart: ', itemsToCart);
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
                <ItemCount stock={10} initial={1} onAdd={productsAdded}/>
            </div>
            
        </div>
    );



}

export default ItemDetail