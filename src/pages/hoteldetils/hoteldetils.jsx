import React, { useEffect , useRef, useState } from 'react'
import './hoteldetils.css'
import Profileimg from '../../img/profile.jpeg'
import { Link } from 'react-router-dom'
import Loder from '../../components/loder/loder'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Hoteldetils() {
   const [loading, setLoading] = useState(true);
   let hotel = useRef()
   const { id } = useParams()
     useEffect(()=>{
      axios.get(`http://localhost:5000/api/places/${id}`)
      .then((res)=>{
        console.log(res)
        hotel.current = res.data
        setLoading(false)
      })
     },[])


  return (
    <>
    {loading ? <Loder/> : 
    <div className="property-container">
      
        <header >
          <div className="navbar-left">
              <div className='profile'>
              <img
                  className="avatar"
                  src={Profileimg}
                  alt="Profile"
              />
              <Link to='/edit-property'><span className="profile-name">Profiel</span></Link>
              </div>
              <Link to='/home'><button className="home-button">Home</button></Link>
          </div>
        </header>

        <div className="image-section">
          <img
            src={hotel.current.images[0]}
            alt="main"
            className="main-image"
          />
          <div className="side-images">
            <img src={hotel.current.images[1]} alt="" />
            <img src={hotel.current.images[2]} alt="" />
            <img src="https://images.unsplash.com/photo-1600585154294-f22cba4a3d4c" alt="" />
            <img src="https://images.unsplash.com/photo-1600585154417-36f9cf6b9f49" alt="" />
          </div>
        </div>

        <div className="info-section">
          <div className="details">
            <h2>{hotel.current.location}</h2>
            <p className="desc">
                {hotel.current.description}
            </p>
            <div className="features">
              <span>{hotel.current.rooms} Guests</span>
              <span>{hotel.current.rooms-1} Bedrooms</span>
              <span>6 Beds</span>
              <span>4 Baths</span>
            </div>
            <div className="reviews">★ {hotel.current.rating}</div>
          </div>
          <div className="pricing">
            <div className="pricehotel ">${hotel.current.price} <span>night</span></div>
            <button className="tour-btn " >0779131566  Call</button>
          </div>
        </div>
    </div>
     }
    </>
  )
}

export default Hoteldetils