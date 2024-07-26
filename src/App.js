

import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Post from './Components/post.js'

export default function App() {

  const MOCK_API_URL = 'https://669e5db39a1bda3680066576.mockapi.io/posts';

  const [users, setUsers] = useState([{}])

const [newUserName, setNewUserName] = useState('')
const [newUserAddress, setNewUserAddress] = useState('')
const [newUserPosition, setNewUserPosition] = useState('')

const [updatedName, setUpdatedName] = useState('')
const [updatedAddress, setUpdatedAddress] = useState('')
const [updatedPosition, setUpdatedPosition] = useState('')

function getUsers() {
  fetch(MOCK_API_URL)
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(error => console.log(error))
}

useEffect(() => {
  getUsers()
}, [])

function deleteUser(id) {
  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(() => getUsers())
    .catch(error => console.log(error))
}
function updateUser(id) {
  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: updatedName,
      address: updatedAddress,
      position: updatedPosition
    })
  })
    .then(() => getUsers())
    .catch(error => console.log(error))
}

function postNewUser() {
  fetch(MOCK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newUserName,
      address: newUserAddress,
      position: newUserPosition
    })
  })
    .then(() => getUsers())
    .catch(error => console.log(error))
}


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
        <Link to="/post">Post</Link>
        </Button>
      </ButtonGroup>
        

        
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/post">
            <post />
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
