import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = ({id, name}) => {
    return (
        <>
            <LinkContainer to={`/category/${name}`}>
                <NavDropdown.Item key={id}>
                    {name}
                </NavDropdown.Item>
            </LinkContainer>
        </>
    )
}

export default Menu
