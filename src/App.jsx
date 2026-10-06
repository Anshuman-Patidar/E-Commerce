
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Routing from './Routing'
import Footer from './components/Footer'
export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routing/>
            <Footer/>
        </BrowserRouter>
    )
}
