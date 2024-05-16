import "./itemListContainer.css"
import getProducts from "../../data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({saludar})=>{
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()
    
    useEffect(()=>{
        getProducts()
        .then((repuesta)=>{
            if(idCategory){
                const productsFilter = repuesta.filter((productRes)=> productRes.categoria === idCategory)
                setProducts(productsFilter)
            }else{
            setProducts(repuesta);
            }
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("finalo la promesa")
        })
    },[idCategory])

    
    return(
        <div className="item-list-container"> 
            <h2>{saludar}</h2>
            <ItemList  products = {products}/>
        </div>
    )
}
export default ItemListContainer