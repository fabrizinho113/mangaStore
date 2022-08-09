import { useState } from 'react';
import './ItemCount.css';
import AddIcon from '@mui/icons-material/Add';
import { Remove } from '@mui/icons-material';


function ItemCount({ stock, onAdd,  productData }){

    const [productCounter, setProductCounter] = useState(1);
    const [productStock, setProductStock] = useState(stock);

    const addItem = (e) => {
        productCounter < productStock ? setProductCounter( productCounter + 1) : console.log(`This product doesn't have any stock at the moment`);
        e.stopPropagation();
    }

    const removeItem = (e) => {
        productCounter > 1 ? setProductCounter( productCounter - 1) : console.log(`You can't do that!`);
        e.stopPropagation();
    }

    const addToCart = () => {
        if (productStock > 0) {
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else console.log("Items cannot be added to cart... out of stock");
    }

    return (
        <div className='productStock'>
                <p>Stock: {productStock}</p>
                <div className='counterProduct'>
                    <Remove className="minus" onClick={removeItem} />
                    <p>{productCounter}</p>
                    <AddIcon className="plus" onClick={addItem} />
                </div>
                
                <button className="button-cart" onClick={addToCart}>Add to Cart</button>
                
        </div>
    )
}

export default ItemCount