import 'bootstrap/dist/css/bootstrap.css'
import logo from '../components/img/bur.png'
import{Navbar, Nav, Container, } from 'react-bootstrap'
import {BrowserRouter as Router, Route ,Switch, Link} from "react-router-dom";
import Sauces from "./Sauces";
import Contact from './Contact';
import Aprops from './Apropos';

import Burger from './Burger';

function Navb() {

  



  return  (
  <Router>
  <div>
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>

      <Navbar.Brand  as={Link} to={"/Burger"}>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
    
      </Navbar.Brand>
   

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/Burger"} >Burger</Nav.Link>
        <Nav.Link as={Link} to={"/Aprops"}>A Propos</Nav.Link>
    
        <Nav.Link as={Link} to={"/Contact"} >Contact </Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>

  <div>
    <Switch>
      <Route path="/aprops">
<Aprops />
      </Route>
      <Route path="/contact">
<Contact />
      </Route>
      <Route path="/burger">
        <Burger />
      

      </Route>
      <Route path="/sauces">
<Sauces />
      </Route>
 
    </Switch>
  </div>
  </Router>
  )
  

}

export default Navb



