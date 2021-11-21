import React from 'react'
import hero from '../../../../Assets/Images/photo.jpg'

function Hero() {
    return (
        <div className = "hero-main">
            <div className = "hero-main-text">
                <h1 className = "hero-title">We can organize any entertainment just for you</h1>
                <p className = "hero-paragraph">Our company can choose the best entertainment for EVERYONE, regardless of age!!!</p>
                <p className = "hero-paragraph">All you have to do is call us and say your wishes.</p>
                <p className = "hero-paragraph">We will do the rest for you and choose the best entertainment for you!</p>
            </div>
            <img className = "hero-image" src = {hero} alt = "ops"/>
        </div>
    )
}

export default Hero
