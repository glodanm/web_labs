import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div id = "navbar">
            <nav className = "nav">
                <span className = "logo">Entertainment</span>
                <ul className = "navlist">
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">Catalog</a></li>
                    <li><a href = "#">Cart</a></li>
                </ul>
            </nav>
            <hr className= "hr_nav"/>
        </div>
    )
}

export default Navbar
