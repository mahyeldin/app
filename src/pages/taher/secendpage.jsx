import React, { useState } from "react";
import './secendpage.css'; // We'll create this CSS file next
import { Link } from "react-router-dom";
// SVG Icon for Location Pin
const LocationPinIcon = () => (
    <svg className="location-pin-icon-svg" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
    </svg>
);

export default function LocationPage( { hotel , sethotel, active, setactive} ) {
    const [address, setAddress] = useState("");

    function handelsend(){
        sethotel({...hotel,location:address})
        setactive(4);
    }
    function handelback(){
        setactive(2)
    }

    const totalProgressSegments = 7;
    const activeProgressSegments = 3; // First two segments are active as per the image
    let yes = false;
     if (activeProgressSegments === active ){
      yes = true
    }
    return (
         <> { yes &&
        <div className="location-container">
            <Link to={'/home'}><button className="exit-button">exit</button></Link>
           <div className="hhh">
            <div className="location-content-area">
                <h1 className="location-title-heading">Where's your place located ?</h1>
                <div className="location-input-wrapper">
                    <input
                        type="text"
                        className="location-address-input"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <LocationPinIcon />
                </div>
            </div>
           </div>
          <div className="yyy">
            <div className="progress-bar-container">
                {Array.from({ length: totalProgressSegments }).map((_, index) => (
                    <div
                        key={index}
                        className={`progress-segment ${index < activeProgressSegments ? 'active' : ''}`}
                    ></div>
                ))}
            </div>

            <div className="navigation-buttons">
                <button className="nav-button back-button" onClick={handelback}>Back</button>
                <button className="nav-button next-button" onClick={handelsend}>Next</button>
            </div>
          </div>
        </div>
        }
    </>
    );
}