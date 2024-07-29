

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Home from './Components/Home.js';
import About from './Components/About.js';
import FlightList from './components/FlightList';
import AddFlight from './components/AddFlight';

const [flights, setFlights] = useState([]);

useEffect(() => {
  const fetchFlights = async () => {
    const res = await axios.get('http://localhost:5000/flights');
    setFlights(res.data);
  };
  fetchFlights();
}, []);

<FlightList flights={flights} />

const FlightList = ({ flights }) => (
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
 const App = () => {
      return (
      <div className="App">
        <h1>Flight CRUD App</h1>
        <AddFlight />
        <FlightList />
      </div>
    );
  };


    <Container>
    <Router>
      
      <div>
      <ButtonGroup>
        <Button variant='outline-secondary'>
        <Link to="/">Home</Link>
        </Button>
        <Button variant='outline-secondary'>
        <Link to="/about">About</Link>
        </Button>
        <Button variant='outline-secondary'>
        <Link to="/Flights">Flights</Link>
        </Button>
      </ButtonGroup>
        

        
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/flights">
            <post />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  
export default App;
