import React, { useState } from 'react'
import Firstpage from './firstpage'
import Secendpage from './secendpage'
import Thirdpage from './thirdpage'
import Fourthpage from './fourthpage'
import Fifthpage from './fifthpage'
import Finalpage from './finalpage'
import Zeropage from './zeropage'

function Addhouse() {
   const [Hotel,setHotel] = useState({
    name:'',
    location:'',
    description:'',
    price:'',
    rooms:'',
    images:[]
   })
   const [active,setactive] = useState(1)


  return (
    <div>
        <Firstpage  hotel={Hotel} sethotel={setHotel} active={active} setactive={setactive} />
        <Zeropage  hotel={Hotel} sethotel={setHotel} active={active} setactive={setactive} />
        <Secendpage hotel={Hotel}  sethotel={setHotel} active={active} setactive={setactive} />
        <Thirdpage  hotel={Hotel} sethotel={setHotel} active={active} setactive={setactive} />
        <Fourthpage hotel={Hotel} sethotel={setHotel} active={active} setactive={setactive} />
        <Fifthpage hotel={Hotel} sethotel={setHotel} active={active} setactive={setactive} />
        <Finalpage hotel={Hotel} sethotel={setHotel} active={active} setactive={setactive} />
    </div>
  )
}

export default Addhouse