import { useEffect, useState } from "react"
import productMock from "../../utils/productDetailMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const getItem = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(productMock)
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
    }, []);

    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}   

export default ItemDetailContainer