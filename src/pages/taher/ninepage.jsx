import { useRef } from "react";
import './style.css'
import { Link } from "react-router-dom";


export default function Seven( {active , setactive , setcimetiere , setresponsable}) {
    let display 
    const cimetiere =useRef();
    const responsable =useRef();
    const responsablecontact =useRef();
    
    function handelsend(){
        if ( responsable.current.value.trim() =='' || responsablecontact.current.value.trim() =='' || cimetiere.current.value.trim() =='' ){
            alert('Vous ne pouvez pas saisir un élément vide.');
            return;
       }        
        setcimetiere({cimetiere:cimetiere.current.value})
        setresponsable({responsable:responsable.current.value,responsablecontact:responsablecontact.current.value})
        setactive(10);
    }
    function handelback(){
        setactive(8)
    }
    if (active ==9){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
                    <div className="bod">
                        <h1 className="text-red-500 font-bold">Mon enterrement</h1>
                        <p>Vous devez cocher les cases que vous souhaitez faire apparaître sur votre testament</p>
                        <p className="mt-10">Je souhaite être enterré le plus rapidement possible au cimetière le plus proche de mon lieu de décès.</p>
                        <p className="mt-10">Si je meurs dans un pays musulman, je choisis d’être enterré dans ce même pays le plus rapidement possible pour éviter les contraintes à mes proches.</p>
                        <label className="mt-5">
                            Sinon, je souhaite être enterré au cimetière de :
                            <input type="text" ref={cimetiere} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            je souhaite que mon rapatriement soit géré par:
                            <input type="text" ref={responsable} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Voici ses coordonnées :
                            <input type="text" ref={responsablecontact} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <p>Quel que soit l’endroit où je suis enterré, je demande à ce que ma tombe soit conforme à la sunna : pas de décoration,
                            pas de contours en ciment, pas de pierre tombale avec mon nom. Uniquement une tombe légèrement bombé avec une
                            pierre au niveau de ma tête et une pierre au niveau de mes pieds</p>
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
