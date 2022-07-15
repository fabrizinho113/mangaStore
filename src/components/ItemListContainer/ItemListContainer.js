import './ItemListContainer.css';


const ItemListContainer = ({ title, price, image }) => {

    return(
        <div className="item-product">
            <img src={`/assets/img/${image}`} alt="img product" />
            <h2>{title}</h2>
            <span>{price} $ ARS</span>
            <button>Buy</button>
        </div> 
    )
}

export default ItemListContainer