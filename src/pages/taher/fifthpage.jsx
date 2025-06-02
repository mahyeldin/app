import { useState ,useRef } from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Firstpage( {active , setactive , user , setuser}) {
    const prénompere = useRef()
    const nompere = useRef()
    const prénommere = useRef()
    const nommere = useRef()
    let display 
    function handelsend(){
        setuser({...user,prénompere:prénompere.current.value,nompere:nompere.current.value,prénommere:prénommere.current.value,nommere:nommere.current.value})
        setactive(6);
    }
    function handelback(){
        setactive(4)
    }
    if (active ==5){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
                    <div className="pt-6 space-y-2">
                        <h3 className="text-xl font-bold">MON TESTAMENT</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label>
                            Nom du père: 
                            <input type="text" ref={nompere} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Prénom du père :
                            <input type="text" ref={prénompere} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Nom de la mère :
                            <input type="text" ref={nommere} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Prénom de la mère :
                            <input type="text" ref={prénommere} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        </div>
                    </div>
                <div className="navigation-buttons">
                    <button className="nav-button back-button" onClick={handelback}>Back</button>
                    <button className="nav-button next-button" onClick={handelsend}>Next</button>
                </div>
            </div>
    }
    </>
    );
}
