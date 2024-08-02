import React from 'react';
import axios from 'axios';
import { useState } from 'react';







function Update() {
  const [flights, setFlights] = useState([]);
  
  
  const [updateFlight, setUpdateFlight] = useState([]);
      const [updateFlightNumber, setUpdateFlightNumber] = useState('');
      const [updateDestination, setUpdateDestination] = useState('');
      const [updateDeparture, setUpdateDeparture] = useState('');
      const [updateDepartureTime, setUpdateDepartureTime] = useState('');
  
  
  
      function postFlight(){}

      return (
        <>
        <div className="App">
            <>
            <form>
                <h3>Post new flight form</h3>
                <label>flightNumber</label>
                <input onChange={(e) => setUpdateFlightNumber(e.target.value)}></input>
                <label>Destination</label>
                <input onChange={(e) => setUpdateDestination(e.target.value)}></input>
                <label>Departure</label>
                <input onChange={(e) => setUpdateDeparture(e.target.value)}></input>
                <label>Departure Time</label>
                <input onChange={(e) => setUpdateDepartureTime(e.target.value)}></input>
                <button onClick={(e) => postFlight(e)}>Submit</button>
            </form>
            </>
        </div>
          

      {users.map((flights, index) => {
        return (
          <div key={index}>
              <div className="user">
                  <div>Flight Number: {user.flightNumber}</div><br></br>
                  <div>Destination: {user.destination}</div><br></br>
                  <div>Departure: {user.departure}</div><br></br>
                  <div>Departure Time: {user.departureTime}</div><br></br>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
              <form>
                  <h3>Update flight form</h3>
                  <label>flight Number</label>
                  <input onChange={(e) => setUpdatedFlightNumber(e.target.value)}></input>
                  <label>departure</label>
                  <input onChange={(e) => setUpdatedDeparture(e.target.value)}></input>
                  <label>destination</label>
                  <input onChange={(e) => setUpdatedDestination(e.target.value)}></input>
                  <label>departure Time</label>
                  <input onChange={(e) => setUpdatedDepartureTime(e.target.value)}></input>
                  <button onClick={(e) => updateflight(user)}>Submit</button>
              </form>
          </div>
        )
      })}
    </> 
  );
}

export default Update;