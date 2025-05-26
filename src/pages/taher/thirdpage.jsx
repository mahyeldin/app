import React, { useState, Fragment } from 'react';
import './thirdpage.css'
import { Link } from "react-router-dom";

// SVG Icons for Stepper
const MinusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="confirm-stepper-icon">
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const PlusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="confirm-stepper-icon">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

// Stepper Sub-Component
const Stepper = ({ label, count, onIncrement, onDecrement }) => {
    return (
        <div className="confirm-stepper-row">
            <span className="confirm-stepper-label">{label}</span>
            <div className="confirm-stepper-controls">
                <button
                    className="confirm-stepper-button"
                    onClick={onDecrement}
                    disabled={count === 0}
                    aria-label={`Decrease ${label.toLowerCase()}`}
                >
                    <MinusIcon />
                </button>
                <span className="confirm-stepper-count" aria-live="polite">{count}</span>
                <button
                    className="confirm-stepper-button"
                    onClick={onIncrement}
                    aria-label={`Increase ${label.toLowerCase()}`}
                >
                    <PlusIcon />
                </button>
            </div>
        </div>
    );
};

// Main Page Component
export default function Thirdpage( { hotel , sethotel , active, setactive} ) {
    const [guestCounts, setGuestCounts] = useState({
        adults1: 0, // First "Adults"
        children: 0,
    });

    const handleCountChange = (guestType, delta) => {
        setGuestCounts(prevCounts => ({
            ...prevCounts,
            [guestType]: Math.max(0, prevCounts[guestType] + delta),
        }));
    };
    const guestItems = [
        { id: 'adults1', label: 'Adults' },
        { id: 'children', label: 'Children' },
    ];
    function handelsend(){
        sethotel({...hotel,rooms:guestCounts.adults1+ guestCounts.children})
        setactive(5);
    }
    function handelback(){
        setactive(3)
    }
    const totalProgressSegments = 7;
    const activeProgressSegments = 4; // As per image (4 dark segments)
    let yes = false;
     if (activeProgressSegments === active ){
      yes = true
    }
    return (
        <> { yes &&
        <div className="container">
            <header className="page-header">
                <Link to={'/home'}><button className="exit-button">exit</button></Link>
            </header>
           <div className="hhh">
            <main className="confirm-main-content">
                <h1 className="confirm-page-title">Confirm your address</h1>

                <div className="confirm-guest-selector-card">
                    {guestItems.map((item, index) => (
                        <Fragment key={item.id}>
                            <Stepper
                                label={item.label}
                                count={guestCounts[item.id]}
                                onIncrement={() => handleCountChange(item.id, 1)}
                                onDecrement={() => handleCountChange(item.id, -1)}
                            />
                            {index < guestItems.length - 1 && <hr className="confirm-stepper-divider" />}
                        </Fragment>
                    ))}
                </div>
            </main>
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
                <button className="nav-button back-button" onClick={handelback}>Back</button>
                <button className="nav-button next-button" onClick={handelsend}>Next</button>
            </div>
           </div>
        </div>
        }
    </>
    );
}