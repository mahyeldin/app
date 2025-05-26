import React from 'react'
import './card.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Card( {location , rating , desc , date , price , image , id} ) {
  const images = image

  const [activeIndex, setActiveIndex] = useState(0);
  const [colr,setcolr] = useState('gray');
  function addtofavorite(){
      colr== 'gray' ? setcolr('red'): setcolr('gray');

      axios.post(`http://localhost:5000/api/places/favorites/${id}`,{},{
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json',
        },
      })
      .then((res)=>{
       console.log(res)
      })
  }


  return (
    <div className="card">
      <div className="card-image">
        <img src={images[activeIndex]} alt="Apartment" />
        <div className="heart" style={{color:colr}} onClick={addtofavorite}>❤︎</div>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
         <Link key={id} to={`/hotel/${id}`} style={{ textDecoration: 'none' ,color:'black'}} ><h3> {location}</h3></Link> 
          <div className="rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="subtext">{desc}</p>
        <p className="subtext">{date}</p>
        <p className="price">${price} night</p>
      </div>
    </div>
  );
};


export default Card