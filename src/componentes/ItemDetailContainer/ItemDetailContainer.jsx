import { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js"

const ItemDetailContainer = () =>{
    const [ product, setProduct] = useState({})
    const { idProduct } = useParams()

    const getProduct = () =>{
        const productRef =doc(db, "productos", idProduct)
        getDoc(productRef)
            .then((productDB)=>{
                const data = {id: productDB.id, ...productDB.data()}
                setProduct(data)
            })
    }
    useEffect(()=>{
        getProduct()
    },[idProduct]); 
    return(
        <div>
            <ItemDetail product = {product}/>
        </div>
    )
}
export default ItemDetailContainer