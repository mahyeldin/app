import React, { useState, useRef } from 'react';
import './fourthpage.css'
import { Link } from "react-router-dom";

// SVG Icon for the upload area
const UploadIcon = () => (
    <svg className="photos-upload-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.6667 16H13.3333C10.3878 16 8 18.3878 8 21.3333V42.6667C8 45.6122 10.3878 48 13.3333 48H50.6667C53.6122 48 56 45.6122 56 42.6667V21.3333C56 18.3878 53.6122 16 50.6667 16Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.6667 29.3333C24.8758 29.3333 26.6667 27.5424 26.6667 25.3333C26.6667 23.1242 24.8758 21.3333 22.6667 21.3333C20.4576 21.3333 18.6667 23.1242 18.6667 25.3333C18.6667 27.5424 20.4576 29.3333 22.6667 29.3333Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 37.3333L45.3333 26.6667L13.3333 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Plus icon part */}
        <circle cx="45" cy="19" r="10" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M45 15V23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M41 19H49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export default function Fourthpage( { hotel , sethotel , active, setactive} ) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        // Handle file selection logic here
        // For now, just logging them
        if (event.target.files) {
            setSelectedFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files)]);
            console.log(Array.from(event.target.files));
        }
    };

    const handleUploadAreaClick = () => {
        fileInputRef.current?.click();
    };
    function handelsend(){
        sethotel({...hotel,images:selectedFiles})
        setactive(6);
    }
    function handelback(){
        setactive(4)
    }

    const totalProgressSegments = 7;
    const activeProgressSegments = 5; // As per image (5 dark segments)
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
            <main className="photos-main-content">
                <h1 className="photos-page-title">Add some Photos of your house</h1>

                <div
                    className="photos-upload-area"
                    onClick={handleUploadAreaClick}
                    onKeyPress={(e) => e.key === 'Enter' && handleUploadAreaClick()}
                    role="button"
                    tabIndex="0"
                    aria-label="Upload photos"
                >
                    <UploadIcon />
                    {/* You can add text here too, e.g., "Drag & drop or click to upload" */}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    multiple // Allow multiple file selection
                    accept="image/*" // Accept only image files
                />

                {/* Optional: Display selected file names or previews */}
                {selectedFiles.length > 0 && (
                    <div className="photos-selected-files-preview">
                        <h4>Selected Files:</h4>
                        <ul>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
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