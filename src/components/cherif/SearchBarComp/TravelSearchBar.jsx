import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion"; // Correct import
import { useState } from "react";
import { Search } from "lucide-react";
import Calendar from "./Calendar"; // Import Calendar component
import PassengerCounter from "./PassengerCounter"; // Import PassengerCounter 
// component
import GithubCardSkew from "../hooks/github-card-skew"; // Import GithubCardSkew component
// import { useCallback, useRef } from "react";

export default function TravelSearchBar( { setfiltred } ) {
  const [isOpen, setIsOpen] = useState(true);
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [showPassengerCounter, setShowPassengerCounter] = useState(false); // State to control passenger counter visibility
  const [x, setX] = useState(0)
  

  const handleFieldFocus = (field) => {
    setActiveField(field);
    if (field === "checkin" || field === "checkout") {
      setShowCalendar(true);
     setShowPassengerCounter(false); // Hide passenger counter when calendar is shown
      setIsOpen(true); // Show calendar when "Check in" or "Check out" is clicked
    } else if (field === "who") {
      setShowCalendar(false); // Hide calendar when "Who" is clicked

      // Toggle passenger counter when "Who" is clicked
      setShowPassengerCounter(!showPassengerCounter);
      console.log();
    }
  };

  const handleFieldBlur = () => {
    setActiveField(null);
    // Optionally, you can hide the calendar or passenger counter when the field loses focus
    // setShowCalendar(false);
    // setShowPassengerCounter(false);
  };
  function handelsearch(){
    setfiltred(destination)
  }

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-lg p-1 md:p-0 ">
        {/* Where */}
        <div
          className={`flex items-center flex-1 w-full md:w-auto px-4 py-3 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300 ${
            activeField === "where" ? "bg-gray-100" : ""
          }`}
          onClick={() => handleFieldFocus("where")}
          onMouseEnter={() => setActiveField("where")}
          onMouseLeave={handleFieldBlur}
        >
          <div className="flex-1">
            <div className="text-sm font-medium text-black">Where</div>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-500 bg-transparent outline-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={() => handleFieldFocus("where")}
              onBlur={handleFieldBlur}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className={`hidden md:block w-px h-8 bg-gray-400 mx-1 transition-opacity duration-300 ${
            activeField === "where" || activeField === "checkin"
              ? "opacity-0"
              : "opacity-100"
          }`}
        ></div>

        {/* Check in */}
        <div
          className={`flex items-center transition-colors duration-300 flex-1 w-full md:w-auto px-4 py-3 rounded-full cursor-pointer hover:bg-gray-200 ${
            activeField === "checkin" ? "bg-gray-100" : ""
          }`}
          onClick={() => handleFieldFocus("checkin")}
          onMouseEnter={() => setActiveField("checkin")}
          onMouseLeave={handleFieldBlur}
        >
          <div className="flex-1">
            <div className="text-sm font-medium text-black">Check in</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent outline-none"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              onFocus={() => handleFieldFocus("checkin")}
              onBlur={handleFieldBlur}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className={`hidden md:block w-px h-8 bg-gray-400 mx-1 transition-opacity duration-300 ${
            activeField === "checkin" || activeField === "checkout"
              ? "opacity-0"
              : "opacity-100"
          }`}
        ></div>

        {/* Check out */}
        <div
          className={`flex items-center transition-colors duration-300 flex-1 w-full md:w-auto px-4 py-3 rounded-full cursor-pointer hover:bg-gray-200 ${
            activeField === "checkout" ? "bg-gray-100" : ""
          }`}
          onClick={() => handleFieldFocus("checkout")}
          onMouseEnter={() => setActiveField("checkout")}
          onMouseLeave={handleFieldBlur}
        >
          <div className="flex-1">
            <div className="text-sm font-medium text-black">Check out</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent outline-none"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              onFocus={() => handleFieldFocus("checkout")}
              onBlur={handleFieldBlur}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className={`hidden md:block w-px h-8 bg-gray-400 mx-1 transition-opacity duration-300 ${
            activeField === "checkout" || activeField === "who"
              ? "opacity-0"
              : "opacity-100"
          }`}
        ></div>

        {/* Who */}
        <div
          className={`flex items-center flex-1 w-full md:w-auto px-4 py-3 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300 ${
            activeField === "who" ? "bg-gray-100" : ""
          }`}
        
        >
          <div className="flex-1">
            <div className="text-sm font-medium text-black">Who</div>
            <input
              type="text"
              placeholder="Add guests"
              className="w-full text-sm text-gray-500 bg-transparent outline-none"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              onFocus={() => handleFieldFocus("who")}
              onBlur={handleFieldBlur}
            />
          </div>

          {/* Search Button */}
          <div className="ml-2">
            <button className="bg-blue-100 text-blue-900 p-1 rounded-full flex items-center justify-center transition-colors duration-300" onClick={handelsearch}>
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Render Calendar below the search bar */}
      {showCalendar && (
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            
            className="mt-4"
          >
            <div className="transform scale-90 mx-auto">
              {" "}
              {/* Scale down without shrinking text */}
             

              <Calendar isOpen={isOpen} 
               setShowPassengerCounter={setShowPassengerCounter}
               setShowCalendar={setShowCalendar} setIsOpen={setIsOpen} />
             
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Render PassengerCounter below the search bar */}
      {showPassengerCounter && (
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={showCalendar?{ x }:{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          
            className="mt-4"
          >
            <div className="transform scale-90 mx-auto">
              {" "}
              {/* Scale down without shrinking text */}
              <PassengerCounter />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
