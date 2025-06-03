import { useRef } from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Seven( {active , setactive ,settoday}) {
   let display 
   const location = useRef()
    function handelsend(){
        if ( location.current.value.trim() =='' ){
            alert('Vous ne pouvez pas saisir un élément vide.');
            return;
       }    
        settoday({location:location.current.value})
        setactive(14);
    }
    function handelback(){
        setactive(12)
    }
    if (active ==13){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
             <div className="bod">
                <h1 className="text-red-500 font-bold">Mon testament</h1>
                <p>Vous devez cocher les cases que vous souhaitez faire apparaître sur votre testament</p>
                    <label className="mt-5">
                        Fait à :
                        <input type="text" ref={location} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                    </label>
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
