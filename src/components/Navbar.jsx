import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='sum'>
            <div className='logo'>
                Helsinki
            </div>
            <nav className='item'>
                <ul className='ul'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/journey'>Journey</Link>
                    </li>
                    <li>
                        <Link to='/station'>Station</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar