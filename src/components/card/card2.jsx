import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';


function Card2( {location , rating , desc , date , price , image , id} ) {


  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Apartment" />
        <div className="heart" style={{color:'gray'}} >❤︎</div>

        <div className="dots">
            <span
              key={1}
              className={`dot`}
            ></span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
         <h3 style={{ textDecoration: 'none' ,color:'black'}}> {location}</h3>
          <div className="rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="subtext">{desc}</p>
        <p className="subtext">{date}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};


export default Card2