import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }){

    const [productCounter, setProductCounter] = useState(initial);
    const [productStock, setProductStock] = useState(stock);

    const addProduct = () => {
        productStock > productCounter ? setProductCounter( productCounter + 1) : console.log(`This product doesn't have any stock at the moment`);
    }

    const removeProduct = () => {
        productCounter > initial ? setProductCounter( productCounter - 1) : console.log(`You can't do that!`);
    }

    const addToCart = () => {
        if (productStock > 0) {
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else console.log("Out of stock");
    }

    return (
        <div className='productStock'>
                <p>Stock: {productStock}</p>
                <div className='counterProduct'>
                    <button onClick={removeProduct}>-</button>
                    <p>{productCounter}</p>
                    <button onClick={addProduct}>+</button>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ItemCount