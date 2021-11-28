import React from 'react'
import facebook from "../../../Assets/Images/facebook.svg"
import inst from "../../../Assets/Images/inst.svg"
import tg from "../../../Assets/Images/tg.svg"
import "./footer.css"
function Footer() {
    return (
        <div className="footer">
            <hr/>
            <div className="footer-main">
                <div className="logo">Entertainment-Co</div>
                <div className="footer-icons">
                    <img className="footer-icon" src={facebook} alt="sorry"/>
                    <img className="footer-icon" src={inst}  alt="sorry"/>
                    <img className="footer-icon" src={tg}  alt="sorry"/>
                </div>
                <hr className="line"/>
                <div className="copyright">2021 IoT @ Copyright all rights reserver, bla bla </div>
            </div>
        </div>
    )
}

export default Footer



