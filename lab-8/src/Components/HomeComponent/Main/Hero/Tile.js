import React from 'react'

import balloon from "../../../../Assets/Images/balloon.jpg"
import rafting from "../../../../Assets/Images/raphting.jpg"
import mountains from "../../../../Assets/Images/hill.jpg"

function Tile() {
    return (
    <div className = "main">
        <div className = "tile">
            <ul id = "iteams-container">
                <li className = "entertainment">
                    <img className="amusement-img" src = {balloon} alt="Please wait"/>
                    <h2 className="tile-title">Air Balloon Ride</h2>
                    <h3 className="tile-subtitle">Unforgettable emotions are guaranteed here.
                    You will see beautiful views from the height of the alder flight</h3>
                </li>

                <li className="entertainment">
                    <img className="amusement-img" src={mountains} alt="Please wait"/>
                    <h2 className="tile-title">Hike to mountains</h2>
                    <h3 className="tile-subtitle">You see the true beauty of the Ukrainian Carpathians, you will meet the sunrise at the top. 
                    You will feel what it is like to walk with a backpack and cook on the fire</h3>
                </li>

                <li className ="entertainment">
                    <img className="amusement-img" src ={rafting} alt="Please wait"/>
                    <h2 className="tile-title">Rafting</h2>
                    <h3 className="tile-subtitle">It will be wet here ^_~.
                    You will go down the mountain river. 
                    This is not an easy task, but you will definitely have something 
                    to tell your friends about this experience</h3>
                </li>

            </ul>
        </div>
        <button type="button" className="btn-view-more" >View more</button>
    </div>    
    )
}

export default Tile
