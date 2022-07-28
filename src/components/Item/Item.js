import './Item.css';

const Item = ({data}) => {

    const {title, image, price} = data;

    return(
        <div className="item-product">
            <img src={`/assets/img/${image}`} className="cover" alt="img product" />
            <h2>{title}</h2>
            <span>{price} $ ARS</span>
            <button className="button-info">View more info</button>
        </div> 
    )
}

export default Item