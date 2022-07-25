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
            .then( (res) => { // Respuesta OK
                setListProducts(res)
            })
            .catch( () => { // Falla la respuesta
                console.log("la llama fallo")
            })


    
    return(
        <div className='list-products'>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer