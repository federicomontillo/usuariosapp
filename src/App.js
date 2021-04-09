import React from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';

import { Row, Container, Col } from 'react-bootstrap';

function App() {

  return (
    <>
      <Header />
      <Container data-testid="container" fluid className="mt-3 text-center">
        <Row className="w-75 m-auto">
          <Col>
            <Formulario />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
