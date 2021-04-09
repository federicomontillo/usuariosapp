import React from 'react';
import logo from '../img/user-regular.svg';

import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" data-testid="brand-navbar">
            <img
                src={logo}
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
             Usuarios App
            </Navbar.Brand>
        </Navbar>
    )
};