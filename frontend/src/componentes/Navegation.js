import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navegation(){

    
    return(<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto navbar">
            <Nav.Link className = 'navbarli' href="/">Inicio</Nav.Link>
            <Nav.Link className = 'navbarli' href="/aboutus">Sobre Nosotros</Nav.Link>
            <Nav.Link className = 'navbarli' href="/catalogo">Catalogo</Nav.Link>
            <Nav.Link className = 'navbarli' href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>);


}

export default Navegation

