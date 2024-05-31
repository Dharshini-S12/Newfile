import React from "react";
import logo from './style.css'
const Banner = (props) =>{
    return(
        <div className="row mb-4">
            <div className="col-3 mt-5">
                <img src="" alt="logo" className={logo}></img>
            </div>
            <div className="col-5 mt-5">
                <h4 style={{fontStyle:"italic" , color:'red'}}>{props.heading}</h4>
            </div>
        </div>
    )
}
export default Banner;