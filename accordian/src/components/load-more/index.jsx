import { useEffect, useState } from "react"
import "./style.css"

function Loadbutton(){
    const [loading, setloading] = useState(false)
    const [count, setcount] = useState(0)
    const [product, setproduct] = useState([])

    async function fectchproducts(){

        try {
            setloading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
           const result = await response.json() ;
          if (result && result.products && result.products.length) {
                setproduct((prevData)=> [...prevData,...result.products]);
                setloading(false)
     }
          
             
           console.log(result)
        } 
        catch (e) {
            console.log(e)
            setloading(false)
            
        }
    }

    useEffect(()=>{
        fectchproducts()

    },[count])

    if(loading){
        return <p>Data is Loading... Please wait!!</p>
    }

    return (
       
        <div className="container">
            <div className="product-container">
               {
                product && product.length ? 
                product.map(item => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                )) : null 
            }
            </div>
            <div className="button-container">
                <button onClick={()=> setcount(count +1)}>Load More Products</button>
            </div>

        </div>
       
    )
}
export default Loadbutton