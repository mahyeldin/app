import React, { useEffect, useRef  ,useState} from 'react'
import Card3 from '../../components/card/card3'
import axios from 'axios';
import Loder from '../../components/loder/loder';


function Favorites() {
  const [runloder,setrunloder] = useState(true)
  const [hh,sethh] = useState(1);
   let hotels = useRef();


  

   useEffect(()=>{
      axios.get('http://localhost:5000/api/places/favorites',{
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      })
      .then((res)=>{
        hotels.current = res.data
        console.log(hotels.current)
        setrunloder(false)
      })
   })

  return (
    <>{ runloder ? <Loder/> :
    <div className='grid grid-cols-3'>
        {  hotels.current.length ==0 ? 'no favorite hotels' :
          hotels.current.map((hotel,i)=>{
            return  <Card3 key={i} id={hotel._id} location={hotel.location} desc={hotel.name} date={hotel.date} price={hotel.price} rating={hotel.rating} image={hotel.images} idlike={i} sethh={sethh}/>
          })
        }
    </div>
      }
    </>
  )
}

export default Favorites