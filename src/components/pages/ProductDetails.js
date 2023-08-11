// Work in progress

import data from "../../db/data"
import { useParams } from "react-router-dom";



const ProductDetails = () => {
  const {productId} = useParams();
  const product = data.filter(product => product.id === productId)
  // const {img, teamName} = product
const proDetails = product[0]
  
console.log(proDetails)
 
  return (
    <div style = {{height:"100vh"}}>productDetails 
    {/* {img} {teamName} */}

    <h5>{productId}</h5>
      
    </div>
    
      
  )
}

export default ProductDetails

