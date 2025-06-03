import { useRef, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";




export default function Seven( {active , setactive , setdistribue , setmesbiens ,mesbiens}) {
    let display 
    const distribue = useRef();
    const distribuecontact = useRef();
    const bien = useRef();
    const [editIndex, setEditIndex] = useState(null);
    function handelsend(){
        setdistribue({distribue:distribue.current.value,distribuecontact:distribuecontact.current.value})
        setactive(12);
    }
    function handleDelete(indexdelet){
        setmesbiens((prevItems) => prevItems.filter((_, index) => index !== indexdelet));
        if (editIndex === indexdelet) {
            setEditIndex(null);
            bien.current.value = '';
        }
    }
    const handeladd = () => {
        const value = bien.current.value.trim();
        if (value === ''){
            alert('Vous ne pouvez pas saisir un élément vide.');
            return;
        } 
    
        
        const exists = mesbiens.some(item => item.toLowerCase() === value.toLowerCase());
        if (exists) {
          alert('Item already exists!');
          return;
        }

        if (editIndex !== null) {
            // Update existing item
            const updated = [...mesbiens];
            updated[editIndex] = value;
            setmesbiens(updated);
            setEditIndex(null);
          } else {
            // Add new item
            setmesbiens([...mesbiens, value]);
          }
      
        bien.current.value = ''; // Clear input
    };
    function handelback(){
        setactive(10)
    }
    const handleEdit = (index) => {
        bien.current.value = mesbiens[index];
        setEditIndex(index);
    };
    if (active ==11){
        display = true
    }

    return (
        <>
        { !display  ?  ""  : 
            <div className="container">
                <div className="bod">
                    <h1 className="text-red-500 font-bold">Mes biens</h1>
                    <p>Vous devez cocher les cases que vous souhaitez faire apparaître sur votre testament</p>
                        <label className="mt-5">
                            Je souhaite que mon héritage soit distribué par :
                            <input type="text" ref={distribue} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <label>
                            Voici ses coordonnées :
                            <input type="text" ref={distribuecontact} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                        </label>
                        <p>Je demande à ce que mes biens soient partagés équitablement conformément à la loi d’Allah.</p>
                        <label>
                            Voici la liste de mes biens :
                            <input type="text" name="" id="" ref={bien} className="mt-1 block w-full border border-gray-300 p-2 rounded" />
                            <button className="add-butt" onClick={handeladd}>{editIndex !== null ? 'Update' : 'Add'}</button>
                        </label>
                        <p className="mt-3">
                        {mesbiens.map((item, index) => (
                            <>
                                <p key={index} >
                                {index+1}. {item}
                                </p>
                                <button
                                onClick={() => handleDelete(index)}
                                style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '3px 7px',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                marginTop:'5px'
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
