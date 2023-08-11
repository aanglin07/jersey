import data from "../../db/data"
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const {productId} = useParams();
  const product = data.find((product) => product.id === productId)

 
  console.log(product)
 
  return (
    <div style = {{height:"100vh"}}>productDetails 
      
    </div>
    
      
  )
}

export default ProductDetails

