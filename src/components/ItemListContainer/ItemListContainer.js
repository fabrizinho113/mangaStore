import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase/firebase";
import { PacmanLoader } from 'react-spinners';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    
    const { categoryId } = useParams();

    
    useEffect( () => {
        const productsCollection = collection(db, 'products');
        const categoryQuery = categoryId && query(productsCollection, where("category", "==", categoryId));
         
        getDocs(categoryId ? categoryQuery : productsCollection)
        .then( result => {
            const itemList = result.docs.map( item => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })
            setListProducts(itemList);
        })
        .catch( () => console.log("Error, retrieving products...."))
        .finally( () => setLoading(false) );
    }, [categoryId]);
    
    
    return(
        <div className='list-products'>
            {loading ? <div className="loading"><PacmanLoader size={100} color="#f2ff00" margin={1} /><h2>Loading...</h2></div> : <ItemList dataProducts={listProducts}/>}
        </div>
    )
}

export default ItemListContainer