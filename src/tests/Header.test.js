import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/user-event';
import { Header } from '../components/Header';


test('Texto NavBar Brand', () => {
    
    render( <Header /> );

    expect( screen.getByTestId('brand-navbar').tagName ).toBe('A');

});