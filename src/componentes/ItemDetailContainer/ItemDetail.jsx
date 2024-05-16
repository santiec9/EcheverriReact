import "./itemDetail.css"
const ItemDetail = ({product})=>{
    
    return(
        <div className="item-detail">
            <img src={product.image} alt="" />
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>               
            </div>
 
        </div>
    )
}
export default ItemDetail