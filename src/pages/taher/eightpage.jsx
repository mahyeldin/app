import { useState , useRef } from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Seven( {active , setactive , setimam}) {
   let display 
    const imam = useRef();
    const imamcontact = useRef();
    function handelsend(){
        if ( imam.current.value.trim() =='' || imamcontact.current.value.trim() =='' ){
            alert('Vous ne pouvez pas saisir un élément vide.');
            return;
       }
        setimam({imam:imam.current.value,imamcontact:imamcontact.current.value})
        setactive(9);
    }
    function handelback(){
        setactive(7)
    }
    if (active ==8){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
                <div className="bod">
                    <h1 className="text-red-500 font-bold">Ma salat janaza</h1>
                    <p>Vous devez cocher les cases que vous souhaitez faire apparaître sur votre testament</p>
                        <label>
                            je souhaite que la salat Janaza soit dirigée par : 
                            <input type="text" ref={imam} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Voici ses coordonnées :
                            <input type="text" ref={imamcontact}  className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <p>Je demande qu’aucune femme ne suive le convoi funéraire ni ne visite ma tombe.</p>
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
