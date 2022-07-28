import { useState } from 'react';
import './ItemCount.css';
import AddIcon from '@mui/icons-material/Add';
import { Remove } from '@mui/icons-material';


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
                    <Remove className="minus" onClick={removeProduct} />
                    <p>{productCounter}</p>
                    <AddIcon className="plus" onClick={addProduct} />
                </div>
                <button className="button-cart" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ItemCount