import { useContext } from 'react'
import './AddToCart.css'
import noteContext from '../../context/noteContext'

function AddToCart({product}) {
    let {AddtoCard}=useContext(noteContext)
    return (
       <div onClick={()=>AddtoCard(product)} className='Addtocart'>
            <button>Add To Cart</button>
       </div>
    )
}

export default AddToCart
