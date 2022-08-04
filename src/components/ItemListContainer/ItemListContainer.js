import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import products from '../../utils/productsMock';


const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);
    const { categoryId } = useParams();

    const filterCategory = products.filter((products) => products.category === categoryId)


    const getProducts = new Promise( (resolve, reject) => {

        setTimeout( () => {
            categoryId ? resolve(filterCategory) : resolve(products)
        }, 2000) 
    
        })
    

    useEffect( () => {
        getProducts
            .then( (res) => { 
                setListProducts(res)
            })
            .catch( () => {
                console.log("Error")
            })
    }, [categoryId])

    
    return(
        <div className='list-products'>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer