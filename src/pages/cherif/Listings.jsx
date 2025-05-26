import React, { useRef, useState } from 'react'
import Card from '../../components/card/card';
import { useEffect  } from 'react';
import Loder from '../../components/loder/loder'
import axios from 'axios';

function Listings() {
  const [runloder,setrunloder] = useState(true)
   let hotels = useRef();
   useEffect(()=>{
    axios.get('http://localhost:5000/api/places/mine',{
       headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then((res)=>{
       hotels.current = res.data
       console.log(hotels.current)
       setrunloder(false)
    })
   },[])

  return (
    <>{ runloder ? <Loder/> :
    <div className='grid grid-cols-3'>
        {  
          hotels.current.length == 0 ? 'no listing hotels' :
          hotels.current.map((hotel,i)=>{
            return  <Card key={i} id={hotel._id} location={hotel.location} desc={hotel.name} date={hotel.date} price={hotel.price} rating={hotel.rating} image={hotel.images} idlike={i}/>
          })
        }
       

    </div>
      }
    </>
  )
}

export default Listings