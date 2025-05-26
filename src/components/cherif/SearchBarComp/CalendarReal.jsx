import { useState } from "react";
// import React, { useCallback, useRef } from "react";
export default function Calendar({isOpen, setIsOpen,setShowCalendar}) {
//   const [isOpen, setIsOpen] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const months = ["January", "February", "March", "April", "May", "June", 
                 "July", "August", "September", "October", "November", "December"];
  
  // Generate calendar for a specific month/year
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let date = 1;
    const calendar = [];
    
    // Create weeks
    for (let i = 0; i < 6; i++) {
      const week = [];
      
      // Fill days in a week
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || date > daysInMonth) {
          week.push(null); // Empty cell
        } else {
          week.push(date);
          date++;
        }
      }
      
      calendar.push(week);
      if (date > daysInMonth) break;
    }
    
    return calendar;
  };
  
  const leftCalendar = generateCalendar(currentMonth, currentYear);
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  const rightCalendar = generateCalendar(nextMonth, nextMonthYear);
  
  const handleClose = () => {
    setIsOpen(false);
    setShowCalendar(false);
  };
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  const handleDayClick = (day, calendarIndex) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(new Date(
        calendarIndex === 0 ? currentYear : nextMonthYear,
        calendarIndex === 0 ? currentMonth : nextMonth,
        day
      ));
      setEndDate(null);
    } else {
      const newEndDate = new Date(
        calendarIndex === 0 ? currentYear : nextMonthYear,
        calendarIndex === 0 ? currentMonth : nextMonth,
        day
      );
      
      // Make sure end date is after start date
      if (newEndDate >= startDate) {
        setEndDate(newEndDate);
      } else {
        setEndDate(startDate);
        setStartDate(newEndDate);
      }
    }
  };
  
  const isDateSelected = (day, calendarIndex) => {
    if (!day || !startDate) return false;
    
    const currentDate = new Date(
      calendarIndex === 0 ? currentYear : nextMonthYear,
      calendarIndex === 0 ? currentMonth : nextMonth,
      day
    );
    
    if (startDate && !endDate) {
      return currentDate.getTime() === startDate.getTime();
    }
    
    if (startDate && endDate) {
      return (
        currentDate.getTime() === startDate.getTime() ||
        currentDate.getTime() === endDate.getTime() ||
        (currentDate > startDate && currentDate < endDate)
      );
    }
    
    return false;
  };
  
  const isStartDate = (day, calendarIndex) => {
    if (!day || !startDate) return false;
    
    const currentDate = new Date(
      calendarIndex === 0 ? currentYear : nextMonthYear,
      calendarIndex === 0 ? currentMonth : nextMonth,
      day
    );
    
    return currentDate.getTime() === startDate.getTime();
  };
  
  const isEndDate = (day, calendarIndex) => {
    if (!day || !endDate) return false;
    
    const currentDate = new Date(
      calendarIndex === 0 ? currentYear : nextMonthYear,
      calendarIndex === 0 ? currentMonth : nextMonth,
      day
    );
    
    return currentDate.getTime() === endDate.getTime();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-4xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-gray-600 text-lg">
            Start date <span className="inline-block mx-2">→</span> End date
          </div>
          <button 
            onClick={handleClose}
            className="text-black text-2xl font-light"
          >
            ×
          </button>
        </div>
        
        <div className="border-t border-gray-200 my-4"></div>
        
        {/* Calendar Section */}
        <div className="flex space-x-4">
          {/* Left Calendar */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={handlePrevMonth}
                className="text-gray-600 text-xl"
              >
                &lt;
              </button>
              <div className="text-gray-600 text-lg">
                {months[currentMonth]} {currentYear}
              </div>
              <div className="w-6"></div> {/* Spacer */}
            </div>
            
            <div className="border-t border-gray-200 mt-2 mb-4"></div>
            
            <div className="grid grid-cols-7 gap-1">
              {/* Days of Week */}
              {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((day, i) => (
                <div key={i} className="text-center py-2 text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar Days */}
              {leftCalendar.flatMap((week, weekIndex) => 
                week.map((day, dayIndex) => (
                  <button
                    key={`left-${weekIndex}-${dayIndex}`}
                    className={`text-center py-2 text-sm 
                      ${!day ? 'invisible' : 'hover:bg-gray-100 rounded-full'}
                      ${isDateSelected(day, 0) ? 'bg-blue-100' : ''}
                      ${isStartDate(day, 0) ? 'bg-blue-500 text-white hover:bg-blue-600 rounded-full' : ''}
                      ${isEndDate(day, 0) ? 'bg-blue-500 text-white hover:bg-blue-600 rounded-full' : ''}
                    `}
                    onClick={() => day && handleDayClick(day, 0)}
                    disabled={!day}
                  >
                    {day}
                  </button>
                ))
              )}
            </div>
          </div>
          
          {/* Right Calendar */}
          <div className="flex-1 border-l border-gray-200 pl-4">
            <div className="flex justify-between items-center mb-6">
              <div className="w-6"></div> {/* Spacer */}
              <div className="text-gray-600 text-lg">
                {months[nextMonth]} {nextMonthYear}
              </div>
              <button 
                onClick={handleNextMonth}
                className="text-gray-600 text-xl"
              >
                &gt;
              </button>
            </div>
            
            <div className="border-t border-gray-200 mt-2 mb-4"></div>
            
            <div className="grid grid-cols-7 gap-1">
              {/* Days of Week */}
              {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((day, i) => (
                <div key={i} className="text-center py-2 text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar Days */}
              {rightCalendar.flatMap((week, weekIndex) => 
                week.map((day, dayIndex) => (
                  <button
                    key={`right-${weekIndex}-${dayIndex}`}
                    className={`text-center py-2 text-sm 
                      ${!day ? 'invisible' : 'hover:bg-gray-100 rounded-full'}
                      ${isDateSelected(day, 1) ? 'bg-blue-100' : ''}
                      ${isStartDate(day, 1) ? 'bg-blue-500 text-white hover:bg-blue-600 rounded-full' : ''}
                      ${isEndDate(day, 1) ? 'bg-blue-500 text-white hover:bg-blue-600 rounded-full' : ''}
                    `}
                    onClick={() => day && handleDayClick(day, 1)}
                    disabled={!day}
                  >
                    {day}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 