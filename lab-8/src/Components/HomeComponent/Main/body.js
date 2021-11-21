import React from "react";

import Hero from "./Hero/Hero";
import Tile from "./Hero/Tile";
import './body.css'

function Body() {
    return (
        <div className='body-part'>
            <Hero />
            <Tile/>
        </div>
    )
}

export default Body