import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const textStyle = {
  color: 'white', // Cambia a 'black' si quieres texto negro
  fontFamily: 'Arial, Verdana, sans-serif' // Cambia a 'Verdana' si prefieres esa fuente
};

function Producto() {
  return (
    <main style={{ textAlign: 'left' }}>
      <Container>
        <h1 className="h1Inicio mt-4" style={textStyle}>PRODUCTOS:</h1>
        <Row className="mt-4">

          <Col md={6} className="mb-4">

            <Card className="producto" style={{ textAlign: 'left' }}>
              <Row noGutters>
                <Col xs="auto">
                  <Link to="/catalogo/xbox">
                    <Card.Img variant="top" src="./imagenes/xbox.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                  </Link>
                </Col>

                <Col>
                  <Card.Body>
                    <Card.Title className='h4Producto' style={textStyle}>XBOX</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>


          </Col>

          <Col md={6} className="mb-4">
            <Card className="producto" style={{ textAlign: 'left' }}>
              <Row noGutters>
                <Col xs="auto">
                  <Link to="/catalogo/pc">
                    <Card.Img variant="top" src="./imagenes/PCgamer.png" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                  </Link>
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title className='h4Producto' style={textStyle}>PC</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Producto;



