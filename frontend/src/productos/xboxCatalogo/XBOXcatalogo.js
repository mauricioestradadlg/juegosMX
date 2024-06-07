import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const textStyle = {
    color: 'white', // Cambia a 'black' si quieres texto negro
    fontFamily: 'Arial, Verdana, sans-serif' // Cambia a 'Verdana' si prefieres esa fuente
  };



function XBOXcatalogo(){

    return (
        <>
              <main id = "mainP">
        <Container>
        <h1 className="h1Inicio mt-4" id ="h1Producto"style={textStyle}>CATEGORIAS DE JUEGOS (XBOX): </h1>
        <Row className="mt-4">

          <Col md={6} className="mb-4">

            <Card className="producto" style={{ textAlign: 'left' }}>
              <Row noGutters>

                <Col className='categorias'>

                  <Card.Body><br/>
                    <Card.Title className='h4Producto' style={textStyle}>FPS</Card.Title>
                    <Link to="/catalogo/xbox/fps">
                    <Card.Img variant="top" src="../imagenes/fps.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </Link>

                  </Card.Body>

                  <Card.Body><br/>
                    <Card.Title className='h4Producto' style={textStyle}>ACCION</Card.Title>
                    <Link to="/catalogo/xbox/accion">
                    <Card.Img variant="top" src="../imagenes/accion.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </Link>
                  </Card.Body>

                  <Card.Body><br/>
                    <Card.Title className='h4Producto' style={textStyle}>DEPORTES</Card.Title>
                    <Link to="/catalogo/xbox/deportes">
                    <Card.Img variant="top" src="../imagenes/deportes.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </Link>
                  </Card.Body>
                 
                </Col><br/>
                
              </Row>
            </Card>


          </Col>

          <Col md={6} className="mb-4">
            <Card className="producto" style={{ textAlign: 'left' }}>
              <Row noGutters>

               <Col className='categorias'>
                  <Card.Body>
                    <Card.Title className='h4Producto' style={textStyle}>RPG</Card.Title>
                    <Link to="/catalogo/xbox/rpg">
                    <Card.Img variant="top" src="../imagenes/rpg.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </Link>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className='h4Producto' style={textStyle}>LUCHA</Card.Title>
                    <Link to="/catalogo/xbox/lucha">
                    <Card.Img variant="top" src="../imagenes/lucha.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </Link>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className='h4Producto' style={textStyle}>CARRERAS</Card.Title>
                    <Link to="/catalogo/xbox/carreras">
                    <Card.Img variant="top" src="../imagenes/carreras.jpg" className="imagenProducto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
        </main>
        </>
    );

}

export default XBOXcatalogo
