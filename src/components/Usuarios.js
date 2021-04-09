import React, { useState, useEffect } from 'react';
import { Usuario } from './Usuario';

import { Container, Col, Row } from 'react-bootstrap';


export const Usuarios = ({busqueda}) => {


    const [usuarios, guardarUsuarios] = useState([]);

    const { numero } = busqueda;

    useEffect(() => {
        const consultarAPI = async () => {
                if(busqueda.numero > 0) {
                    const url =`https://randomuser.me/api/?results=${busqueda.numero}&nat=${busqueda.nacionalidad}`;
                    const respuesta = await fetch(url);
                    const usuariosAPI = await respuesta.json();
                
                    guardarUsuarios(usuariosAPI.results);
                }
            }
        consultarAPI()  
        }, [busqueda]);

    return (
        <>
            <Container className="mt-5">
            <h3>RandomUsers</h3>
                {numero ?
                    <Row>
                        <Col>
                            {usuarios.map(usuario => (
                                <Usuario 
                                    usuario={usuario}
                                    key={usuario.login.uuid}
                                />
                            ))}
                        </Col>
                    </Row>
                : <p>Por favor indique un numero de usuaros a buscar.</p>}
                
            </Container>
        </>
    )
}
