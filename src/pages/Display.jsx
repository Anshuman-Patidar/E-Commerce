import { useContext } from 'react'
import './Display.css'
import noteContext from '../context/noteContext'
import { Navigate } from 'react-router-dom'
import AddToCart from '../components/sub-components/AddToCart'
export default function Display() {
    let {displayProduct}=useContext(noteContext)

    if(displayProduct== null){
        return <Navigate to='/' />
    }

    return (
        <main >
            <div className='Display'>
                <h2>{displayProduct.title}</h2>
                <div className='subDisplay'>
                    <img  src={displayProduct.thumbnail} alt='image' />
                    <div className='subSubDisplay'>
                        <h3>Category:{displayProduct.category}</h3>
                        <h3>Stars:{displayProduct.rating.rate}</h3>
                        <h3>Count:{displayProduct.rating.count}</h3>
                        <h3>RS:{displayProduct.price}</h3>
                        <AddToCart product={displayProduct}/>
                    </div>
                </div>
                <h3>{displayProduct.description}</h3>
            </div>
        </main>
    )
}