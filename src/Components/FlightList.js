import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flight from './Flight';
import deleteDataFromDbJson from './Delete';
const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetchFlights();
    console.log("initial load")
  }, []);
  
  const fetchFlights = async () => {
    const res = await axios.get('http://localhost:3005/flights');
    setFlights(res.data)
    console.log("all Flights: ", res)
  };
  console.log(flights)
  return (
    <div>
      <h2>Flight List</h2>
      <ul>
        {flights && flights.map((item) => (
          <li key={item.id}>
            <Flight flightInfo={item}/>
          </li>
        ))}
      </ul>
    </div>
  );
};


function deleteFlight(id) {
  deleteDataFromDbJson(id)
}
export default FlightList;