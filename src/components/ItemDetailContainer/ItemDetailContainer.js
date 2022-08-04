import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import products from "../../utils/productsMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const {id} = useParams();

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                setItem(product) 
            }
        }
    )
    }

    const getItem = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(filterById)
        }, 2000)    
    })

    useEffect(() => {

        getItem
            .then( (res) => { 
                setItem(res);
            })
            .catch( (error) => {
                console.log("Error");
            })
    }, [id]);

    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}   

export default ItemDetailContainer