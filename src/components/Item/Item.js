import ItemCount from "../ItemCount/ItemCount";
import './Item.css';

const Item = ({data}) => {

    const {title, image, price} = data;


    const productsAdded = (itemsToCart) => {
        console.log('Items added to cart: ', itemsToCart);
    }

    return(
        <div className="item-product">
            <img src={`/assets/img/${image}`} className="cover" alt="img product" />
            <h2>{title}</h2>
            <span>{price} $ ARS</span>
            <button>View more info</button>
            <ItemCount stock={10} initial={1} onAdd={productsAdded}/>
        </div> 
    )
}

export default Item