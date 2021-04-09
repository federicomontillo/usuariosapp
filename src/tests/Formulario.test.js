import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/user-event';

import { Formulario } from '../components/Formulario';



test('Textos Formulario', () => {
    
    render( <Formulario /> );

    expect( screen.getByTestId('texto-numeros').tagName ).toBe('LABEL');
    expect( screen.getByTestId('texto-nacionalidad').tagName ).toBe('LABEL');

});

test('Campos Formulario', () => {
    
    render( <Formulario /> );

    //Verificar campo de Ingresar Numero de  Usuarios
    userEvent.type(screen.getByTestId('ingresar-numero'), '1');

    //Verificar la cantidad de opciones en paises
    const paisesDropDown = screen.getByTestId('select-pais');
    expect(paisesDropDown.children.length).toEqual(7);

});