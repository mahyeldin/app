import React, { useEffect , useState , useRef} from 'react'
import './home.css' 
import Navbar from '../../components/navbar/navbar'
import Card from '../../components/card/card'
import Loder from '../../components/loder/loder'
import TravelSearchBar from '../../components/cherif/SearchBarComp/TravelSearchBar'
import NavigationTabs from '../../components/cherif/NavigationTabs'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Home() {
  const [loading, setLoading] = useState(true);
  const [filtred, setfiltred] = useState('');
  const hotelCards = useRef();
  if (!filtred){
    setfiltred(' ');
  }
   useEffect(()=>{
    axios.get('http://localhost:5000/api/places/')
    .then((res)=>{
      console.log(res.data);
      hotelCards.current = res.data;
      setLoading(false)

    })
   },[])
  return (
    <div className='home'>
      <div className='flex items-center justify-between'>
          <div className="  top-1 left-10 bg-transparent  h-[60px] z-50 p-0  mt-5">
            <NavigationTabs />
          </div>
          <div className=" top-1 right-20   w-[700px] h-[5px]  z-50 p-0 mt-5">
            <TravelSearchBar setfiltred={setfiltred} />
          </div>  
      </div>
      {
        loading ? <Loder/> :
        <div className="cards mt-40">
            {
hotelCards.current
        .filter(hotel => {
          // Show all if no search input
          if (!filtred || filtred.trim() === "") return true;

          // Filter by location (case-insensitive)
          return (
            hotel.location &&
            hotel.location.toLowerCase().includes(filtred.toLowerCase())
          );
        })
        .map((hotel, i) => (
          <Card
            key={i}
            id={hotel._id}
            location={hotel.location}
            desc={hotel.name}
            date={hotel.date}
            price={hotel.price}
            rating={hotel.rating}
            image={hotel.images}
            idlike={hotel._id}
          />
        ))

            }
       </div>
      }
      <Link to='/addhouse'><button className="add-button">+</button></Link>
    </div>
  )
}

export default Home