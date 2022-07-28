import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import products from '../../utils/productsMock';


const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })
        
    getProducts
            .then( (res) => { 
                setListProducts(res)
            })
            .catch( () => {
                console.log("Error")
            })


    
    return(
        <div className='list-products'>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer