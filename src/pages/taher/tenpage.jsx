import { useRef , useState} from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Seven( {active , setactive , creanciers ,setcreanciers}) {
    let display
    const creanciername = useRef() ;
    const creanciercontact = useRef() ;
    const creancierprice = useRef() ;
    const [editIndex, setEditIndex] = useState(null);
    function handeladd(){
        if ( creanciername.current.value.trim() =='' || creanciercontact.current.value.trim() =='' || creancierprice.current.value.trim() ==''){
            alert('Vous ne pouvez pas saisir un élément vide.');
            return;
        }
        if (editIndex !== null) {
            const updated = [...creanciers];
            updated[editIndex].creanciername = creanciername.current.value;
            updated[editIndex].creanciercontact = creanciercontact.current.value;
            updated[editIndex].creancierprice = creancierprice.current.value;
            setcreanciers(updated);
            setEditIndex(null);
          } else {
            setcreanciers([...creanciers,{creanciername:creanciername.current.value,creanciercontact:creanciercontact.current.value,creancierprice:creancierprice.current.value}])
          }
          creanciername.current.value =''
          creanciercontact.current.value =''
          creancierprice.current.value =''

    }
    function handleDelete(indexdelet){
        setcreanciers((prevItems) => prevItems.filter((_, index) => index !== indexdelet));
        if (editIndex === indexdelet) {
            setEditIndex(null);
            creanciername.current.value =''
            creanciercontact.current.value =''
            creancierprice.current.value =''
        }
    }

    function handleEdit(index){
        creanciername.current.value =  creanciers[index].creanciername  ;
        creanciercontact.current.value =  creanciers[index].creanciercontact ;
        creancierprice.current.value =  creanciers[index].creancierprice ;
        setEditIndex(index);
    }
    function handelsend(){
        setactive(11);
    }
    function handelback(){
        setactive(9)
    }
    if (active ==10){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
               <div className="bod">
                    <h1 className="text-red-500 font-bold">Mes dettes</h1>
                    <p>Vous devez cocher les cases que vous souhaitez faire apparaître sur votre testament</p>
                    <p className="mt-10">Je n’ai aucun jour de jeûne à rattraper</p>
                    <p className="">Je n’ai aucune dette.</p>
                    <p className="">Voici la liste de mes dettes :</p>
                    <label className="mt-5">
                        Nom du créancier :
                        <input type="text" ref={creanciername} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                    </label>
                    <label>
                        Coordonnées du créancier:
                        <input type="text" ref={creanciercontact} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                    </label>
                    <label>
                        Montant de la dette :
                        <input type="text" ref={creancierprice} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                    </label>
                    <button className="add-butt" onClick={handeladd} >{editIndex !== null ? 'Update' : 'Add'}</button>
                    <p className="mt-3">
                        {creanciers.map((item, index) => (
                            <>
                                <p key={index} >
                                {index+1}. {item.creanciername} / contact: {item.creanciercontact} / Montant:{item.creancierprice}
                                </p>
                                <button
                                onClick={() => handleDelete(index)}
                                style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                                }}
                                >
                                Delete
                                </button>
                                <button
                                onClick={() => handleEdit(index)}
                                style={{
                                backgroundColor: 'gray',
                                color: 'white',
                                border: 'none',
                                padding: '3px 7px',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                marginLeft:'10px',
                                marginTop:'5px'
                                }}
                                >
                                Edit
                                </button>
                          </>
                        ))}
                        </p>
                    <p>Si une personne me doit de l’argent, je lui en fais grâce</p>
                </div>
                <div className="navigation-buttons mt-4">
                    <button className="nav-button back-button" onClick={handelback}>Back</button>
                    <button className="nav-button next-button" onClick={handelsend}>Next</button>
                </div>
            </div>
    }
    </>
    );
}
