import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
        <Navbar bg="warning" variant="dark">
            <Container className="justify-content-center">
                <Nav activeKey="/home">
                    <Nav.Item>
                         <h3>{greeting}</h3>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default ItemListContainer
