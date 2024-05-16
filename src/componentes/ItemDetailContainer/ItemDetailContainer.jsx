import { useState, useEffect} from "react";
import getProducts from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [ product, setProduct] = useState({})
    const { idProduct } = useParams()
    useEffect(()=>{
        getProducts()
        .then((repuesta)=>{
            const productFind = repuesta.find((productRes)=> productRes.id === idProduct)
            setProduct(productFind);
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("finalo la promesa")
        })
    },[]);
    return(
        <div>
            <ItemDetail product = {product}/>
        </div>
    )
}
export default ItemDetailContainer