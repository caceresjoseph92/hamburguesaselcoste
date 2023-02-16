import React from 'react'
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Menu from './Menu';
import { LinkContainer } from 'react-router-bootstrap';
import categorys from "../data/category.json"

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image className="imagen-hamburguesa" src="../src/assets/images/logohamburguesa.jpg" thumbnail roundedCircle/>
        <Navbar.Brand> 
            <Nav>
              <LinkContainer to={`/`}>
                <Nav.Link>Hamburguesas el Coste</Nav.Link>
              </LinkContainer>   
            </Nav>
        </Navbar.Brand>
        <Container className="justify-content-center">
                <Nav>
                  <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                     {categorys.map((category) => (
                        <Menu 
                          key={category.id}
                          id={category.id}
                          name={category.name}
                        />
                    ))}   
                  </NavDropdown>
                </Nav>
        </Container>
        <Nav className="size-carrito">
              <Nav.Link href="#cartwidget">
                <CartWidget />
              </Nav.Link>
        </Nav>  
      </Navbar> 
    </div>  
  )
}

export default NavBar