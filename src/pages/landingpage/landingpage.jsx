import React from 'react'
import './landingpage.css'
import Card2 from '../../components/card/card2'
import img1 from '../../img/img13.jpeg'
import img2 from '../../img/img23.jpeg'
import imgfeed1 from '../../img/imgfeed1.jpeg'
import imgfeed2 from '../../img/imgfeed2.jpeg'
import imgfeed3 from '../../img/imgfeed3.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

function Landingpage() {
    const hotelCards = [
        {
          id: 1,
          location: "Paris, France",
          description: "10 min walk to Eiffel Tower",
          date: "Apr 9–14",
          price: "$120 night",
          rating: 4.9,
          imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
        },
        {
          id: 2,
          location: "Dubai, UAE",
          description: "Luxury skyline suite",
          date: "May 1–6",
          price: "$240 night",
          rating: 5,
          imageUrl: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1"
        },
        {
          id: 3,
          location: "Tokyo, Japan",
          description: "Modern hotel with city view",
          date: "Jun 10–15",
          price: "$170 night",
          rating: 4.8,
          imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
    ]
    localStorage.clear()
  return (
    <>
    <div className="hero-container" id='home'>
      <nav className="navbar-landing">
        <div className="logo-landing"><strong>We <br />Rent</strong></div>
        <ul className="nav-links">
          <AnchorLink href='#home' style={{color:'black'}}><li>Home</li></AnchorLink>
          <AnchorLink href='#Propertylist' offset="150" style={{color:'black'}}><li>Property list</li></AnchorLink>
          <AnchorLink href='#testimonials' offset="100" style={{color:'black'}}><li>Testimonials</li></AnchorLink>
          <AnchorLink href='#Aboutus' offset="100" style={{color:'black'}}><li>About us</li></AnchorLink>
        </ul>
        <div className="auth-buttons">
          <Link to='/register'><button className="signup-btn">Sign up</button></Link>
          <Link to='/login'><button className="login-btn">Login</button></Link>
        </div>
      </nav>

      <div className="hero-content">
        <h1>Find peace in<br />the perfect <br/> place</h1>
        <p style={{fontSize:'13px'}}>Discover comfortable and affordable rentals<br />tailored to your lifestyle</p>
        <button className="rent-now-btn">Rent Now</button>
      </div>
    </div>
    <div className="bod">
        <h5 style={{textAlign:'center'}}><bold>Spaces in top Cities</bold></h5>
        <div className="cardslanding" id='Propertylist'>
            {
              hotelCards.map((hotel)=>{
                 return  <Card2 key={hotel.id} location={hotel.location} desc={hotel.description} date={hotel.date} price={hotel.price} rating={hotel.rating} image={hotel.imageUrl} id={hotel.id}/>
              })
            }
        </div>
        <div className="auther">
            <div className="autherleft">
                <h1><bold>Search rooms based <br /> on your preferences</bold></h1>
                <p>. Location Filters: Search by city, neighborhood, <br /> or proximity to key landmarks. <br /></p>
                <p>. Price Range: Set your budget and find rooms <br /> that fit within your financial plan. <br /></p>
                <p>. Room Type: Choose from shared rooms,<br /> private rooms,  or entire apartments based on <br /> your lifestyle and preferences. <br /></p>
            </div>
            <div className="autherright">
                <div className="authtimg" style={{backgroundImage:`url(${img1})`}}>
                </div>
                <div className="authtimg" style={{backgroundImage:`url(${img1})`}}>
                </div>
                <div className="authtimg" style={{backgroundImage:`url(${img2})`}}>
                </div>
            </div>
        </div>
        <h5 style={{textAlign:'center', marginTop:'100px'}}><bold>Testimonials</bold></h5>
        <div className="feedback" id='testimonials'>
           <div className="feed">
              <p>Finding my apartment was so easy! The <br /> listings were clear, and the process was <br /> smooth from start to finish."</p>
              <div className="rate">
                <img src={imgfeed1} alt="" style={{width:'50px',height:'55px',borderRadius:'45%'}} />
                <div className="nandr">
                    <div  style={{fontSize:'15px',fontWeight:'700'}}><bold >same</bold></div>
                    <div className='stars'>
                        ★★★★★
                    </div>
                </div>
              </div>
           </div>
           <div className="feed">
              <p>Finding my apartment was so easy! The <br /> listings were clear, and the process was <br /> smooth from start to finish."</p>
              <div className="rate">
                <img src={imgfeed2} alt="" style={{width:'50px',height:'55px',borderRadius:'45%'}} />
                <div className="nandr">
                    <div  style={{fontSize:'15px',fontWeight:'700'}}><bold >jonh</bold></div>
                    <div className='stars'>
                        ★★★★★
                    </div>
                </div>
              </div>
           </div>
           <div className="feed">
              <p>Finding my apartment was so easy! The <br /> listings were clear, and the process was <br /> smooth from start to finish."</p>
              <div className="rate">
                <img src={imgfeed3} alt="" style={{width:'50px',height:'55px',borderRadius:'45%'}} />
                <div className="nandr">
                    <div  style={{fontSize:'15px',fontWeight:'700'}}><bold >alan</bold></div>
                    <div className='stars'>
                        ★★★★★
                    </div>
                </div>
              </div>
           </div>
        </div>
        <div className='beforelast' id='Aboutus'>
           <div className="qsm">
              <div style={{display:'flex',alignItems:'center',gap:'10px', marginBottom:'7px'}}> <div className="dot-qsm active-dot"></div> <span style={{fontWeight:'700'}}>Who we are</span></div>
              <div style={{display:'flex',alignItems:'center',gap:'10px', marginBottom:'7px'}}> <div className="dot-qsm"></div> <span style={{color:'gray'}}>Seamless Renting Experience</span></div> 
              <div style={{display:'flex',alignItems:'center',gap:'10px', marginBottom:'7px'}}> <div className="dot-qsm"></div> <span style={{color:'gray'}}>Trust & Support You Can Rely On</span></div>  
           </div>
           <div className="boxq">
              <div className="blur-bg"></div>
              <div className="cont">
                <h3>who we are</h3>
                <p style={{fontSize:'12px'}}>We are a dedicated team passionate about <br /> making renting simple, stress-free, and <br /> accessible. Our mission is to connect renters <br /> with their ideal homes through a seamless and <br /> trustworthy platform</p>
              </div>
           </div>
        </div>
    </div>
    
    <div className="hero-footer-container">
      <div className="hero-footer-content">
        <Link to='/login'><button className="hero-button">Rent Now</button></Link>
        <h1>Your Dream Rental, Just a<br />Click Away</h1>
      </div>

      <div className="hero-footer-blur">
        <div className="footer-column">
          <h4>First column</h4>
          <p>Home</p>
          <p>Property list</p>
          <p>Testimonials</p>
          <p>About us</p>
        </div>
        <div className="footer-column">
          <h4>Talk to us</h4>
          <p>support@rb.com</p>
          <p>+98 2399 1145</p>
          <p>Facebook</p>
        </div>
        <div className="footer-column">
          <h4>Subscribe</h4>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter email" />
            <button>➤</button>
          </div>
          <small>Join our newsletter to stay up to date on features and releases</small>
        </div>
      </div>
    </div>

   </>
  )
}

export default Landingpage