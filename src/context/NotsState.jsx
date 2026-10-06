import { useState } from "react"
import noteContext from "./noteContext"
import axios from "axios"
export default function NoteState(props) {
    let [products,setProducts]=useState(null)
    let [displayProduct,setDisplayProduct]=useState(null)
    let [cartProduct,setCartProduct]=useState([])
    let [isLoading,setIsLoading]= useState(true)
    let [isError,setIsError]= useState(false)

    async function getproducts(){

        setIsLoading(true)
        const url=`https://dummyjson.com/products`
        
        try {

            let res =await axios.get(url)
            setProducts(res.data.products)
            setIsLoading(false)
            setIsError(false)

        } catch (error) {

            setIsError(true)

        }
    }
    function AddtoCard(product){
        const productExist= cartProduct.find(item=> item.id===product.id)
        productExist
        ? setCartProduct(cartProduct.map(item=> item.id===product.id
            ?{...item, quantity: item.quantity +1}
            : item
        ))
        : setCartProduct([...cartProduct,{...product, quantity : 1}])
    }
    
    function removeTocart(product){
        product.quantity > 1
        ? setCartProduct(cartProduct.map(item => item.id === product.id
            ?{...item, quantity: item.quantity - 1}
            : item
        ))
        : setCartProduct(cartProduct.filter(item => item.id !== product.id))
    }

    function deleteCartProduct(product){
        setCartProduct(cartProduct.filter(item => item.id !== product.id))
    }

    function deleteAllCart(){
        setCartProduct([])
    }
    return (
        <noteContext.Provider 
        value={{
            products,
            displayProduct,
            setDisplayProduct,
            cartProduct,
            isLoading,
            isError,
            getproducts,
            AddtoCard,
            removeTocart,
            deleteCartProduct,
            deleteAllCart
        }}>
            {props.children}
        </noteContext.Provider>
    )
}
