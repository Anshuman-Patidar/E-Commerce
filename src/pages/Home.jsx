import { useContext, useEffect } from 'react'
import './Home.css'
import noteContext from '../context/noteContext'
import Loader from '../components/sub-components/Loader'
import ProductCart from '../components/ProductCart'
export default function Home() {
    let {getproducts,products,isLoading,isError}= useContext(noteContext)
    useEffect(()=>{getproducts()},[])
    return (
        <main>
            
            <section className="cardContainer dflex">
                {
                    !isLoading && !isError
                    ? <div className='allcards'>{products.map(product=> <ProductCart key={product.id} product={product}/>)}</div>
                    : isError
                    ? <p>There is an Error</p>
                    : <main className='dflex'><Loader width={70}/></main>
                }
            </section>
        </main>
    )
}