import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';

export const Usuario = ({usuario}) => {

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
            <Card className="w-auto mt-1">
                <Row>
                    <Col>
                        <Image src={usuario.picture.large} className="m-3" roundedCircle />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{usuario.name.first + " " + usuario.name.last}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{usuario.email}</Card.Subtitle>
                            <Card.Text>{usuario.location.country}</Card.Text>
                            <Button variant="primary" onClick={handleShow}>Mas Informacion</Button>
                        </Card.Body>
                    </Col>
                </Row>    
            </Card>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Image src={usuario.picture.large} className="m-auto" roundedCircle />
                    <Card.Title className="mt-5">{usuario.name.first + " " + usuario.name.last}</Card.Title>
                </Modal.Header>
                <Modal.Body>Edad: {usuario.dob.age}</Modal.Body>
                
                    <ul>
                        <li>Email: {usuario.email}</li>
                        <li>Pais: {usuario.location.country}</li>
                        <li>Ciudad: {usuario.location.city}</li>
                        <li>Telefono: {usuario.phone}</li>
                    </ul>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="success" href={'mailto:' + usuario.email + '?subject=Consulta'}>
                        Contactar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};