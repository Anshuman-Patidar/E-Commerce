import { Link } from 'react-router-dom'
import './ProductCart.css'
import { useContext } from 'react'
import noteContext from '../context/noteContext'
import AddToCart from './sub-components/AddToCart'
export default function ProductCart({product}) {
    console.log(product)
    let {setDisplayProduct} =useContext(noteContext)
    return (
        <div className='ProductCart dflex-c'>
            <Link to='display' className='dflex-c' onClick={()=>{setDisplayProduct(product)}}>
                <h3>{product.title}</h3>
                <img width={200} src={product.thumbnail} alt="" />
            </Link>
            <h1>Rs:{product.price}</h1>
            <AddToCart product={product}/>
        </div>
    )
}
