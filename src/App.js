

import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Flights from './Components/Flights.js'

export default function App() {

  return (
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
        <Link to="/flights">Flights</Link>
        </Button>
      </ButtonGroup>
        

        
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/flights">
            <Flights />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  )
}
