import './fifthpage.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Fifthpage( { hotel , sethotel, active, setactive } ) {
    const [description, setDescription] = useState('');
    const characterLimit = 500; // Example character limit

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    function handelsend(){
       sethotel({...hotel,description:description})
       setactive(7)
    }
    function handelback(){
        setactive(5)
    }
    const totalProgressSegments = 7;
    const activeProgressSegments = 6; // As per image (6 dark segments)
    let yes = false;
     if (activeProgressSegments === active ){
      yes = true
    }
    return (
        <> { yes &&
        <div className="container">
            <header className="page-header">
               <Link to={'/home'}><button className="exit-button">exit</button></Link>
            </header>
          <div className="hhh">
            <main className="description-main-content">
                <h1 className="description-page-title">Create your description</h1>

                <div className="description-textarea-container">
                    <textarea
                        className="description-textarea"
                        placeholder="Share what makes your place special."
                        value={description}
                        onChange={handleDescriptionChange}
                        maxLength={characterLimit} // Optional: Enforce a max length
                        aria-label="Place description"
                    />
                    <div className="description-char-count">
                        {description.length}/{characterLimit}
                    </div>
                </div>
            </main>
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