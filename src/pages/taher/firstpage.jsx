import { useState } from "react";
import './firstpage.css'
import { Link } from "react-router-dom";

// SVG Icons
const HomeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
);

const DoorIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-4-6h-2v2h2v-2zM7 19V5h10v14H7z" />
    </svg>
);


export default function Firstpage( { hotel , sethotel, active, setactive}) {
    const [selectedOption, setSelectedOption] = useState(null); // 'entire' or 'room'

    const options = [
        {
            id: 'entire',
            title: 'An entire place',
            subtitle: 'Guests have the whole place to themselves',
            icon: <HomeIcon />
        },
        {
            id: 'room',
            title: 'A room',
            subtitle: 'Guests have their own room in a home, plus access to shared spaces.',
            icon: <DoorIcon />
        }
    ];

    const handleOptionClick = (id) => {
        setSelectedOption(id);
    };
    function handelsend(){
        setactive(2);
    }

    const totalProgressSegments = 7; // Based on the image
    const activeProgressSegments = 1; // The first one is active
    let yes = false;
     if (activeProgressSegments === active ){
      yes = true
    }
    return (
        <> { yes &&
            <div className="container">
                <Link to={'/home'}><button className="exit-button">exit</button></Link>
                
              <div className="hhh-1">
                <h1 className="title">What type of place will guests have ?</h1>
                <div className="options-container">
                    {options.map(option => (
                        <div
                            key={option.id}
                            className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option.id)}
                            role="button"
                            tabIndex="0"
                            aria-pressed={selectedOption === option.id}
                        >
                            <div className="option-text">
                                <div className="option-title">{option.title}</div>
                                <div className="option-subtitle">{option.subtitle}</div>
                            </div>
                            <div className="option-icon">
                                {option.icon}
                            </div>
                        </div>
                    ))}
                </div>
               </div> 
              <div className="yyy">
                <div className="progress-bar-container">
                    {Array.from({ length: totalProgressSegments }).map((_, index) => (
                        <div
                            key={index}
                            className={`progress-segment ${index < activeProgressSegments ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>

                <div className="navigation-buttons">
                    <button className="nav-button back-button">Back</button>
                    <button className="nav-button next-button" onClick={handelsend}>Next</button>
                </div>
              </div>
            </div>

            }
        </>
    );
}
