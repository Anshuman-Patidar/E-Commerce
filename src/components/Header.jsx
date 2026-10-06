import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className='header'>
            <h2><Link to='/'>ON-IT</Link></h2>
            <ul>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='cart'>Cart</Link></li>
            </ul>
        </header>
    )
}
