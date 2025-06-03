import { useRef } from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Seven( {active , setactive , setlaveuse}) {
   let display 
   const Laveuse =useRef();
   const laveusecontact = useRef();
    function handelsend(){
        if ( Laveuse.current.value.trim() =='' || laveusecontact.current.value.trim() ==''  ){
            alert('Vous ne pouvez pas saisir un élément vide.');
            return;
       }        
        setlaveuse({ laveuse:Laveuse.current.value, laveusecontact:laveusecontact.current.value})
        setactive(8);
    }
    function handelback(){
        setactive(6)
    }
    if (active ==7){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
                <div className="bod">
                    <h1 className="text-red-500 font-bold">Ma préparation</h1>
                    <p>Vous devez cocher les cases que vous souhaitez faire apparaître sur votre testament</p>
                        <label>
                            Je souhaite que mon corps soit lavé par :
                            <input type="text" ref={Laveuse} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Voici ses coordonnées :
                            <input type="text" ref={laveusecontact} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
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
