import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = ({id, name}) => {
    return (
        <div >
            <LinkContainer key={id} to={`/category/${name}`}>
                <NavDropdown.Item>
                    {name}
                </NavDropdown.Item>
            </LinkContainer>
        </div>
    )
}

export default Menu
