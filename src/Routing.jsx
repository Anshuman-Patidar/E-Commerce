import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Display from './pages/Display'
import Cart from './pages/Cart'
import Login from './pages/Login'

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='display' element={<Display/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='login' element={<Login/>}/> 
        </Routes>
    )
}
