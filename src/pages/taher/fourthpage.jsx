import { useRef, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Firstpage( {active , setactive , user, setuser }) {
    const prénom = useRef()
    const nom = useRef()
    const date = useRef()
    const ville = useRef()
    const pays = useRef()
    

   let display 
    function handelsend(){
        // console.log(prénom.current.value)
        // console.log(nom.current.value)
        // console.log(date.current.value)
        // console.log(ville.current.value)
        // console.log(pays.current.value)
        setuser({prénom:prénom.current.value,nom:nom.current.value,date:date.current.value,ville:ville.current.value,pays:pays.current.value})
        setactive(5);
    }
    function handelback(){
        setactive(32)
    }
    if (active ==4){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
                  <div className="bod">
                        <div className="pt-6 space-y-2">
                            <h3 className="text-xl font-bold">MON TESTAMENT</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label>
                                Prénom :
                                <input type="text" ref={prénom} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                            </label>
                            <label>
                                Nom :
                                <input type="text" ref={nom} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                            </label>
                            <label>
                                Date de naissance :
                                <input type="date" ref={date} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                            </label>
                            <label>
                                Ville de naissance :
                                <input type="text" ref={ville} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                            </label>
                            <label>
                                Pays de naissance :
                                <input type="text" ref={pays} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                            </label>
                            </div>
                        </div>
                  </div>
                <div className="navigation-buttons">
                    <button className="nav-button back-button"onClick={handelback}>Back</button>
                    <button className="nav-button next-button" onClick={handelsend}>Next</button>
                </div>
            </div>
    }
    </>
    );
}
