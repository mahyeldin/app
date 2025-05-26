import axios from 'axios';
import './finalpage.css'
import React, { useState, useEffect, useRef } from 'react';
import {  useNavigate, Link } from 'react-router-dom';


export default function Finalpage( { hotel , sethotel , active, setactive} ) {
    const [price, setPrice] = useState(50); // Initial price
    const [inputWidth, setInputWidth] = useState('auto');
    const priceSpanRef = useRef(null); // Ref to measure text width for dynamic input sizing
    const Navigate =useNavigate();
    const handlePriceChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        setPrice(value === '' ? '' : parseInt(value, 10));
    };

    // Effect to adjust input width based on content
    useEffect(() => {
        if (priceSpanRef.current) {
            // Add a little extra width for cursor and padding
            setInputWidth(`${priceSpanRef.current.offsetWidth + 20}px`);

        }
        sethotel({...hotel,price:price});
    }, [price]);
    function handelsend(){
        
        console.log(hotel)
        const formData = new FormData();
        formData.append("name", hotel.name);
        formData.append("description", hotel.description);
        formData.append("price", hotel.price);
        formData.append("rooms", hotel.rooms); 
        formData.append("location", hotel.location); 
        formData.append('date','may-25-30');
        for (let i = 0; i < hotel.images.length; i++) {
           formData.append("images", hotel.images[i]);
            
        }       
        

        

        axios.post('http://localhost:5000/api/places',formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res)=>{
        console.log(res)
        Navigate('/home')
      })

    }
    function handelback(){
        setactive(6)
    }

    const totalProgressSegments = 7;
    const activeProgressSegments = 7; // All segments active as per image
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
         <div className='hhh'>  
            <main className="price-main-content">
                <h1 className="price-page-title">Now, set your price</h1>

                <div className="price-input-container">
                    <span className="price-currency-symbol">$</span>
                    {/* Hidden span to measure text width for dynamic input sizing */}
                    <span ref={priceSpanRef} style={{ visibility: 'hidden', position: 'absolute', fontSize: '64px', fontWeight: 'bold', fontFamily: 'inherit' }}>
                        {price || '0'}
                    </span>
                    <input
                        type="text" // Use text to allow custom formatting and prevent default number input spinners
                        className="price-input-field"
                        value={price}
                        onChange={handlePriceChange}
                        onBlur={(e) => { if(e.target.value === '') setPrice(0);}} // Set to 0 if blurred empty
                        inputMode="numeric" // Hint for numeric keyboard on mobile
                        aria-label="Set your price"
                        style={{ width: '110px' }}
                    />
                </div>

                <div className="price-suggestion-chip">
                    Similar listing $50 - $150
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
                <button className="nav-button next-button" onClick={handelsend}>finish</button>
            </div>
          </div>
        </div>
        }
    </>
    );
}