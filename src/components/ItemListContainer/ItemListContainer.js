import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ({ product }) => {

    const {title, image, price} = product;


    const productsAdded = (itemsToCart) => {
        console.log('Items added to cart: ', itemsToCart);
    }

    
    return(
        <div className="item-product">
            <img src={`/assets/img/${image}`} className="cover" alt="img product" />
            <h2>{title}</h2>
            <span>{price} $ ARS</span>
            <ItemCount stock={10} initial={1} onAdd={productsAdded}/>
        </div> 
    )
}

export default ItemListContainer