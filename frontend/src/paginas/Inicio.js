import { Container, Row, Col } from 'react-bootstrap';

const textStyle = {
  color: 'white', // Cambia a 'black' si quieres texto negro
  fontFamily: 'Arial, Verdana, sans-serif' // Cambia a 'Verdana' si prefieres esa fuente
  
};

function Inicio() {
  return (
    <main>
      <Container>
        <h1 className="text-center mt-4" style={textStyle}>BIENVENIDO A NUESTRA PAGINA WEB OFICIAL!!</h1><br/><br/>
        <Row>
          <Col md={6}>
            <img className="imagenInicio img-fluid" src="./imagenes/halo.jpg" alt="Halo" />
          </Col>
          <Col md={6}>
            <img className="imagenInicio img-fluid" src="./imagenes/valorant.jpg" alt="Valorant" />
          </Col>
        </Row>

        <h4 className="text-center mt-4" style={textStyle}>REVISA NUESTRO CATALOGO DE VIDEOJUEGOS!</h4><br/><br/>
        <Row>
          <Col md={12}>
            <img className="imagenInicio img-fluid" src="./imagenes/watchdogs.jpg" alt="Watch Dogs" />
          </Col>
        </Row>
        <h4 className="text-center mt-4" style={textStyle}>TE DAREMOS UN 10% EN TU PRIMERA COMPRA😉</h4>
      </Container>
    </main>
  );
}

export default Inicio;

