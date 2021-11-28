import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import hill from '../../../Assets/Images/hill.jpg'
import balloon from '../../../Assets/Images/balloon.jpg'
import rafting from '../../../Assets/Images/raphting.jpg'
import './MainCatalog.css'

// const entertainmentCatalog = [
//     {
//         title: 'Air Balloon Ride',
//         paragraph: 'Unforgettable emotions are guaranteed here. You will see beautiful views from the height of the alder flight',
//         price: '300$',
//         image: balloon,
//     }
// ]

// function MainCatalog(){
//     return(
//         <div className=''>
//             {entertainmentCatalog.map(({title, paragraph, price, image}

            
//             ))}
//         </div>
//     )
// }

function MainCatalog(){
    return(
        <div>
        <div className="heades-section">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Speed
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><button class="dropdown-item" >Desc</button></li>
                    <li><button class="dropdown-item">Lovest</button></li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Power
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><button class="dropdown-item" >Desc</button></li>
                    <li><button class="dropdown-item">Lovest</button></li>
                </ul>
            </div>
        </div  >
    <div className="catalog">
        <div className = "tile">
            <ul id = "iteams-container">
                <li className = "entertainment">
                    <img className="amusement-img" src = {balloon} alt="Please wait"/>
                    <h2 className="tile-title">Air Balloon Ride</h2>
                    <h3 className="tile-subtitle">Unforgettable emotions are guaranteed here.
                    You will see beautiful views from the height of the alder flight</h3>
                    <h3 className="price">Price: 300$</h3>
                </li>

                <li className="entertainment">
                    <img className="amusement-img" src={hill} alt="Please wait"/>
                    <h2 className="tile-title">Hike to mountains</h2>
                    <h3 className="tile-subtitle">You see the true beauty of the Ukrainian Carpathians, you will meet the sunrise at the top. 
                    You will feel what it is like to walk with a backpack and cook on the fire</h3>
                    <h3 className="price">Price: 300$</h3>
                </li>

                <li className ="entertainment">
                    <img className="amusement-img" src ={rafting} alt="Please wait"/>
                    <h2 className="tile-title">Rafting</h2>
                    <h3 className="tile-subtitle">It will be wet here ^_~.
                    You will go down the mountain river. 
                    This is not an easy task, but you will definitely have something 
                    to tell your friends about this experience</h3>
                    <h3 className="price">Price: 300$</h3>
                </li>

            </ul>
        </div>
    </div>
</div>
    )
}

export default MainCatalog