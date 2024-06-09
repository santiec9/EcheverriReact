import "./itemListContainer.css"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js"
const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategory } = useParams()
    
    const getProducts = () =>{
        const productsRef = collection(db, "productos")
        getDocs(productsRef)
            .then((productsDB)=>{
                const data= productsDB.docs.map((product)=>{
                    return {id: product.id, ...product.data()}
                })
                setProducts(data)
            })
    }

    const getProductsByCategory = () =>{
        const productsRef = collection(db, "productos")
        const q = query(productsRef, where("categoria", "==", "idCategory"))
        getDocs(q)
        .then((productsDB)=>{
            const data= productsDB.docs.map((product)=>{
                return {id: product.id, ...product.data()}
            })
            setProducts(data)
        })
    }

    useEffect(()=>{
        if(idCategory){
            getProductsByCategory()
        }else{
            getProducts()
        }
        
    },[idCategory])

    
    return(
        <div className="item-list-container"> 
            <h2>{idCategory ? `Filtrado por categoria: ${idCategory}` : "Bienvenido a mi Ecommerce"}</h2>
            {
                loading ? <div>Cargando...</div> : <ItemList  products = {products}/>
            }
            
        </div>
    )
}
export default ItemListContainer