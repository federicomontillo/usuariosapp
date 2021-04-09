import React, { useState } from 'react';
import { Usuarios } from './Usuarios';

import Form from 'react-bootstrap/Form';


export const Formulario = () => {

    const [busqueda, guardaBusqueda] = useState({numero: ''});
    const { numero, nacionalidad } = busqueda;

    const handleChange = e => {
        guardaBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    };

    return (
        <>
            <Form>
                <Form.Group controlId="numero">
                    <Form.Label data-testid="texto-numeros">Indique la cantidad de usuarios que quiere buscar:</Form.Label>
                    <Form.Control 
                    name="numero"
                    type="number" 
                    value={numero}
                    placeholder="0" 
                    onChange={handleChange}
                    data-testid="ingresar-numero"
                    />
                    <Form.Label data-testid="texto-nacionalidad">Indique la nacionalidad:</Form.Label>
                    <Form.Control 
                    as="select"
                    name="nacionalidad"
                    value={nacionalidad}
                    onChange={handleChange}
                    data-testid="select-pais"
                    >
                        <option value=" ">Seleccione un pais</option>
                        <option value="us">Estados unidos</option>
                        <option value="br">Brazil</option>
                        <option value="fr">Francia</option>
                        <option value="de">Alemania</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            <Usuarios 
                busqueda={busqueda}
            />
            
        </>
    )
};
