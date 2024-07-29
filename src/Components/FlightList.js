import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const res = await axios.get('http://localhost:5000/flights');
      setFlights(res.data);
    };
    fetchFlights();
  }, []);

  return (
    <div>
      <h2>Flight List</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.flightNumber} - {flight.departure} to {flight.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;