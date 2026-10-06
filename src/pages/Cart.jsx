import { useContext } from 'react'
import './Cart.css'
import noteContext from '../context/noteContext'
import { Navigate } from 'react-router-dom'
export default function Cart() {

    let { cartProduct, AddtoCard, removeTocart, deleteCartProduct, deleteAllCart } = useContext(noteContext)

    return (
        <main className='dflex cardContainer'>
            <section className='allcards'>
                {
                    cartProduct.length >= 1
                        ? cartProduct.map(product =>
                        (<div key={product.id} className='ProductCart dflex-c'>
                            <h3>{product.title}</h3>
                            <img width={200} src={product.thumbnail} alt="" />
                            <h1>Rs:{product.price}</h1>
                            <h1 className='dflex tgtbuttons' style={{ gap: '5px' }}>
                                <button onClick={() => removeTocart(product)}>-</button>
                                Quantity:{product.quantity}
                                <button onClick={() => AddtoCard(product)}>+</button>
                            </h1>
                            <div className='buttonContainer'>
                                <button className='deleteProduct' onClick={() => deleteCartProduct(product)}>Delete</button>
                            </div>
                        </div>)
                        )
                        : <Navigate to='/' />
                }
            </section>
            <button onClick={deleteAllCart}>Delete All</button>
        </main>
    )
}
