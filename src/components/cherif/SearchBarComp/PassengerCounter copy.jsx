import { useState } from 'react';

export default function PassengerCounter() {
  const [counts, setCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });

  const increment = (type) => {
    setCounts(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const decrement = (type) => {
    if (counts[type] > 0) {
      setCounts(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    }
  };

  const CounterItem = ({ type, label, subtitle }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h3 className="text-lg font-medium">{label}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center">
          <button 
            onClick={() => decrement(type)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 focus:outline-none"
          >
            -
          </button>
          <span className="mx-4 w-4 text-center">{counts[type]}</span>
          <button 
            onClick={() => increment(type)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
      <hr className="border-gray-200 mt-4" />
    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-6 max-w-md mx-auto shadow-lg">
      <CounterItem 
        type="adults" 
        label="Adults" 
        subtitle="Ages 13 or above" 
      />
      
      <CounterItem 
        type="children" 
        label="Children" 
        subtitle="Ages 2 - 12" 
      />
      
      <CounterItem 
        type="infants" 
        label="Adults" 
        subtitle="Under 2" 
      />
      
      <CounterItem 
        type="pets" 
        label="Pets" 
        subtitle="Service animals" 
      />
    </div>
  );
}